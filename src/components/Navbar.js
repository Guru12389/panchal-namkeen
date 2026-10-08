import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import "./Navbar.css";

import { useAuth } from "../context/AuthContext";

import logo from "../pages/assets/LOGO.png";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaHome,
  FaInfoCircle,
  FaBox,
  FaEnvelope,
  FaLandmark,
  FaPhoneAlt,
  FaCalendarAlt,
  FaUserCircle,
  FaSignOutAlt,
  FaClipboardList,
  FaShieldAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { cart = [] } = useCart();
  const { user, logout } = useAuth();

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || item.qty || 1),
    0
  );

  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close user dropdown on outside click
  useEffect(() => {
    function onClick(e) {
      if (!e.target.closest(".nav-user")) setUserMenuOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function handleLogout() {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  }

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/product", label: "Products", icon: <FaBox /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/heritage", label: "Heritage", icon: <FaLandmark /> },
    { to: "/events", label: "Events", icon: <FaCalendarAlt /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <nav
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        } ${hidden && !isOpen ? "navbar-hidden" : ""}`}
      >
        <div className="navbar-accent"></div>

        <div className="navbar-container">
          {/* LEFT: LOGO */}
          <div className="navbar-logo" onClick={() => navigate("/")}>
            <div className="logo-wrapper">
              <img src={logo} alt="PanchalVeda" />
              <div className="logo-ring"></div>
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <span className="brand-name">
                Panchal<span className="brand-highlight">Veda</span>
              </span>
              <span className="brand-sub">
                A Crunch of Tradition, A Dash of Heengn
              </span>
            </div>
          </div>

          {/* CENTER: NAV LINKS */}
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li className="mobile-drawer-header">
              <div className="drawer-logo">
                <img src={logo} alt="PanchalVeda" />
                <div>
                  <span className="drawer-brand">PanchalVeda</span>
                  <span className="drawer-tagline">Taste of Bharat</span>
                </div>
              </div>
            </li>

            {navLinks.map((link, idx) => (
              <li key={link.to} style={{ "--i": idx }}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-indicator"></span>
                  <span className="nav-hover-bg"></span>
                </NavLink>
              </li>
            ))}

            {/* Mobile-only: auth links inside drawer */}
            <li className="mobile-auth-links">
              {user ? (
                <>
                  <Link to="/my-orders" className="nav-link">
                    <span className="nav-icon">
                      <FaClipboardList />
                    </span>
                    <span className="nav-label">My Orders</span>
                  </Link>
                  {user.role === "admin" && (
                    <Link to="/admin" className="nav-link">
                      <span className="nav-icon">
                        <FaShieldAlt />
                      </span>
                      <span className="nav-label">Admin Panel</span>
                    </Link>
                  )}
                  <button className="nav-link nav-logout-btn" onClick={handleLogout}>
                    <span className="nav-icon">
                      <FaSignOutAlt />
                    </span>
                    <span className="nav-label">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    <span className="nav-icon">
                      <FaSignInAlt />
                    </span>
                    <span className="nav-label">Login</span>
                  </Link>
                  <Link to="/register" className="nav-link">
                    <span className="nav-icon">
                      <FaUserPlus />
                    </span>
                    <span className="nav-label">Register</span>
                  </Link>
                </>
              )}
            </li>

            <li className="mobile-drawer-footer">
              <div className="drawer-contact">
                <span className="drawer-contact-label">📞 Reach Us</span>
                <span className="drawer-contact-value">+91-8174900977</span>
              </div>
            </li>
          </ul>

          {/* RIGHT: ACTIONS */}
          <div className="navbar-right">
            {/* USER MENU (desktop) */}
            <div className="nav-user">
              {user ? (
                <>
                  <button
                    className="nav-user-btn"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <FaUserCircle />
                    <span className="nav-user-name">
                      {user.name?.split(" ")[0]}
                    </span>
                  </button>
                  {userMenuOpen && (
                    <div className="nav-user-menu">
                      <div className="nav-user-header">
                        <b>{user.name}</b>
                        <span>{user.email}</span>
                      </div>
                      <Link to="/my-orders" className="nav-user-item">
                        <FaClipboardList /> My Orders
                      </Link>
                      {user.role === "admin" && (
                        <Link to="/admin" className="nav-user-item">
                          <FaShieldAlt /> Admin Panel
                        </Link>
                      )}
                      <button
                        className="nav-user-item nav-user-logout"
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="nav-auth-buttons">
                  <Link to="/login" className="nav-auth-login">
                    Login
                  </Link>
                  <Link to="/register" className="nav-auth-register">
                    Register
                  </Link>
                </div>
              )}
            </div>

            <button className="nav-cta" onClick={() => navigate("/product")}>
              <span>Order Now</span>
            </button>

            <div
              className="cart-icon"
              onClick={() => navigate("/cart")}
              aria-label="Cart"
            >
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="cart-badge">
                  <span className="badge-pulse"></span>
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </div>

            <div
              className={`menu-icon ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;