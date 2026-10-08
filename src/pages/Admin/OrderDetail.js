import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/client";

const ORDER_STATUSES = [
  "PLACED",
  "CONFIRMED",
  "PACKED",
  "SHIPPED",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELLED",
];

export default function AdminOrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [trackingForm, setTrackingForm] = useState({
    orderStatus: "",
    courier: "",
    awb: "",
    note: "",
  });

  function load() {
    api
      .adminOrders()
      .then((d) => {
        const found = (d.orders || []).find((o) => o._id === id);
        if (!found) return navigate("/admin/orders");
        setOrder(found);
        setTrackingForm({
          orderStatus: found.orderStatus,
          courier: found.courier || "",
          awb: found.awb || "",
          note: "",
        });
      })
      .catch((e) => setMsg(e.message));
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [id]);

  async function setPayment(status) {
    setBusy(true);
    setMsg("");
    try {
      await api.adminUpdateOrder(id, { paymentStatus: status });
      setMsg(`Payment ${status === "VERIFIED" ? "verified" : "rejected"}.`);
      load();
    } catch (e) {
      setMsg(e.message);
    } finally {
      setBusy(false);
    }
  }

  async function updateTracking() {
    setBusy(true);
    setMsg("");
    try {
      await api.adminUpdateOrder(id, trackingForm);
      setMsg("Order updated.");
      load();
    } catch (e) {
      setMsg(e.message);
    } finally {
      setBusy(false);
    }
  }

  if (!order) return <p>Loading...</p>;

  return (
    <div className="admin-page">
      <button
        onClick={() => navigate("/admin/orders")}
        className="btn-sm"
        style={{ background: "#eee", marginBottom: 12 }}
      >
        ← Back
      </button>

      <h1>Order {order.orderId}</h1>
      <p className="sub">
        {new Date(order.createdAt).toLocaleString()} · ₹{order.totalAmount}
      </p>

      {msg && <p className="checkout-error">{msg}</p>}

      <div className="detail-card">
        <h3>Customer</h3>
        <div className="detail-row">
          <span>Name</span>
          <b>{order.customerId?.name}</b>
        </div>
        <div className="detail-row">
          <span>Email</span>
          <b>{order.customerId?.email}</b>
        </div>
        <div className="detail-row">
          <span>Phone</span>
          <b>{order.customerId?.phone}</b>
        </div>
      </div>

      <div className="detail-card">
        <h3>Shipping Address</h3>
        <div className="detail-row">
          <span>Name</span>
          <b>{order.shippingAddress?.name}</b>
        </div>
        <div className="detail-row">
          <span>Phone</span>
          <b>{order.shippingAddress?.phone}</b>
        </div>
        <div className="detail-row">
          <span>Address</span>
          <b>
            {order.shippingAddress?.line1}, {order.shippingAddress?.city},{" "}
            {order.shippingAddress?.state} - {order.shippingAddress?.pincode}
          </b>
        </div>
      </div>

      <div className="detail-card">
        <h3>Payment</h3>
        <div className="detail-row">
          <span>Method</span>
          <b>{order.paymentMethod}</b>
        </div>
        <div className="detail-row">
          <span>Transaction ID</span>
          <b style={{ fontFamily: "monospace" }}>{order.transactionId}</b>
        </div>
        <div className="detail-row">
          <span>Payment Status</span>
          <span className={`status-badge status-${order.paymentStatus}`}>
            {order.paymentStatus}
          </span>
        </div>
        {order.paymentProofUrl && (
          <div style={{ marginTop: 14 }}>
            <p style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>
              Payment Screenshot
            </p>
            <a href={order.paymentProofUrl} target="_blank" rel="noreferrer">
              <img
                src={order.paymentProofUrl}
                alt="Payment proof"
                className="proof-img"
              />
            </a>
          </div>
        )}

        <div className="admin-actions-row">
          <button
            className="act-verify"
            onClick={() => setPayment("VERIFIED")}
            disabled={busy || order.paymentStatus === "VERIFIED"}
          >
            ✓ Verify Payment
          </button>
          <button
            className="act-reject"
            onClick={() => setPayment("REJECTED")}
            disabled={busy || order.paymentStatus === "REJECTED"}
          >
            ✗ Reject Payment
          </button>
        </div>
      </div>

      <div className="detail-card">
        <h3>Items</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((it, i) => (
              <tr key={i}>
                <td>{it.name}</td>
                <td>{it.qty}</td>
                <td>₹{it.price}</td>
                <td>₹{it.qty * it.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="detail-card">
        <h3>Fulfillment</h3>
        <div className="update-form">
          <div>
            <label>Order Status</label>
            <select
              value={trackingForm.orderStatus}
              onChange={(e) =>
                setTrackingForm({
                  ...trackingForm,
                  orderStatus: e.target.value,
                })
              }
            >
              {ORDER_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Courier</label>
            <input
              placeholder="e.g. Delhivery"
              value={trackingForm.courier}
              onChange={(e) =>
                setTrackingForm({ ...trackingForm, courier: e.target.value })
              }
            />
          </div>
          <div>
            <label>AWB / Tracking Number</label>
            <input
              placeholder="e.g. 1234567890"
              value={trackingForm.awb}
              onChange={(e) =>
                setTrackingForm({ ...trackingForm, awb: e.target.value })
              }
            />
          </div>
          <div>
            <label>Note (optional)</label>
            <input
              placeholder="Optional message for the customer"
              value={trackingForm.note}
              onChange={(e) =>
                setTrackingForm({ ...trackingForm, note: e.target.value })
              }
            />
          </div>
        </div>
        <div className="admin-actions-row">
          <button
            className="act-verify"
            onClick={updateTracking}
            disabled={busy}
          >
            {busy ? "Saving..." : "Update Order"}
          </button>
        </div>
      </div>

      <div className="detail-card">
        <h3>Timeline</h3>
        {order.timeline?.map((t, i) => (
          <div key={i} className="detail-row">
            <span>
              <b>{t.status}</b>
              {t.note ? ` — ${t.note}` : ""}
            </span>
            <span style={{ color: "#888", fontSize: 12 }}>
              {new Date(t.at).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}