import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    api
      .adminOrders()
      .then((d) => setOrders(d.orders || []))
      .catch((e) => setErr(e.message));
  }, []);

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      if (filter !== "ALL" && o.paymentStatus !== filter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          o.orderId?.toLowerCase().includes(q) ||
          o.transactionId?.toLowerCase().includes(q) ||
          o.customerId?.name?.toLowerCase().includes(q) ||
          o.customerId?.email?.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [orders, filter, search]);

  if (err) return <p className="auth-error">{err}</p>;

  return (
    <div className="admin-page">
      <h1>Orders</h1>
      <p className="sub">All orders placed on your store</p>

      <div className="admin-filters">
        <input
          placeholder="Search by order ID, txn ID, name, email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ minWidth: 320 }}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="ALL">All payments</option>
          <option value="PENDING">Pending</option>
          <option value="VERIFIED">Verified</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Txn ID</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Order Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", color: "#888" }}>
                No orders match your filters
              </td>
            </tr>
          )}
          {filtered.map((o) => (
            <tr key={o._id}>
              <td><b>{o.orderId}</b></td>
              <td>{new Date(o.createdAt).toLocaleDateString()}</td>
              <td>
                {o.customerId?.name}
                <br />
                <span style={{ color: "#888", fontSize: 11 }}>
                  {o.customerId?.phone}
                </span>
              </td>
              <td style={{ fontFamily: "monospace" }}>{o.transactionId}</td>
              <td><b>₹{o.totalAmount}</b></td>
              <td>
                <span className={`status-badge status-${o.paymentStatus}`}>
                  {o.paymentStatus}
                </span>
              </td>
              <td>
                <span className={`status-badge order-status-${o.orderStatus}`}>
                  {o.orderStatus}
                </span>
              </td>
              <td>
                <Link to={`/admin/orders/${o._id}`} className="btn-sm btn-view">
                  Manage
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}