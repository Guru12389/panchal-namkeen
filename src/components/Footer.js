// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="footer">
//       <p>Follow us: 
//         <a href="#">Facebook</a> | 
//         <a href="#">Twitter</a> | 
//         <a href="#">Instagram</a>
//       </p>
//       <p>© 2025 All Rights Reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>Panchalveda Namkeen</h3>
          <p>
            Taste of Bharat in Every Bite - Aprakashi Foods.  
            Delivering authentic namkeen made with love and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: aprakashifoods@gmail.com</p>
          <p>Phone: +91 9560932132</p>
          <p>Location: Farrukhabad, Uttar Pradesh</p>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/aprakashifoods?mibextid=ZbWKwL"><FaFacebookF /></a>
            <a href="https://www.instagram.com/aprakashifoods?igsh=MTdzZXprcWt4MzYyMw=="><FaInstagram /></a>
            {/* <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Panchalveda Namkeen. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
