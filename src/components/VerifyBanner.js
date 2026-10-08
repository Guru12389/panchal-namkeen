// src/components/VerifyBanner.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/client";
import "./VerifyBanner.css";

export default function VerifyBanner() {
  const { user } = useAuth();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  if (!user || user.emailVerified) return null;

  async function resend() {
    setBusy(true);
    setMsg("");
    try {
      await api.resendVerification();
      setMsg("Verification email sent. Check your inbox.");
    } catch (e) {
      setMsg(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="verify-banner">
      <span className="vb-icon">✉️</span>
      <div className="vb-text">
        <b>Please verify your email</b>
        <p>
          We sent a verification link to <b>{user.email}</b>. Verify to place
          orders.
        </p>
        {msg && <p className="vb-msg">{msg}</p>}
      </div>
      <button onClick={resend} disabled={busy} className="vb-btn">
        {busy ? "Sending..." : "Resend"}
      </button>
    </div>
  );
}