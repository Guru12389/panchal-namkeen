const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  line1: String,
  city: String,
  state: String,
  pincode: String,
  isDefault: { type: Boolean, default: false },
});

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },

    emailVerified: { type: Boolean, default: false },
    verifyToken: String,
    verifyTokenExpiry: Date,

    addresses: [AddressSchema],
    resetToken: String,
    resetTokenExpiry: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);