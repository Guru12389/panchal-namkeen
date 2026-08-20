// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <ul>
//         <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
//         <li className={location.pathname === '/product' ? 'active' : ''}><Link to="/product">Product</Link></li>
//         <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
//         <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../pages/assets/LOGO.png";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cart = [] } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LEFT: LOGO */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Panchalveda Namkeen Logo" />
          <span className="brand-name">Panchalveda Namkeen</span>
        </div>

        {/* CENTER: NAV LINKS */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="nav-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* RIGHT: CART */}
        <div className="navbar-right">
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>

          {/* MOBILE MENU ICON */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

