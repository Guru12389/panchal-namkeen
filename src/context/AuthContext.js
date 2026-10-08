// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { api, setToken, setUser, getUser, getToken } from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUserState] = useState(getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (getToken()) {
        try {
          const { user } = await api.me();
          setUserState(user);
          setUser(user);
        } catch {
          setToken(null);
          setUser(null);
          setUserState(null);
        }
      }
      setLoading(false);
    }
    load();
  }, []);

  async function login(email, password) {
    const { token, user } = await api.login({ email, password });
    setToken(token);
    setUser(user);
    setUserState(user);
    return user;
  }

  async function register(payload) {
    const { token, user } = await api.register(payload);
    setToken(token);
    setUser(user);
    setUserState(user);
    return user;
  }

  function logout() {
    setToken(null);
    setUser(null);
    setUserState(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}