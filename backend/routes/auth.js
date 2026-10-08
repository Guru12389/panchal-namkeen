const express = require("express");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
const { sendResetEmail, sendVerifyEmail } = require("../config/mailer");
const { authRequired } = require("../middleware/auth");

const router = express.Router();

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

const buildToken = (user) =>
  signToken({ id: user._id, email: user.email, role: user.role });

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || name.trim().length < 2)
      return res.status(400).json({ error: "Name is required" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email || ""))
      return res.status(400).json({ error: "Invalid email" });
    if (!/^[6-9]\d{9}$/.test(phone || ""))
      return res.status(400).json({ error: "Invalid phone number" });
    if (!password || password.length < 8)
      return res.status(400).json({ error: "Password must be at least 8 characters" });
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password))
      return res.status(400).json({
        error: "Password must contain 1 uppercase, 1 lowercase, and 1 number",
      });

    const exists = await Customer.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(409).json({ error: "Email already registered" });

    const verifyToken = crypto.randomBytes(32).toString("hex");
    const hashed = await bcrypt.hash(password, 10);

    const user = await Customer.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone,
      password: hashed,
      emailVerified: false,
      verifyToken,
      verifyTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    // Send verification email (non-blocking for UX)
    sendVerifyEmail(user.email, verifyToken, user.name).catch((err) =>
      console.error("Verify email failed:", err.message)
    );

    const token = buildToken(user);
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        emailVerified: user.emailVerified,
      },
      needsVerification: true,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// VERIFY EMAIL
router.get("/verify-email/:token", async (req, res) => {
  try {
    const user = await Customer.findOne({
      verifyToken: req.params.token,
      verifyTokenExpiry: { $gt: new Date() },
    });

    if (!user) return res.status(400).json({ error: "Invalid or expired verification link" });

    user.emailVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    res.json({ success: true, email: user.email });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// RESEND VERIFICATION
router.post("/resend-verification", authRequired, async (req, res) => {
  try {
    const user = await Customer.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.emailVerified) return res.json({ success: true, already: true });

    const verifyToken = crypto.randomBytes(32).toString("hex");
    user.verifyToken = verifyToken;
    user.verifyTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await user.save();

    await sendVerifyEmail(user.email, verifyToken, user.name);

    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Customer.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = buildToken(user);
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        emailVerified: user.emailVerified,
      },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Customer.findOne({ email: email.toLowerCase() });
    if (user) {
      const token = crypto.randomBytes(32).toString("hex");
      user.resetToken = token;
      user.resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
      await user.save();
      try {
        await sendResetEmail(email, token);
      } catch (err) {
        console.error("Reset email failed:", err.message);
      }
    }
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// RESET PASSWORD
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { password } = req.body;
    if (!password || password.length < 8)
      return res.status(400).json({ error: "Password must be at least 8 characters" });

    const user = await Customer.findOne({
      resetToken: req.params.token,
      resetTokenExpiry: { $gt: new Date() },
    });
    if (!user) return res.status(400).json({ error: "Invalid or expired token" });

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ME
router.get("/me", authRequired, async (req, res) => {
  const user = await Customer.findById(req.user.id).select("-password");
  res.json({ user });
});

module.exports = router;