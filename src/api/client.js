// src/api/client.js
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export function getToken() {
  return localStorage.getItem("pn_token");
}

export function setToken(token) {
  if (token) localStorage.setItem("pn_token", token);
  else localStorage.removeItem("pn_token");
}

export function getUser() {
  const raw = localStorage.getItem("pn_user");
  return raw ? JSON.parse(raw) : null;
}

export function setUser(user) {
  if (user) localStorage.setItem("pn_user", JSON.stringify(user));
  else localStorage.removeItem("pn_user");
}

async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const t = getToken();
    if (t) headers.Authorization = `Bearer ${t}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

// ---- AUTH ----
export const api = {
  register: (payload) => request("/api/auth/register", { method: "POST", body: payload }),
  login: (payload) => request("/api/auth/login", { method: "POST", body: payload }),
  me: () => request("/api/auth/me", { auth: true }),
  forgotPassword: (email) =>
    request("/api/auth/forgot-password", { method: "POST", body: { email } }),
  resetPassword: (token, password) =>
    request(`/api/auth/reset-password/${token}`, { method: "POST", body: { password } }),

  // ---- ORDERS ----
  createOrder: (payload) => request("/api/orders", { method: "POST", body: payload, auth: true }),
  myOrders: () => request("/api/orders/my", { auth: true }),
  getOrder: (id) => request(`/api/orders/${id}`, { auth: true }),

  // ---- ADMIN ----
  adminOrders: () => request("/api/admin/orders", { auth: true }),
  adminUpdateOrder: (id, payload) =>
    request(`/api/admin/orders/${id}`, { method: "PATCH", body: payload, auth: true }),
  adminCustomers: () => request("/api/admin/customers", { auth: true }),
  adminStats: () => request("/api/admin/stats", { auth: true }),

  // ---- BANK ----
  getBank: () => request("/api/bank"),
  updateBank: (payload) =>
    request("/api/bank", { method: "PUT", body: payload, auth: true }),
  resendVerification: () =>
  request("/api/auth/resend-verification", { method: "POST", auth: true }),
};
