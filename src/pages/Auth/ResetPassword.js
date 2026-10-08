import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../../api/client";
import "./Auth.css";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await api.resetPassword(token, password);
      alert("Password reset! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <form onSubmit={submit} className="auth-card">
        <h2>Set New Password</h2>
        {error && <p className="auth-error">{error}</p>}
        <label>New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <button disabled={busy}>{busy ? "Saving..." : "Reset Password"}</button>
        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}