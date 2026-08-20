import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aboutpic from './assets/Aboutpic.jpeg';
import sembeej from './assets/SemBeej.png';
import paneerbhujiya from './assets/PaneerBhujiya.png';
import gadbad from './assets/Gadbad.png';
import pic1 from './assets/pic1.jpeg';
import pic2 from './assets/pic2.jpeg';
import pic3 from './assets/pic3.jpeg';
import pic4 from './assets/pic4.jpeg';
import pic5 from './assets/pic5.jpeg';
import pic6 from './assets/pic6.jpeg';
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  
  // GALLERY STATE
  const galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-up delay-1">Panchalveda Namkeen</h1>
          <p className="fade-up delay-2 brand-slogan">
            "Taste of Bharat in Every Bite - Aprakashi Foods"
          </p><div className="fade-up delay-2 brand-slogan">
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/product")}
            >
              Explore Products
            </button>
            <button className="btn-outline" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div></div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-content">
          <img src={Aboutpic} alt="About Panchalveda Namkeen" className="about-img" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Panchalveda Namkeen brings you the authentic flavors of India, crafted
              with premium ingredients and traditional recipes. Our mission is
              to deliver delicious snacks that connect people with the taste of
              Bharat.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products">
        <h2>Our Popular Products</h2>
        <div className="product-grid">
          {["Gadbad", "Sem Seeds", "Paneer Bhujia"].map((product, index) => {
            const productImages = {
              "Gadbad": gadbad,
              "Sem Seeds": sembeej,
              "Paneer Bhujia": paneerbhujiya
            };
            return (
              <div key={index} className="product-card">
                <img
                  src={productImages[product]}
                  alt={product}
                  className="product-img"
                />
                <h3>{product}</h3>
                <p>Crispy, flavorful and made with love.</p>
                <button
                  className="btn-primary"
                  onClick={() => navigate("/product")}
                >
                  View More
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">⭐ Authentic Taste</div>
          <div className="why-card">🌿 Premium Ingredients</div>
          <div className="why-card">❤️ Loved by All</div>
          <div className="why-card">📍 Pan-India Reach</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
  <h2>What Our Customers Say</h2>
  <div className="testimonial-grid">
    <div className="testimonial-card">
      <p>
        "Absolutely delicious! Reminds me of the authentic flavors I grew up with."
      </p>
      <h4>- Customer 1</h4>
    </div>
    <div className="testimonial-card">
      <p>
        "Truly mouthwatering! Brings back the real taste of my childhood favorites."
      </p>
      <h4>- Customer 2</h4>
    </div>
    <div className="testimonial-card">
      <p>
        "The flavors feel so authentic—it instantly takes me back to home-cooked memories."
      </p>
      <h4>- Customer 3</h4>
    </div>
  </div>
</section>


      {/* ✅ GALLERY (Updated Slider Section) */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-slider">
          <button className="nav-button prev" onClick={handlePrev}>
            &#8249;
          </button>
          <img
            src={galleryImages[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="gallery-slide-img"
          />
          <button className="nav-button next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>Order Now & Taste the Tradition</h2>
          <button
            className="btn-primary"
            onClick={() => navigate("/product")}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* MAP & CONTACT */}
      <section className="map-contact">
        <h2>Find Us</h2>
        <div className="map-contact-grid">
          <iframe
            title="Panchalveda Namkeen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.482826732177!2d79.61328018561495!3d27.278093644465873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3b95b802c091%3A0xcc2551e075e7a907!2sShekhpur%20Rustampur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753548490950!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-details">
            <h3>Panchalveda Namkeen</h3>
            <p>Taste of Bharat in Every Bite - Aprakashi Foods</p>
            <p>📍 Farrukhabad, Uttar Pradesh, India</p>
            <p>📞 +91-9560932132</p>
            <p>📧 aprakashifoods@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
