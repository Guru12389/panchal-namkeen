// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../pages/assets/LOGO.png";
// import { FaBars, FaTimes, FaShoppingCart, FaHome, FaInfoCircle, FaBox, FaEnvelope } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cart = [] } = useCart();

//   const cartCount = cart.reduce((sum, item) => sum + (item.quantity || item.qty || 1), 0);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   // Add scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const navLinks = [
//     { to: "/", label: "Home", icon: <FaHome /> },
//     { to: "/about", label: "About", icon: <FaInfoCircle /> },
//     { to: "/product", label: "Products", icon: <FaBox /> },
//     { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* LEFT: LOGO */}
//         <div className="navbar-logo" onClick={() => navigate("/")}>
//           <div className="logo-wrapper">
//             <img src={logo} alt="Panchalveda Namkeen" />
//             <div className="logo-ring"></div>
//           </div>
//           <div className="logo-text">
//             <span className="brand-name">PanchalVeda</span>
//             <span className="brand-sub">Namkeen</span>
//           </div>
//         </div>

//         {/* CENTER: NAV LINKS */}
//         <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//           {navLinks.map((link) => (
//             <li key={link.to}>
//               <NavLink
//                 to={link.to}
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 end
//               >
//                 <span className="nav-icon">{link.icon}</span>
//                 <span className="nav-label">{link.label}</span>
//                 <span className="nav-indicator"></span>
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* RIGHT: ACTIONS */}
//         <div className="navbar-right">
//           <div className="cart-icon" onClick={() => navigate("/cart")}>
//             <FaShoppingCart />
//             {cartCount > 0 && (
//               <span className="cart-badge">
//                 <span className="badge-pulse"></span>
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* MOBILE MENU ICON */}
//           <div 
//             className={`menu-icon ${isOpen ? "open" : ""}`} 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="menu-line"></span>
//             <span className="menu-line"></span>
//             <span className="menu-line"></span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       <div 
//         className={`mobile-overlay ${isOpen ? "active" : ""}`}
//         onClick={() => setIsOpen(false)}
//       ></div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../pages/assets/LOGO.png";
import { FaBars, FaTimes, FaShoppingCart, FaHome, FaInfoCircle, FaBox, FaEnvelope } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart = [] } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || item.qty || 1), 0);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/product", label: "Products", icon: <FaBox /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* LEFT: LOGO */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <div className="logo-wrapper">
            <img src={logo} alt="Panchalveda Namkeen" />
            <div className="logo-ring"></div>
          </div>
          <div className="logo-text">
            <span className="brand-name">PanchalVeda</span>
            <span className="brand-sub">Namkeen</span>
          </div>
        </div>

        {/* CENTER: NAV LINKS */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
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
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT: ACTIONS */}
        <div className="navbar-right">
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-badge">
                <span className="badge-pulse"></span>
                {cartCount}
              </span>
            )}
          </div>

          {/* MOBILE MENU ICON */}
          <div 
            className={`menu-icon ${isOpen ? "open" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
}

export default Navbar;