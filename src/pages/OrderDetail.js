import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/client";
import "./Orders.css";

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    api
      .getOrder(id)
      .then((d) => setOrder(d.order))
      .catch((e) => setErr(e.message));
  }, [id]);

  if (err) return <div className="orders-page"><p className="auth-error">{err}</p></div>;
  if (!order) return <div className="orders-page"><p>Loading...</p></div>;

  return (
    <div className="orders-page">
      <Link to="/my-orders" className="back-link">← Back to My Orders</Link>
      <h1>Order {order.orderId}</h1>

      <div className="detail-grid">
        <div className="detail-box">
          <h3>Payment</h3>
          <p>Status: <b>{order.paymentStatus}</b></p>
          <p>Transaction ID: <b>{order.transactionId}</b></p>
          {order.paymentProofUrl && (
            <a href={order.paymentProofUrl} target="_blank" rel="noreferrer">
              View payment proof
            </a>
          )}
        </div>

        <div className="detail-box">
          <h3>Shipping</h3>
          <p>{order.shippingAddress?.name}</p>
          <p>{order.shippingAddress?.line1}</p>
          <p>
            {order.shippingAddress?.city}, {order.shippingAddress?.state} -{" "}
            {order.shippingAddress?.pincode}
          </p>
          <p>Phone: {order.shippingAddress?.phone}</p>
          {order.courier && <p>Courier: {order.courier}</p>}
          {order.awb && <p>AWB: {order.awb}</p>}
        </div>
      </div>

      <h3 className="section-title">Items</h3>
      <table className="items-table">
        <thead>
          <tr><th>Product</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr>
        </thead>
        <tbody>
          {order.items.map((it, i) => (
            <tr key={i}>
              <td>{it.name}</td>
              <td>{it.qty}</td>
              <td>{it.price}</td>
              <td>{it.qty * it.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style={{ textAlign: "right", fontWeight: 700 }}>Total</td>
            <td style={{ fontWeight: 700 }}>{order.totalAmount}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="section-title">Timeline</h3>
      <ul className="timeline">
        {order.timeline?.map((t, i) => (
          <li key={i}>
            <span className="dot" />
            <div>
              <b>{t.status}</b>
              <p>{new Date(t.at).toLocaleString()}</p>
              {t.note && <p className="note">{t.note}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
