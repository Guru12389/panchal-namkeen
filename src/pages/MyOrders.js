import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { useAuth } from "../context/AuthContext";
import "./Orders.css";

const STATUS_LABEL = {
  PLACED: "Order Placed",
  CONFIRMED: "Confirmed",
  PACKED: "Packed",
  SHIPPED: "Shipped",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

export default function MyOrders() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
      return;
    }
    if (user) {
      api
        .myOrders()
        .then((d) => setOrders(d.orders || []))
        .catch(() => setOrders([]))
        .finally(() => setBusy(false));
    }
  }, [user, loading, navigate]);

  const paymentBadge = (s) => {
    const map = {
      PENDING: "badge badge-pending",
      VERIFIED: "badge badge-verified",
      REJECTED: "badge badge-rejected",
    };
    return map[s] || "badge";
  };

  if (loading || busy)
    return (
      <div className="orders-page">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      <p className="orders-sub">Hi {user?.name}, here are your orders.</p>

      {orders.length === 0 ? (
        <div className="orders-empty">
          <p>You haven't placed any orders yet.</p>
          <Link to="/product" className="btn-primary">
            Shop Now
          </Link>
        </div>
      ) : (
        orders.map((o) => (
          <Link to={`/my-orders/${o._id}`} key={o._id} className="order-card">
            <div className="order-row">
              <div>
                <p className="order-id">{o.orderId}</p>
                <p className="order-date">
                  {new Date(o.createdAt).toLocaleString()}
                </p>
                <p className="order-amount">Amount: ₹{o.totalAmount}</p>
                <p className="order-status">
                  Status:{" "}
                  <b>{STATUS_LABEL[o.orderStatus] || o.orderStatus}</b>
                </p>
              </div>
              <div className="order-right">
                <span className={paymentBadge(o.paymentStatus)}>
                  Payment: {o.paymentStatus}
                </span>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}