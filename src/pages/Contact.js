import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import logo from './assets/LOGO.png';
import brochure from './assets/brochure.pdf';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ----- Brochure download state -----
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const validateForm = () => {
  const formData = new FormData(form.current);
  const newErrors = {};

  const name         = (formData.get('name') || '').toString().trim();
  const phone        = (formData.get('phone') || '').toString().trim();
  const email        = (formData.get('email') || '').toString().trim();
  const enquiryType  = (formData.get('enquiry_type') || '').toString().trim();
  const message      = (formData.get('message') || '').toString().trim();

  if (!name) {
    newErrors.name = 'Full name is required';
  }

  if (!phone) {
    newErrors.phone = 'Mobile number is required';
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    newErrors.phone = 'Enter a valid 10-digit mobile number';
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = 'Enter a valid email address';
  }

  if (!enquiryType) {
    newErrors.enquiryType = 'Please select an enquiry type';
  }

  if (!message) {
    newErrors.message = 'Message is required';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  // ----- Brochure download handler -----
  const handleDownload = async (e) => {
    e.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);
    setProgress(0);

    try {
      const response = await fetch(brochure);
      const contentLength = response.headers.get('content-length');
      const total = parseInt(contentLength || '0', 10);

      const reader = response.body.getReader();
      let received = 0;
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total) setProgress(Math.round((received / total) * 100));
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'brochure.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setProgress(100);
      setTimeout(() => setIsDownloading(false), 800);
    } catch (err) {
      console.error('Download failed:', err);
      setIsDownloading(false);
    }
  };

  const sendEmail = (e) => {
  e.preventDefault();
  setMessage('');

  if (!validateForm()) return;

  setLoading(true);

  // Get all form values manually
  const formData = new FormData(form.current);

  // Create data object with all fields — matched to EmailJS template variables
  const templateParams = {
    name:         formData.get('name') || '',
    email:        formData.get('email') || '—',
    phone:        formData.get('phone') || '',
    enquiry_type: formData.get('enquiry_type') || 'Not specified',
    product_name: formData.get('product_name') || 'Not specified',
    quantity:     formData.get('quantity') || 'Not specified',
    city:         formData.get('city') || 'Not specified',
    message:      formData.get('message') || '',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  // Debug: Log all data being sent
  console.log('📧 Sending email with data:', templateParams);

  // 1️⃣ Send enquiry to ADMIN
  emailjs
    .send(
      'service_066jktp',        // ← your service ID
      'template_i4qje0b',       // ← Enquiry Receive (admin)
      templateParams,
      'Xmd4bUYD7usBmFg8p'    // ← paste your public key
    )
    .then((response) => {
      console.log('✅ Admin email sent:', response);

      // 2️⃣ Send auto-reply to CUSTOMER (only if they provided email)
      if (templateParams.email && templateParams.email !== '—') {
        return emailjs.send(
          'service_066jktp',    // ← same service ID
          'template_umqkdqu',   // ← Admin reply to client (auto-reply)
          templateParams,
          'Xmd4bUYD7usBmFg8p'
        );
      }
      return null;
    })
    .then((response) => {
      if (response) {
        console.log('✅ Customer auto-reply sent:', response);
      }
      setMessage('✅ Namaste! Your enquiry has been sent. We\'ll get back to you within 24 hours.');
      form.current.reset();
      setErrors({});
    })
    .catch((error) => {
      console.error('❌ EmailJS Error:', error);
      setMessage('❌ Something went wrong, please try again later.');
    })
    .finally(() => setLoading(false));
};
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const faqs = [
    {
      question: 'How can I place an order?',
      answer: 'You can place an order by filling out the enquiry form above or contacting us directly via phone or WhatsApp. Our team will get back to you with order details.'
    },
    {
      question: 'Do you accept bulk orders?',
      answer: 'Yes, we welcome bulk and wholesale orders. Please select "Bulk / Wholesale Order" in the enquiry type dropdown for a quick response.'
    },
    {
      question: 'Do you offer wholesale/distributor opportunities?',
      answer: 'We are actively looking for distributors and retailers. Please select "Distributor Enquiry" or "Retailer Enquiry" and our business development team will contact you.'
    },
    {
      question: 'How can I provide feedback?',
      answer: 'We value your feedback! Select "Feedback" in the enquiry type and share your thoughts. Your input helps us improve our products and services.'
    },
    {
      question: 'What products do you offer?',
      answer: 'We offer a wide range of traditional namkeens and snacks including Bikaneri Bhujia, Aloo Bhujia, Punjabi Tadka, Methi Matri, and many more authentic Indian snacks.'
    }
  ];

  return (
    <div className="contact-wrapper fade-in">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="Panchalveda Namkeens Logo" className="hero-logo" />
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            We'd love to hear from you! Whether you have a question about our products,
            want to place an order, or explore partnership opportunities.
          </p>
          <p className="hero-brand">PanchalVeda Agrofoods LLP</p>
          <div className="hero-cta">
            <a href="#contact-form" className="cta-primary">Send an Enquiry</a>
            <a
              href="https://wa.me/918174900977?text=I%20want%20some%20information%20about%20the%20brand%20and%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT INFO */}
      <section className="quick-contact-section">
        <div className="quick-contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h4>Phone</h4>
            <p><a href="tel:+918174900977">+91 8174900977</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h4>WhatsApp</h4>
            <p><a href="https://wa.me/918174900977" target="_blank" rel="noopener noreferrer">Chat Now</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h4>Email</h4>
            <p><a href="mailto:contact@panchalveda.com">contact@panchalveda.com</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h4>Address</h4>
            <p><a href="https://www.google.com/maps/place/Kamalganj,+Uttar+Pradesh,+India/@27.2601608,79.6195184,15z/data=!3m1!4b1!4m6!3m5!1s0x399e3bb24b78d7fd:0x5d00e7487012539a!8m2!3d27.2590797!4d79.6319636!16zL20vMGY1MzNf?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Get Directions</a></p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="contact-section">




       {/* CONTACT FORM */}
<div className="form-container slide-in" id="contact-form">
  <h2>📝 Send an Enquiry</h2>
  <p className="form-intro">
    Fill out the form below and our team will get back to you within 24 hours.
  </p>

  <form ref={form} onSubmit={sendEmail} className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Mobile Number *</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter 10-digit mobile number"
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>
    </div>

    <div className="form-group">
      <label>Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        className={errors.email ? 'error' : ''}
      />
      {errors.email && <span className="error-text">{errors.email}</span>}
    </div>

    <div className="form-group">
      <label>Enquiry Type *</label>
      <select
        name="enquiry_type"
        className={errors.enquiryType ? 'error' : ''}
      >
        <option value="">Select enquiry type</option>
        <option value="Product Enquiry">Product Enquiry</option>
        <option value="Order Enquiry">Order Enquiry</option>
        <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
        <option value="Distributor Enquiry">Distributor Enquiry</option>
        <option value="Retailer Enquiry">Retailer Enquiry</option>
        <option value="Business Partnership">Business Partnership</option>
        <option value="Feedback">Feedback</option>
        <option value="Other">Other</option>
      </select>
      {errors.enquiryType && <span className="error-text">{errors.enquiryType}</span>}
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          name="product_name"
          placeholder="Product you're interested in"
        />
      </div>
      <div className="form-group">
        <label>Quantity / Requirement</label>
        <input
          type="text"
          name="quantity"
          placeholder="e.g., 10 kg, 100 units, etc."
        />
      </div>
    </div>

    <div className="form-group">
      <label>City</label>
      <input
        type="text"
        name="city"
        placeholder="Your city"
      />
    </div>

    <div className="form-group">
      <label>Your Message *</label>
      <textarea
        name="message"
        placeholder="Write your message here..."
        className={errors.message ? 'error' : ''}
      ></textarea>
      {errors.message && <span className="error-text">{errors.message}</span>}
    </div>

    <button type="submit" disabled={loading} className="submit-btn">
      {loading ? 'Sending...' : '🚀 Submit Enquiry'}
    </button>
    {message && <p className="form-status">{message}</p>}
  </form>
</div>






        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* Brochure & WhatsApp */}
          <div className="brochure-container slide-in">
            <h3>📄 Download Our Brochure</h3>
            <p>Get detailed information about our product range.</p>

            <button
              onClick={handleDownload}
              className={`download-btn ${isDownloading ? 'downloading' : ''}`}
              disabled={isDownloading}
            >
              {!isDownloading ? (
                <>
                  <svg className="icon-download" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Download Brochure</span>
                </>
              ) : (
                <div className="loader-wrap">
                  <div className="progress-ring">
                    <svg viewBox="0 0 40 40">
                      <circle className="ring-bg" cx="20" cy="20" r="16" />
                      <circle
                        className="ring-progress"
                        cx="20"
                        cy="20"
                        r="16"
                        style={{
                          strokeDasharray: 100.5,
                          strokeDashoffset: 100.5 - (100.5 * progress) / 100,
                        }}
                      />
                    </svg>
                    <span className="progress-text">{progress}%</span>
                  </div>
                  <span className="loading-label">Downloading...</span>
                </div>
              )}
            </button>
          </div>

          <div className="whatsapp-quick">
            <h4>💬 Need a Quick Response?</h4>
            <p>Chat with us directly on WhatsApp for faster assistance.</p>
            <a
              href="https://wa.me/918174900977?text=I%20want%20some%20information%20about%20the%20brand%20and%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 Contact on WhatsApp
            </a>
          </div>

          {/* Wholesale / B2B Section */}
          <div className="b2b-section">
            <h4>🛒 Wholesale / B2B Enquiries</h4>
            <p>Looking for bulk orders, distributorship, or retail partnerships?</p>
            <ul>
              <li>✓ Bulk Orders</li>
              <li>✓ Wholesale Enquiries</li>
              <li>✓ Distributor Enquiries</li>
              <li>✓ Retailer Enquiries</li>
              <li>✓ Business Partnerships</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="hours-container slide-in">
            <h3>🕒 Business Hours</h3>
            <div className="hours-grid">
              {businessHours.map((item, index) => (
                <div key={index} className="hour-item">
                  <span className="day">{item.day}</span>
                  <span className={`hours ${item.hours === 'Closed' ? 'closed' : ''}`}>{item.hours}</span>
                </div>
              ))}
            </div>
            <p className="hours-note">💬 WhatsApp responses available even outside business hours.</p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <h2>Why Choose PanchalVeda?</h2>
        <div className="trust-grid">
          <div className="trust-item">
            <span className="trust-icon">🌾</span>
            <h4>Quality Ingredients</h4>
            <p>We use only the finest, carefully selected ingredients for authentic taste.</p>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏺</span>
            <h4>Traditional Taste</h4>
            <p>Our recipes are crafted with traditional methods to preserve authentic flavors.</p>
          </div>
          <div className="trust-item">
            <span className="trust-icon">👥</span>
            <h4>Customer First</h4>
            <p>Your satisfaction is our priority. We're committed to serving you better.</p>
          </div>
          <div className="trust-item">
            <span className="trust-icon">❤️</span>
            <h4>Quality & Care</h4>
            <p>Every product is made with care, ensuring the highest quality standards.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="map-container slide-in">
          <h2>📍 Our Location</h2>
          <div className="map-wrapper">
            <iframe
              title="Panchalveda Namkeen Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14186.771411491427!2d79.61951843560308!3d27.26016079771111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bb24b78d7fd%3A0x5d00e7487012539a!2sKamalganj%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sro!4v1789147389526!5m2!1sen!2sro"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address-details">
            <p className="address-text">
              <strong>PanchalVeda Agro Foods LLP</strong><br />
              Kamalganj,<br />
              Farrukhabad, Uttar Pradesh - 209724, India
            </p>
            <a
              href="https://www.google.com/maps/place/Kamalganj,+Uttar+Pradesh,+India/@27.2601608,79.6195184,15z/data=!3m1!4b1!4m6!3m5!1s0x399e3bb24b78d7fd:0x5d00e7487012539a!8m2!3d27.2590797!4d79.6319636!16zL20vMGY1MzNf?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              🗺️ Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Taste the PanchalVeda Difference</h2>
          <p>Experience the authentic taste of Bharat in every bite. Quality, tradition, and care in every product.</p>
          <div className="final-cta-buttons">
            {/* <a href="/product" className="cta-explore">Explore Products</a> */}
            <a href="/product" className="cta-shop">Shop Now</a>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA
      <section className="social-section">
        <h3>Connect With Us</h3>
        <div className="social-links">
          <a href="#" className="social-link instagram" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
          <a href="#" className="social-link facebook" target="_blank" rel="noopener noreferrer">👍 Facebook</a>
          <a href="#" className="social-link youtube" target="_blank" rel="noopener noreferrer">▶️ YouTube</a>
        </div>
      </section> */}

      {/* FOOTER
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Panchalveda Namkeens" className="footer-logo" />
            <p>Taste of Bharat in Every Bite – Aprakashi Foods</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <a href="tel:+919560932132">📞 +91 95609 32132</a>
              <a href="mailto:info@panchalveda.com">✉️ info@panchalveda.com</a>
              <a href="https://wa.me/919560932132" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              <p>📍 Farrukhabad, Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
          <p>© {new Date().getFullYear()} PanchalVeda Agro Foods LLP. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Contact;