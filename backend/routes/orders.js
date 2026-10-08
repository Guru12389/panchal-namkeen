const express = require("express");
const Order = require("../models/Order");
const Customer = require("../models/Customer");
const { authRequired } = require("../middleware/auth");
const { sendOrderPlacedEmail } = require("../config/mailer");

const router = express.Router();

// CREATE ORDER
router.post("/", authRequired, async (req, res) => {
  try {
    const { items, totalAmount, transactionId, paymentProofUrl, shippingAddress } =
      req.body;

    const user = await Customer.findById(req.user.id);
    if (!user) return res.status(401).json({ error: "Login required" });
    if (!user.emailVerified)
      return res.status(403).json({
        error: "Please verify your email before placing an order. Check your inbox.",
      });

    if (!items || !items.length)
      return res.status(400).json({ error: "Cart is empty" });

    const addr = shippingAddress || {};
    if (!addr.name || addr.name.trim().length < 2)
      return res.status(400).json({ error: "Invalid name" });
    if (!/^[6-9]\d{9}$/.test(addr.phone || ""))
      return res.status(400).json({ error: "Invalid phone" });
    if (!addr.line1 || addr.line1.trim().length < 6)
      return res.status(400).json({ error: "Invalid address" });
    if (!addr.city || addr.city.trim().length < 2)
      return res.status(400).json({ error: "Invalid city" });
    if (!addr.state || addr.state.trim().length < 2)
      return res.status(400).json({ error: "Invalid state" });
    if (!/^[1-9][0-9]{5}$/.test(addr.pincode || ""))
      return res.status(400).json({ error: "Invalid pincode" });

    const tx = String(transactionId || "").trim();
    if (tx.length < 6 || tx.length > 30)
      return res.status(400).json({ error: "Invalid transaction ID length" });
    if (!/^[A-Za-z0-9]+$/.test(tx))
      return res
        .status(400)
        .json({ error: "Transaction ID can only contain letters and numbers" });
    if (/^(\w)\1+$/.test(tx))
      return res.status(400).json({ error: "Transaction ID looks invalid" });

    const dup = await Order.findOne({ transactionId: tx });
    if (dup)
      return res
        .status(409)
        .json({ error: "This transaction ID has already been used." });

    if (!paymentProofUrl)
      return res.status(400).json({ error: "Payment screenshot is required" });

    const count = await Order.countDocuments();
    const orderId = `PN-${new Date().getFullYear()}-${String(count + 1).padStart(
      4,
      "0"
    )}`;

    const order = await Order.create({
      orderId,
      customerId: req.user.id,
      items,
      totalAmount,
      transactionId: tx,
      paymentProofUrl,
      shippingAddress: addr,
      timeline: [
        {
          status: "PLACED",
          note: "Order placed, awaiting payment verification",
        },
      ],
    });

    sendOrderPlacedEmail(user.email, order).catch((err) =>
      console.error("Order email failed:", err.message)
    );

    res.json({ success: true, order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// CHECK TRANSACTION AVAILABILITY
router.post("/check-transaction", authRequired, async (req, res) => {
  try {
    const { transactionId } = req.body;
    const tx = String(transactionId || "").trim();
    if (!tx || tx.length < 6) return res.json({ available: true });

    const exists = await Order.findOne({ transactionId: tx }).select("_id");
    return res.json({ available: !exists });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// MY ORDERS
router.get("/my", authRequired, async (req, res) => {
  const orders = await Order.find({ customerId: req.user.id }).sort({
    createdAt: -1,
  });
  res.json({ orders });
});

// SINGLE ORDER
router.get("/:id", authRequired, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ error: "Not found" });
  if (order.customerId.toString() !== req.user.id && req.user.role !== "admin")
    return res.status(403).json({ error: "Forbidden" });
  res.json({ order });
});

module.exports = router;