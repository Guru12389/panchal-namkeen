// src/pages/Auth/VerifyEmail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Auth.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function VerifyEmail() {
  const { token } = useParams();
  const { user } = useAuth();
  const [status, setStatus] = useState("checking");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch(`${API_URL}/api/auth/verify-email/${token}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Verification failed");
        setStatus("success");
        setMessage("Your email is verified! You can now place orders.");
        // Optional: refresh user state if logged in
        if (user) {
          const t = localStorage.getItem("pn_token");
          const me = await fetch(`${API_URL}/api/auth/me`, {
            headers: { Authorization: `Bearer ${t}` },
          });
          const meData = await me.json();
          localStorage.setItem("pn_user", JSON.stringify(meData.user));
        }
      } catch (e) {
        setStatus("error");
        setMessage(e.message);
      }
    }
    verify();
  }, [token, user]);

  return (
    <div className="auth-wrap">
      <div className="auth-card" style={{ textAlign: "center" }}>
        <h2>
          {status === "checking" && "Verifying..."}
          {status === "success" && "Verified ✓"}
          {status === "error" && "Verification failed"}
        </h2>
        <p>{message}</p>
        <div className="auth-links" style={{ justifyContent: "center" }}>
          <Link to="/my-orders">Go to My Orders</Link>
        </div>
      </div>
    </div>
  );
}