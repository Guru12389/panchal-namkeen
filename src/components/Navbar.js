import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
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
  FaCalendarAlt
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart = [] } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || item.qty || 1),
    0
  );

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll behavior - shrink + auto-hide on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // Auto-hide on scroll down (past 300px), show on scroll up
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
        {/* Top Accent Bar */}
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
              <span className="brand-sub">A Crunch of Tradition, A Dash of Heengn</span>
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

            <li className="mobile-drawer-footer">
              <div className="drawer-contact">
                <span className="drawer-contact-label">📞 Reach Us</span>
                <span className="drawer-contact-value">+91-8174900977</span>
              </div>
            </li>
          </ul>

          {/* RIGHT: ACTIONS */}
          <div className="navbar-right">
            <button
              className="nav-cta"
              onClick={() => navigate("/product")}
            >
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

            {/* MOBILE MENU ICON */}
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

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;