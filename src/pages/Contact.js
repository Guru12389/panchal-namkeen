// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import './Contact.css';
// import logo from './assets/LOGO.png'; // Ensure your logo is in src/assets/

// function Contact() {
//   const form = useRef();
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     const formData = new FormData(form.current);
//     const email = formData.get('user_email');
//     const phone = formData.get('contact_number');
//     const userMessage = formData.get('message');
//     const name = formData.get('user_name');

//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!name.trim()) newErrors.name = 'Name is required';
//     if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';
//     if (!phoneRegex.test(phone)) newErrors.phone = 'Enter 10-digit phone number';
//     if (userMessage.length < 10) newErrors.message = 'Query must be at least 10 characters';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setMessage('');
//     if (!validateForm()) return;

//     setLoading(true);

//     emailjs.sendForm('service_d3vc4nn', 'template_pg8e417', form.current, '5Hx0QdPb9EkgQVPOI')
//       .then(() => {
//         return emailjs.sendForm('service_d3vc4nn', 'template_sfiipi5', form.current, '5Hx0QdPb9EkgQVPOI');
//       })
//       .then(() => {
//         setMessage('Message sent! Confirmation sent to your inbox.');
//         form.current.reset();
//         setErrors({});
//       })
//       .catch(() => setMessage('Something went wrong, try again later.'))
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="contact-wrapper fade-in">
//       <header className="header shine-animation">
//         <img src={logo} alt="Logo" className="logo" />
//         <h1 className="brand-shine">Panchalveda Namkeens</h1>
//       </header>

//       <h2>Contact Us</h2>

//       <div className="contact-content">
//         <form ref={form} onSubmit={sendEmail} className="contact-form slide-in">
//           <div className="form-group">
//             <label>Name</label>
//             <input name="user_name" className={errors.name ? 'error' : ''} />
//             {errors.name && <span>{errors.name}</span>}
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input name="user_email" className={errors.email ? 'error' : ''} />
//             {errors.email && <span>{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label>Contact Number</label>
//             <input name="contact_number" className={errors.phone ? 'error' : ''} />
//             {errors.phone && <span>{errors.phone}</span>}
//           </div>

//           <div className="form-group">
//             <label>Your Query</label>
//             <textarea name="message" className={errors.message ? 'error' : ''}></textarea>
//             {errors.message && <span>{errors.message}</span>}
//           </div>

//           <button type="submit" disabled={loading}>
//             {loading ? 'Sending...' : 'Send'}
//           </button>

//           {message && <p className="form-status">{message}</p>}
//         </form>

//         <div className="map-section slide-in">
//           <iframe
//             title="Panchalveda Namkeen Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.482826732177!2d79.61328018561495!3d27.278093644465873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3b95b802c091%3A0xcc2551e075e7a907!2sShekhpur%20Rustampur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753548490950!5m2!1sen!2sin"
//             width="100%"
//             height="300"
//             style={{ border: 0, borderRadius: '10px' }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//           <p className="address-text">
//             House No. 55, Shekhpur-Rustampur, Kamalganj, Farrukhabad (U.P), 209724
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import './Contact.css';
// import logo from './assets/LOGO.png';

// function Contact() {
//   const form = useRef();
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     const formData = new FormData(form.current);
//     const email = formData.get('user_email');
//     const phone = formData.get('contact_number');
//     const userMessage = formData.get('message');
//     const name = formData.get('user_name');

//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!name.trim()) newErrors.name = 'Name is required';
//     if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';
//     if (!phoneRegex.test(phone)) newErrors.phone = 'Enter 10-digit phone number';
//     if (userMessage.length < 10) newErrors.message = 'Query must be at least 10 characters';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setMessage('');
//     if (!validateForm()) return;

//     setLoading(true);

//     emailjs
//       .sendForm('service_d3vc4nn', 'template_pg8e417', form.current, '5Hx0QdPb9EkgQVPOI')
//       .then(() => {
//         return emailjs.sendForm('service_d3vc4nn', 'template_sfiipi5', form.current, '5Hx0QdPb9EkgQVPOI');
//       })
//       .then(() => {
//         setMessage('✅ Message sent successfully! A confirmation has been emailed to you.');
//         form.current.reset();
//         setErrors({});
//       })
//       .catch(() => setMessage('❌ Something went wrong, please try again later.'))
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="contact-wrapper fade-in">
//       <header className="contact-header">
//         <img src={logo} alt="Logo" className="contact-logo" />
//         <h1 className="contact-title">Panchalveda Namkeens</h1>
//         <p className="contact-subtitle">
//           Taste of Bharat in Every Bite – Aprakashi Foods
//         </p>
//       </header>

//       <section className="contact-section">
//         <div className="form-container slide-in">
//           <h2>Get in Touch</h2>
//           <p className="form-intro">
//             Have a query or feedback? Fill out the form and our team will get back to you shortly.
//           </p>
//           <form ref={form} onSubmit={sendEmail} className="contact-form">
//             <div className="form-group">
//               <label>Name</label>
//               <input name="user_name" placeholder="Enter your name" className={errors.name ? 'error' : ''} />
//               {errors.name && <span className="error-text">{errors.name}</span>}
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input name="user_email" placeholder="Enter your email" className={errors.email ? 'error' : ''} />
//               {errors.email && <span className="error-text">{errors.email}</span>}
//             </div>

