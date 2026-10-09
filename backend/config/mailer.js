const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const BRAND = "#b8671c";

function emailWrap(title, bodyHtml) {
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:auto;background:#ffffff;border:1px solid #eee;border-radius:12px;overflow:hidden">
    <div style="background:${BRAND};padding:18px 24px;color:#fff;font-weight:700;font-size:18px">
      PanchalVeda Namkeen
    </div>
    <div style="padding:28px 24px;color:#333;line-height:1.6">
      <h2 style="color:${BRAND};margin:0 0 14px;font-size:20px">${title}</h2>
      ${bodyHtml}
    </div>
    <div style="background:#faf7f2;padding:14px 24px;font-size:12px;color:#888;text-align:center">
      A Crunch of Tradition, A Dash of Heeng<br/>
      Need help? Reply to this email or WhatsApp +91 8174900977
    </div>
  </div>`;
}

function button(href, label) {
  return `<a href="${href}" style="display:inline-block;background:${BRAND};color:#fff;padding:12px 26px;border-radius:8px;text-decoration:none;font-weight:700;margin:14px 0">${label}</a>`;
}

async function sendVerifyEmail(to, token, name) {
  const url = `${process.env.FRONTEND_URL}/verify-email/${token}`;
  await transporter.sendMail({
    from: `"PanchalVeda Namkeen" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your email — PanchalVeda Namkeen",
    html: emailWrap(
      `Welcome, ${name || "there"}!`,
      `
      <p>Thanks for signing up. Please verify your email address to activate your account and start placing orders.</p>
      ${button(url, "Verify My Email")}
      <p style="font-size:13px;color:#888">Or paste this URL: ${url}</p>
      <p style="font-size:13px;color:#888">This link expires in 24 hours.</p>
      `
    ),
  });
}

async function sendResetEmail(to, token) {
  const url = `${process.env.FRONTEND_URL}/reset-password/${token}`;
  await transporter.sendMail({
    from: `"PanchalVeda Namkeen" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Reset your password — PanchalVeda Namkeen",
    html: emailWrap(
      "Reset your password",
      `
      <p>Click the button below to reset your password. This link expires in 15 minutes.</p>
      ${button(url, "Reset Password")}
      <p style="font-size:13px;color:#888">Or paste this URL: ${url}</p>
      <p style="font-size:13px;color:#888">If you didn't request this, please ignore this email.</p>
      `
    ),
  });
}

async function sendOrderPlacedEmail(to, order) {
  await transporter.sendMail({
    from: `"PanchalVeda Namkeen" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Order ${order.orderId} received — awaiting verification`,
    html: emailWrap(
      "We received your order!",
      `
      <p>Thanks for your order. We're verifying your payment now.</p>
      <p><b>Order ID:</b> ${order.orderId}<br/>
      <b>Amount:</b> ₹${order.totalAmount}<br/>
      <b>Transaction ID:</b> ${order.transactionId}</p>
      <p>You'll get another email as soon as your payment is verified.</p>
      `
    ),
  });
}

async function sendPaymentVerifiedEmail(to, order) {
  await transporter.sendMail({
    from: `"PanchalVeda Namkeen" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Payment verified for ${order.orderId}`,
    html: emailWrap(
      "Payment verified ✓",
      `
      <p>Great news — we've verified your payment for order <b>${order.orderId}</b>.</p>
      <p>Your order is now being prepared. We'll update you when it ships.</p>
      `
    ),
  });
}

async function sendShippedEmail(to, order) {
  await transporter.sendMail({
    from: `"PanchalVeda Namkeen" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Your order ${order.orderId} has shipped!`,
    html: emailWrap(
      "Your order is on the way 🚚",
      `
      <p>Order <b>${order.orderId}</b> has been shipped.</p>
      ${order.courier ? `<p><b>Courier:</b> ${order.courier}</p>` : ""}
      ${order.awb ? `<p><b>Tracking ID:</b> ${order.awb}</p>` : ""}
      <p>Thank you for shopping with PanchalVeda!</p>
      `
    ),
  });
}

module.exports = {
  sendResetEmail,
  sendVerifyEmail,
  sendOrderPlacedEmail,
  sendPaymentVerifiedEmail,
  sendShippedEmail,
};