import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Admin.css";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="admin-wrap">
      <aside className="admin-side">
        <div className="admin-brand">
          <h3>PanchalVeda</h3>
          <p>Admin Panel</p>
        </div>
        <nav className="admin-nav">
          <NavLink to="/admin" end>📊 Dashboard</NavLink>
          <NavLink to="/admin/orders">📦 Orders</NavLink>
          <NavLink to="/admin/customers">👥 Customers</NavLink>
          <NavLink to="/admin/bank">🏦 Bank Settings</NavLink>
        </nav>
        <div className="admin-foot">
          <p>Signed in as</p>
          <b>{user?.name}</b>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}