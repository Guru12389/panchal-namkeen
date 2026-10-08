// src/pages/Checkout.js
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { api, getToken } from "../api/client";
import FormField from "../components/FormField";
import qrCode from "./assets/qr.png";
import {
  validateCheckoutForm,
  formatPhone,
  formatPincode,
  validateTransactionId,
} from "../utils/validators";
import "./Checkout.css";

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "";
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bank, setBank] = useState(null);
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
    transactionId: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [proofUrl, setProofUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
const [checkingTx, setCheckingTx] = useState(false);
const [txTaken, setTxTaken] = useState(false);
const [txMessage, setTxMessage] = useState("");


  const subtotal = cart.reduce((a, i) => a + i.price * i.quantity, 0);
  const shipping = subtotal >= 500 ? 0 : 99;
  const total = subtotal + shipping;


  // Live check for duplicate transaction IDs
useEffect(() => {
  const tx = form.transactionId.trim();

  setTxTaken(false);
  setTxMessage("");

  const formatErr = validateTransactionId(tx);
  if (!tx || formatErr) {
    setCheckingTx(false);
    return;
  }

  setCheckingTx(true);
  const timer = setTimeout(async () => {
    try {
      const res = await fetch(
        `${
          process.env.REACT_APP_API_URL || "http://localhost:5000"
        }/api/orders/check-transaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({ transactionId: tx }),
        }
      );
      const data = await res.json();
      if (data.available === false) {
        setTxTaken(true);
        setTxMessage("This transaction ID has already been used.");
      }
    } catch {
      // Silent failure — final check happens on submit
    } finally {
      setCheckingTx(false);
    }
  }, 600); // debounce

  return () => clearTimeout(timer);
}, [form.transactionId]);


  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { redirectTo: "/checkout" } });
      return;
    }
    if (cart.length === 0) {
      navigate("/cart");
      return;
    }
    api.getBank().then((d) => setBank(d.details)).catch(() => {});
  }, [user, cart.length, navigate]);

  function handleChange(field) {
    return (e) => {
      let val = e.target.value;
      if (field === "phone") val = formatPhone(val);
      if (field === "pincode") val = formatPincode(val);
      setForm({ ...form, [field]: val });

      if (touched[field]) {
        const { errors: newErrors } = validateCheckoutForm({
          ...form,
          [field]: val,
        });
        setErrors(newErrors);
      }
    };
  }

  function handleBlur(field) {
    return () => {
      setTouched({ ...touched, [field]: true });
      const { errors: newErrors } = validateCheckoutForm(form);
      setErrors(newErrors);
    };
  }

  async function handleUpload(file) {
    if (!file) return;
    setError("");

    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      setError(
        "Payment screenshot upload is not configured yet. Please contact support."
      );
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5 MB.");
      return;
    }
    if (!/^image\//.test(file.type)) {
      setError("Only image files are allowed.");
      return;
    }

    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: fd }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Upload failed");
      setProofUrl(data.secure_url);
    } catch (e) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  }

  async function placeOrder(e) {
    e.preventDefault();
    setError("");

    const allTouched = {
      name: true,
      phone: true,
      line1: true,
      city: true,
      state: true,
      pincode: true,
      transactionId: true,
    };
    setTouched(allTouched);

    const { errors: newErrors, isValid } = validateCheckoutForm(form);
    setErrors(newErrors);
    if (!isValid) {
      setError("Please fix the errors above.");
      return;
    }
    if (txTaken) {
  setError("This transaction ID is already used. Please enter a different one.");
  return;
}

    if (!proofUrl) {
      setError("Please upload a screenshot of your payment.");
      return;
    }
    if (!getToken()) {
      navigate("/login", { state: { redirectTo: "/checkout" } });
      return;
    }

    setBusy(true);
    try {
      const items = cart.map((it) => ({
        productId: it.id || it.cartId,
        name: `${it.name} (${it.weight})`,
        qty: it.quantity,
        price: it.price,
      }));

      const { order } = await api.createOrder({
        items,
        totalAmount: total,
        transactionId: form.transactionId.trim(),
        paymentProofUrl: proofUrl,
        shippingAddress: {
          name: form.name.trim(),
          phone: form.phone,
          line1: form.line1.trim(),
          city: form.city.trim(),
          state: form.state.trim(),
          pincode: form.pincode,
        },
      });

      clearCart();
      navigate(`/my-orders/${order._id}`);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  function copy(text) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p className="checkout-sub">
        Pay via bank transfer and enter your transaction details below.
      </p>

      {error && <p className="checkout-error">{error}</p>}

      <div className="checkout-grid">
        <div className="checkout-left">
          <div className="checkout-card">
  <h2>1. Scan QR or use bank transfer</h2>

  <div className="pay-qr-wrap">
    <img src={qrCode} alt="Payment QR" className="pay-qr-img" />
    <div className="pay-qr-info">
      <p className="pay-qr-title">Scan & Pay with any UPI app</p>
      <p className="pay-qr-sub">
        Google Pay · PhonePe · Paytm · BHIM · Any UPI
      </p>
      <p className="pay-qr-amount">
        Amount: <b>₹{total}</b>
      </p>
      <p className="pay-qr-note">
        After payment, enter the <b>12-digit UTR</b> below and upload a
        screenshot.
      </p>
    </div>
  </div>

  <div className="pay-divider">
    <span>or pay to bank account directly</span>
  </div>

  {bank ? (
    <div className="bank-box">
      {bank.upiId && (
        <div className="bank-row">
          <span>UPI ID</span>
          <b>{bank.upiId}</b>
          <button type="button" onClick={() => copy(bank.upiId)}>
            Copy
          </button>
        </div>
      )}
      <div className="bank-row">
        <span>Account Name</span>
        <b>{bank.accountName || "-"}</b>
      </div>
      <div className="bank-row">
        <span>Account No</span>
        <b>{bank.accountNumber || "-"}</b>
        <button
          type="button"
          onClick={() => copy(bank.accountNumber)}
        >
          Copy
        </button>
      </div>
      <div className="bank-row">
        <span>IFSC</span>
        <b>{bank.ifsc || "-"}</b>
        <button type="button" onClick={() => copy(bank.ifsc)}>
          Copy
        </button>
      </div>
      <div className="bank-row">
        <span>Bank</span>
        <b>
          {bank.bankName || "-"}
          {bank.branch ? ` — ${bank.branch}` : ""}
        </b>
      </div>
      <p className="bank-amount">
        Amount to pay: <b>₹{total}</b>
      </p>
    </div>
  ) : (
    <p>Loading bank details...</p>
  )}
</div>

          <div className="checkout-card">
            <h2>2. Confirm your payment</h2>

            <FormField
  label="Transaction ID / UTR"
  name="transactionId"
  value={form.transactionId}
  onChange={handleChange("transactionId")}
  onBlur={handleBlur("transactionId")}
  error={txTaken ? txMessage : errors.transactionId}
  touched={touched.transactionId || txTaken}
  placeholder="e.g. 421893746112"
  maxLength={30}
/>

{checkingTx && (
  <p className="tx-checking">Checking transaction ID...</p>
)}

{!checkingTx &&
  !txTaken &&
  form.transactionId.trim().length >= 6 &&
  !validateTransactionId(form.transactionId) && (
    <p className="tx-ok">Transaction ID looks good ✓</p>
  )}

            <label className="checkout-file-label">
              Payment Screenshot <span className="ff-req">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e.target.files?.[0])}
            />
            {uploading && <p className="upload-hint">Uploading...</p>}
            {proofUrl && (
              <div className="proof-preview">
                <img src={proofUrl} alt="Payment proof" />
                <span>Uploaded ✓</span>
              </div>
            )}
          </div>

          <div className="checkout-card">
            <h2>3. Shipping Address</h2>

            <FormField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
              placeholder="e.g. Abhay Dubey"
            />

            <FormField
              label="Phone (10 digits)"
              name="phone"
              value={form.phone}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
              placeholder="9876543210"
              inputMode="numeric"
              maxLength={10}
            />

            <FormField
              label="Address (House / Street / Landmark)"
              name="line1"
              value={form.line1}
              onChange={handleChange("line1")}
              onBlur={handleBlur("line1")}
              error={errors.line1}
              touched={touched.line1}
              placeholder="e.g. 12, Gandhi Nagar, Near Bus Stand"
            />

            <div className="checkout-fields">
              <FormField
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange("city")}
                onBlur={handleBlur("city")}
                error={errors.city}
                touched={touched.city}
                placeholder="Farrukhabad"
              />
              <FormField
                label="State"
                name="state"
                value={form.state}
                onChange={handleChange("state")}
                onBlur={handleBlur("state")}
                error={errors.state}
                touched={touched.state}
                placeholder="Uttar Pradesh"
              />
            </div>

            <FormField
              label="Pincode"
              name="pincode"
              value={form.pincode}
              onChange={handleChange("pincode")}
              onBlur={handleBlur("pincode")}
              error={errors.pincode}
              touched={touched.pincode}
              placeholder="209625"
              inputMode="numeric"
              maxLength={6}
            />
          </div>
        </div>

        <div className="checkout-right">
          <div className="checkout-card sticky">
            <h2>Order Summary</h2>
            <ul className="checkout-items">
              {cart.map((it) => (
                <li key={it.cartId}>
                  <span>
                    {it.name} ({it.weight}) x {it.quantity}
                  </span>
                  <b>₹{it.price * it.quantity}</b>
                </li>
              ))}
            </ul>
            <div className="checkout-total-row">
              <span>Subtotal</span>
              <b>₹{subtotal}</b>
            </div>
            <div className="checkout-total-row">
              <span>Shipping</span>
              <b>{shipping === 0 ? "FREE" : `₹${shipping}`}</b>
            </div>
            <div className="checkout-total-row grand">
              <span>Total</span>
              <b>₹{total}</b>
            </div>

            <button
              className="checkout-submit"
              onClick={placeOrder}
              disabled={busy || uploading}
            >
              {busy ? "Placing order..." : `Place Order — ₹${total}`}
            </button>

            <p className="checkout-note">
              Your order will be confirmed once we verify your payment.
            </p>

            <Link to="/cart" className="checkout-back">
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}