// src/components/FormField.js
import React from "react";
import "./FormField.css";
export default function FormField({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  error,
  touched,
  required = true,
  maxLength,
  inputMode,
  style,
  disabled,
}) {
  const showError = touched && error;

  return (
    <div className="ff-wrap" style={style}>
      {label && (
        <label className="ff-label">
          {label} {required && <span className="ff-req">*</span>}
        </label>
      )}
      <input
        className={`ff-input ${showError ? "ff-input-error" : ""}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        disabled={disabled}
      />
      {showError && <p className="ff-error">{error}</p>}
    </div>
  );
}