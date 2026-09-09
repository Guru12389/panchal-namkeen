// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>Panchalveda Namkeen</h3>
          <p>
            Taste of Bharat in Every Bite - PanchalVeda AgroFoods.  
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
          <p>Email: panchalvedaagrofoods@gmail.com</p>
          <p>Phone: +91 8174900977</p>
          <p>Location: Farrukhabad, Uttar Pradesh</p>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a 
              href="https://www.facebook.com/aprakashifoods?mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.instagram.com/panchalvedaagrofoods?igsi=amdsOHhlenpkNXlz" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://x.com/PanchalVeda" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/panchal-veda-9087a442b" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="social-tagline">Connect with us on social media</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Panchalveda Namkeen. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;