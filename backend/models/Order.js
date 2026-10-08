const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  qty: Number,
  price: Number,
});

const TimelineSchema = new mongoose.Schema({
  status: String,
  note: String,
  at: { type: Date, default: Date.now },
});

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    items: [ItemSchema],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, default: "BANK_TRANSFER" },
    paymentStatus: {
      type: String,
      enum: ["PENDING", "VERIFIED", "REJECTED"],
      default: "PENDING",
    },
    transactionId: { type: String, required: true },
    paymentProofUrl: String,
    orderStatus: {
      type: String,
      enum: [
        "PLACED",
        "CONFIRMED",
        "PACKED",
        "SHIPPED",
        "OUT_FOR_DELIVERY",
        "DELIVERED",
        "CANCELLED",
      ],
      default: "PLACED",
    },
    shippingAddress: {
      name: String,
      phone: String,
      line1: String,
      city: String,
      state: String,
      pincode: String,
    },
    courier: String,
    awb: String,
    timeline: [TimelineSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);