import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recent, setRecent] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    api
      .adminStats()
      .then(setStats)
      .catch((e) => setErr(e.message));

    api
      .adminOrders()
      .then((d) => setRecent((d.orders || []).slice(0, 5)))
      .catch(() => {});
  }, []);

  if (err) return <p className="auth-error">{err}</p>;
  if (!stats) return <p>Loading...</p>;

  return (
    <div className="admin-page">
      <h1>Dashboard</h1>
      <p className="sub">Overview of your store</p>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Orders</p>
          <h2>{stats.totalOrders}</h2>
        </div>
        <div className="stat-card">
          <p>Pending Payments</p>
          <h2>{stats.pending}</h2>
        </div>
        <div className="stat-card">
          <p>Verified Payments</p>
          <h2>{stats.verified}</h2>
        </div>
        <div className="stat-card">
          <p>Total Revenue</p>
          <h2>₹{stats.totalRevenue}</h2>
        </div>
      </div>

      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Recent Orders</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {recent.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "#888" }}>
                No orders yet
              </td>
            </tr>
          )}
          {recent.map((o) => (
            <tr key={o._id}>
              <td>{o.orderId}</td>
              <td>{o.customerId?.name || "-"}</td>
              <td>₹{o.totalAmount}</td>
              <td>
                <span className={`status-badge status-${o.paymentStatus}`}>
                  {o.paymentStatus}
                </span>
              </td>
              <td>
                <Link to={`/admin/orders/${o._id}`} className="btn-sm btn-view">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}