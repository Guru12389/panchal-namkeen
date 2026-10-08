const mongoose = require("mongoose");

const BankDetailsSchema = new mongoose.Schema(
  {
    accountName: { type: String, default: "Panchalveda Agrofoods LLP" },
    accountNumber: { type: String, default: "0733002100018146" },
    ifsc: { type: String, default: "PUNB0073300" },
    bankName: { type: String, default: "Punjab National Bank" },
    branch: { type: String, default: "Kamalganj" },
    upiId: { type: String, default: "8174900977m@pnb" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BankDetails", BankDetailsSchema);