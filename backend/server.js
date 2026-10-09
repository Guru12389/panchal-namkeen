const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");
const bankRoutes = require("./routes/bank");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
      "https://panchalveda.com",
      "https://www.panchalveda.com",
      "https://www.panchalveda.in",
      "https://panchal-namkeen-api.onrender.com",
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => res.json({ ok: true, service: "Panchal Namkeen API" }));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bank", bankRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, "0.0.0.0", () => console.log(`Server on port ${PORT}`));
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
    process.exit(1);
  });