//             <div className="form-group">
//               <label>Contact Number</label>
//               <input name="contact_number" placeholder="Enter 10-digit mobile number" className={errors.phone ? 'error' : ''} />
//               {errors.phone && <span className="error-text">{errors.phone}</span>}
//             </div>

//             <div className="form-group">
//               <label>Your Query</label>
//               <textarea name="message" placeholder="Write your message here..." className={errors.message ? 'error' : ''}></textarea>
//               {errors.message && <span className="error-text">{errors.message}</span>}
//             </div>

//             <button type="submit" disabled={loading} className="submit-btn">
//               {loading ? 'Sending...' : 'Send Message'}
//             </button>

//             {message && <p className="form-status">{message}</p>}
//           </form>
//         </div>

//         <div className="map-container slide-in">
//           <h2>Our Location</h2>
//           <iframe
//             title="Panchalveda Namkeen Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.482826732177!2d79.61328018561495!3d27.278093644465873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3b95b802c091%3A0xcc2551e075e7a907!2sShekhpur%20Rustampur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753548490950!5m2!1sen!2sin"
//             width="100%"
//             height="300"
//             style={{ border: 0, borderRadius: '12px' }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//           <p className="address-text">
//             📍 House No. 55, Shekhpur-Rustampur, Kamalganj, Farrukhabad (U.P), 209724
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Contact;


import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import logo from './assets/LOGO.png';
import brochure from './assets/brochure.pdf'; // Add your brochure file here

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const formData = new FormData(form.current);
    const email = formData.get('user_email');
    const phone = formData.get('contact_number');
    const userMessage = formData.get('message');
    const name = formData.get('user_name');
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(phone)) newErrors.phone = 'Enter 10-digit phone number';
    if (userMessage.length < 10) newErrors.message = 'Query must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage('');
    if (!validateForm()) return;
    setLoading(true);
    emailjs
      .sendForm('service_d3vc4nn', 'template_pg8e417', form.current, '5Hx0QdPb9EkgQVPOI')
      .then(() => {
        return emailjs.sendForm('service_d3vc4nn', 'template_sfiipi5', form.current, '5Hx0QdPb9EkgQVPOI');
      })
      .then(() => {
        setMessage('✅ Message sent successfully! A confirmation has been emailed to you.');
        form.current.reset();
        setErrors({});
      })
      .catch(() => setMessage('❌ Something went wrong, please try again later.'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-wrapper fade-in">
      <header className="contact-header">
        <img src={logo} alt="Logo" className="contact-logo" />
        <h1 className="contact-title">Panchalveda Namkeens</h1>
        <p className="contact-subtitle">
          Taste of Bharat in Every Bite – Aprakashi Foods
        </p>
      </header>

      <section className="contact-section">
        {/* Contact Form */}
        <div className="form-container slide-in">
          <h2>Get in Touch</h2>
          <p className="form-intro">
            Have a query or feedback? Fill out the form and our team will get back to you shortly.
          </p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input name="user_name" placeholder="Enter your name" className={errors.name ? 'error' : ''} />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="user_email" placeholder="Enter your email" className={errors.email ? 'error' : ''} />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input name="contact_number" placeholder="Enter 10-digit mobile number" className={errors.phone ? 'error' : ''} />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label>Your Query</label>
              <textarea name="message" placeholder="Write your message here..." className={errors.message ? 'error' : ''}></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {message && <p className="form-status">{message}</p>}
          </form>
        </div>
{/* Brochure & WhatsApp Card */}
<div className="brochure-container slide-in">
  <h3>Download Our Brochure</h3>
  <p>Get detailed information about our products. Click below to download.</p>
  <a href={brochure} download className="download-btn">Download Brochure</a>

  <p style={{ marginTop: '1rem' }}>
    For direct queries on WhatsApp, click below:
  </p>
  <a
    href="https://wa.me/919560932132?text=I%20want%20some%20information%20about%20the%20brand%20and%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
  >
    Contact on WhatsApp
  </a>

  {/* Contact Info Section */}
  <div className="contact-info">
    <h4 style={{ marginTop: '1.5rem' }}>Reach Us At:</h4>
    <p>📞 +91 95609 32132</p>
    <p>🏪 Panchalveda Agro Foods, Farrukhabad, Uttar Pradesh</p>
    <p>🕒 Opening Hours: 9:00 AM – 9:00 PM (Mon–Sat)</p>
  </div>
</div>


        {/* Map Section */}
        <div className="map-container slide-in">
          <h2>Our Location</h2>
          <iframe
            title="Panchalveda Namkeen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.482826732177!2d79.61328018561495!3d27.278093644465873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3b95b802c091%3A0xcc2551e075e7a907!2sShekhpur%20Rustampur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753548490950!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="address-text">
            📍 House No. 55, Shekhpur-Rustampur, Kamalganj, Farrukhabad (U.P), 209724
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
