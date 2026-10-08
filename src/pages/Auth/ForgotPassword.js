import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";
import "./Auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await api.forgotPassword(email);
      setMsg("If that email exists, we've sent a reset link. Check your inbox.");
    } catch (err) {
      setMsg("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <form onSubmit={submit} className="auth-card">
        <h2>Forgot Password</h2>
        {msg && <p className="auth-success">{msg}</p>}
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button disabled={busy}>{busy ? "Sending..." : "Send Reset Link"}</button>
        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}