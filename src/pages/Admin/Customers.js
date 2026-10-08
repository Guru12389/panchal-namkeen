import React, { useEffect, useState } from "react";
import { api } from "../../api/client";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    api
      .adminCustomers()
      .then((d) => setCustomers(d.customers || []))
      .catch((e) => setErr(e.message));
  }, []);

  const filtered = customers.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.includes(q)
    );
  });

  if (err) return <p className="auth-error">{err}</p>;

  return (
    <div className="admin-page">
      <h1>Customers</h1>
      <p className="sub">{customers.length} registered customers</p>

      <div className="admin-filters">
        <input
          placeholder="Search by name, email, phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ minWidth: 320 }}
        />
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Email Verified</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr key={c._id}>
              <td><b>{c.name}</b></td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                {c.emailVerified ? (
                  <span className="status-badge status-VERIFIED">Verified</span>
                ) : (
                  <span className="status-badge status-PENDING">Pending</span>
                )}
              </td>
              <td>{new Date(c.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}