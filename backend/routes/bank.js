const express = require("express");
const BankDetails = require("../models/BankDetails");
const { authRequired, adminRequired } = require("../middleware/auth");

const router = express.Router();

// PUBLIC — customer sees bank details at checkout
router.get("/", async (req, res) => {
  let details = await BankDetails.findOne();
  if (!details) details = await BankDetails.create({});
  res.json({ details });
});

// ADMIN — update bank details
router.put("/", authRequired, adminRequired, async (req, res) => {
  let details = await BankDetails.findOne();
  if (!details) details = new BankDetails(req.body);
  else Object.assign(details, req.body);
  await details.save();
  res.json({ success: true, details });
});

module.exports = router;