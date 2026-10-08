// src/utils/validators.js

export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^[6-9]\d{9}$/, // Indian mobile: starts 6-9, 10 digits
  pincode: /^[1-9][0-9]{5}$/, // Indian pincode: 6 digits, not starting with 0
  name: /^[A-Za-z\s.'-]{2,50}$/,
  utr: /^\d{12}$/, // 12-digit UTR
  transactionId: /^[A-Za-z0-9]{6,30}$/,
  gst: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
};

export function validateEmail(v) {
  if (!v) return "Email is required";
  if (!patterns.email.test(v.trim())) return "Enter a valid email (e.g. name@example.com)";
  return "";
}

export function validatePhone(v) {
  const clean = String(v || "").replace(/\D/g, "");
  if (!clean) return "Phone is required";
  if (clean.length !== 10) return "Phone must be exactly 10 digits";
  if (!patterns.phone.test(clean))
    return "Enter a valid Indian mobile number (starts with 6-9)";
  return "";
}

export function validateName(v) {
  if (!v) return "Name is required";
  if (v.trim().length < 2) return "Name is too short";
  if (!patterns.name.test(v.trim()))
    return "Only letters, spaces, and . ' - allowed";
  return "";
}

export function validatePassword(v) {
  if (!v) return "Password is required";
  if (v.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(v)) return "Add at least one uppercase letter";
  if (!/[a-z]/.test(v)) return "Add at least one lowercase letter";
  if (!/\d/.test(v)) return "Add at least one number";
  return "";
}

export function validatePincode(v) {
  const clean = String(v || "").replace(/\D/g, "");
  if (!clean) return "Pincode is required";
  if (clean.length !== 6) return "Pincode must be 6 digits";
  if (!patterns.pincode.test(clean)) return "Enter a valid Indian pincode";
  return "";
}

export function validateAddress(v) {
  if (!v || v.trim().length < 6) return "Address must be at least 6 characters";
  if (v.trim().length > 200) return "Address is too long";
  return "";
}

export function validateCity(v) {
  if (!v) return "City is required";
  if (v.trim().length < 2) return "Enter a valid city";
  return "";
}

export function validateState(v) {
  if (!v) return "State is required";
  return "";
}

export function validateTransactionId(v) {
  const clean = String(v || "").trim();

  if (!clean) return "Transaction ID / UTR is required";

  if (clean.length < 6) return "Transaction ID is too short";
  if (clean.length > 30) return "Transaction ID is too long";

  // Only letters and numbers (no spaces, symbols)
  if (!/^[A-Za-z0-9]+$/.test(clean))
    return "Only letters and numbers allowed (no spaces or symbols)";

  // All-same-character check
  if (/^(\w)\1+$/.test(clean))
    return "Transaction ID looks invalid (all same characters)";

  // Common fake patterns
  if (/^(0+|1+|123456|abcdef|987654|000000|111111)/i.test(clean))
    return "This does not look like a real bank UTR";

  // UPI/bank UTRs are usually 12 digits — warn (not block) if all-digit but wrong length
  if (/^\d+$/.test(clean) && clean.length !== 12)
    return "Bank UTRs are usually 12 digits — please double-check";

  return "";
}
// Full form validators
export function validateRegisterForm(form) {
  const errors = {};
  const name = validateName(form.name);
  const email = validateEmail(form.email);
  const phone = validatePhone(form.phone);
  const password = validatePassword(form.password);

  if (name) errors.name = name;
  if (email) errors.email = email;
  if (phone) errors.phone = phone;
  if (password) errors.password = password;

  return { errors, isValid: Object.keys(errors).length === 0 };
}

export function validateLoginForm(form) {
  const errors = {};
  const email = validateEmail(form.email);
  if (email) errors.email = email;
  if (!form.password) errors.password = "Password is required";
  return { errors, isValid: Object.keys(errors).length === 0 };
}

export function validateCheckoutForm(form) {
  const errors = {};
  const fields = {
    name: validateName(form.name),
    phone: validatePhone(form.phone),
    line1: validateAddress(form.line1),
    city: validateCity(form.city),
    state: validateState(form.state),
    pincode: validatePincode(form.pincode),
    transactionId: validateTransactionId(form.transactionId),
  };
  Object.entries(fields).forEach(([k, v]) => {
    if (v) errors[k] = v;
  });
  return { errors, isValid: Object.keys(errors).length === 0 };
}

// Format helpers
export function formatPhone(v) {
  return String(v || "").replace(/\D/g, "").slice(0, 10);
}

export function formatPincode(v) {
  return String(v || "").replace(/\D/g, "").slice(0, 6);
}