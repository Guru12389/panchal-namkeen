require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Customer = require("./models/Customer");

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to DB");

  const email = "admin@panchalveda.com";
  const password = "Admin@123456"; // change this after first login!
  const name = "Admin";
  const phone = "9999999999";

  let user = await Customer.findOne({ email });
  if (user) {
    user.role = "admin";
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    console.log("Admin updated:", email, "password:", password);
  } else {
    await Customer.create({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      role: "admin",
    });
    console.log("Admin created:", email, "password:", password);
  }

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});