// src/pages/Auth/Login.js
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FormField from "../../components/FormField";
import { validateLoginForm } from "../../utils/validators";
import "./Auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [busy, setBusy] = useState(false);

  function handleChange(field) {
    return (e) => {
      const val = e.target.value;
      setForm({ ...form, [field]: val });
      if (touched[field]) {
        const { errors: newErrors } = validateLoginForm({
          ...form,
          [field]: val,
        });
        setErrors(newErrors);
      }
    };
  }

  function handleBlur(field) {
    return () => {
      setTouched({ ...touched, [field]: true });
      const { errors: newErrors } = validateLoginForm(form);
      setErrors(newErrors);
    };
  }

  async function submit(e) {
    e.preventDefault();
    setServerError("");

    setTouched({ email: true, password: true });
    const { errors: newErrors, isValid } = validateLoginForm(form);
    setErrors(newErrors);
    if (!isValid) return;

    setBusy(true);
    try {
      const user = await login(form.email.trim().toLowerCase(), form.password);
      const redirectTo = location.state?.redirectTo;
      if (redirectTo) navigate(redirectTo);
      else navigate(user.role === "admin" ? "/admin" : "/my-orders");
    } catch (err) {
      setServerError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <form onSubmit={submit} className="auth-card" noValidate>
        <h2>Login</h2>

        {serverError && <p className="auth-error">{serverError}</p>}

        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          placeholder="you@example.com"
          inputMode="email"
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          placeholder="Your password"
        />

        <button disabled={busy}>
          {busy ? "Please wait..." : "Login"}
        </button>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/register">New here? Register</Link>
        </div>
      </form>
    </div>
  );
}