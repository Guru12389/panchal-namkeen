const express = require("express");
const Order = require("../models/Order");
const Customer = require("../models/Customer");
const { authRequired, adminRequired } = require("../middleware/auth");
const {
  sendPaymentVerifiedEmail,
  sendShippedEmail,
} = require("../config/mailer");

const router = express.Router();
router.use(authRequired, adminRequired);

// LIST ORDERS
router.get("/orders", async (req, res) => {
  const orders = await Order.find()
    .sort({ createdAt: -1 })
    .populate("customerId", "name email phone");
  res.json({ orders });
});

// UPDATE ORDER
router.patch("/orders/:id", async (req, res) => {
  try {
    const { paymentStatus, orderStatus, courier, awb, note } = req.body;
    const order = await Order.findById(req.params.id).populate(
      "customerId",
      "name email"
    );
    if (!order) return res.status(404).json({ error: "Not found" });

    const prevPayment = order.paymentStatus;
    const prevOrder = order.orderStatus;

    if (paymentStatus) order.paymentStatus = paymentStatus;
    if (orderStatus && orderStatus !== prevOrder) {
      order.orderStatus = orderStatus;
      order.timeline.push({ status: orderStatus, note: note || "" });
    }
    if (courier !== undefined) order.courier = courier;
    if (awb !== undefined) order.awb = awb;

    await order.save();

    // Email notifications
    if (paymentStatus === "VERIFIED" && prevPayment !== "VERIFIED") {
      sendPaymentVerifiedEmail(order.customerId.email, order).catch(() => {});
    }
    if (orderStatus === "SHIPPED" && prevOrder !== "SHIPPED") {
      sendShippedEmail(order.customerId.email, order).catch(() => {});
    }

    res.json({ success: true, order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// LIST CUSTOMERS
router.get("/customers", async (req, res) => {
  const customers = await Customer.find()
    .select("-password")
    .sort({ createdAt: -1 });
  res.json({ customers });
});

// STATS
router.get("/stats", async (req, res) => {
  const totalOrders = await Order.countDocuments();
  const pending = await Order.countDocuments({ paymentStatus: "PENDING" });
  const verified = await Order.countDocuments({ paymentStatus: "VERIFIED" });
  const totalRevenue = await Order.aggregate([
    { $match: { paymentStatus: "VERIFIED" } },
    { $group: { _id: null, sum: { $sum: "$totalAmount" } } },
  ]);
  res.json({
    totalOrders,
    pending,
    verified,
    totalRevenue: totalRevenue[0]?.sum || 0,
  });
});

module.exports = router;