// src/pages/Auth/Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FormField from "../../components/FormField";
import {
  validateRegisterForm,
  formatPhone,
} from "../../utils/validators";
import "./Auth.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [busy, setBusy] = useState(false);

  function handleChange(field) {
    return (e) => {
      let val = e.target.value;
      if (field === "phone") val = formatPhone(val);
      setForm({ ...form, [field]: val });

      // Live re-validate that field if already touched
      if (touched[field]) {
        const { errors: newErrors } = validateRegisterForm({
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
      const { errors: newErrors } = validateRegisterForm(form);
      setErrors(newErrors);
    };
  }

  async function submit(e) {
    e.preventDefault();
    setServerError("");

    const allTouched = {
      name: true,
      email: true,
      phone: true,
      password: true,
    };
    setTouched(allTouched);

    const { errors: newErrors, isValid } = validateRegisterForm(form);
    setErrors(newErrors);
    if (!isValid) return;

    setBusy(true);
    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone,
        password: form.password,
      });
      navigate("/my-orders");
    } catch (err) {
      setServerError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <form onSubmit={submit} className="auth-card" noValidate>
        <h2>Create Account</h2>

        {serverError && <p className="auth-error">{serverError}</p>}

        <FormField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          error={errors.name}
          touched={touched.name}
          placeholder="e.g. Abhay Dubey"
        />

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
          label="Phone (10 digits)"
          name="phone"
          value={form.phone}
          onChange={handleChange("phone")}
          onBlur={handleBlur("phone")}
          error={errors.phone}
          touched={touched.phone}
          placeholder="9876543210"
          inputMode="numeric"
          maxLength={10}
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
          placeholder="Min 8 chars, 1 upper, 1 lower, 1 number"
        />

        <button disabled={busy}>
          {busy ? "Creating account..." : "Register"}
        </button>

        <div className="auth-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
}