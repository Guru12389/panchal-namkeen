


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import pic7 from "./assets/pic7.jpeg";
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import beginning from "./assets/beginning.png";
import heritage from "./assets/heritage.png";
import panindia from "./assets/panindia.png";
import family from "./assets/family.png";
import pic4 from "./assets/pic4.jpeg";


export default function About() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);
  const [popupLanguage, setPopupLanguage] = useState("hindi");
  const [selectedValue, setSelectedValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popup]);

  const closePopup = () => {
    setPopup(null);
    setFormSubmitted(false);
    setFormError("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      comment: ""
    });
  };
  
  const togglePopupLanguage = () => {
    setPopupLanguage((prev) => prev === "english" ? "hindi" : "english");
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;
    circle.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setFormError("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      setFormError("Please enter your phone number");
      return;
    }
    if (!formData.phone.match(/^[0-9]{10}$/)) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.email.trim()) {
      setFormError("Please enter your email");
      return;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError("Please enter a valid email address");
      return;
    }
    if (!formData.comment.trim()) {
      setFormError("Please write your comment");
      return;
    }

    const message = `📝 *New Comment from PanchalVeda Blog*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `💬 *Comment:* ${formData.comment}\n\n` +
      `📖 *Page:* About Page\n\n` +
      `🔗 *Sent from PanchalVeda About Page*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918004779751?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  // Core Values Data
  const coreValues = [
    {
      id: "quality",
      icon: "✅",
      title: "Quality First",
      description: "We never compromise on ingredients. Every batch is crafted with the finest, hand-selected spices and premium raw materials.",
      longDesc: [
        "Our commitment to quality begins at the source. We personally visit farms and spice markets to select only the finest ingredients.",
        "Every batch undergoes rigorous quality testing to ensure consistency, purity, and the authentic taste that our customers have come to love.",
        "We believe that great taste starts with great ingredients – no artificial flavors, no preservatives, just pure, natural goodness.",
        "Our quality standards are maintained through every step – from sourcing to production to packaging."
      ]
    },
    {
      id: "trust",
      icon: "🤝",
      title: "Customer Trust",
      description: "Trust built with consistency, transparency, and years of delivering authentic flavors that never disappoint.",
      longDesc: [
        "For over 5 years, we've been building trust with our customers through consistent quality and authentic taste.",
        "We believe in complete transparency – from our ingredients to our processes, everything is open and honest.",
        "Our customers are our family, and their satisfaction is our greatest reward.",
        "We've earned the trust of thousands of families across India who rely on us for their daily snacking needs."
      ]
    },
    {
      id: "authentic",
      icon: "🌿",
      title: "Authentic Ingredients",
      description: "Pure spices, traditional recipes, and the unmistakable aroma of heeng that defines our heritage.",
      longDesc: [
        "Authenticity is at the heart of everything we do. We use traditional recipes that have been perfected over generations.",
        "Our heeng is sourced from premium suppliers in Afghanistan and Iran, ensuring the highest quality and most authentic aroma.",
        "We use only pure, natural spices – no adulteration, no shortcuts, just the real taste of Bharat.",
        "Every product carries the authentic flavor that has made Farrukhabadi namkeen famous across India."
      ]
    },
    {
      id: "passion",
      icon: "❤️",
      title: "Passion for Taste",
      description: "Made with emotion, pride, and an unwavering dedication to preserving India's rich culinary heritage.",
      longDesc: [
        "Our passion for taste drives everything we do. We're not just making namkeen – we're preserving a culinary legacy.",
        "Every batch is made with love and dedication, ensuring that each bite carries the warmth of tradition.",
        "We take pride in our craft, constantly innovating while staying true to our roots.",
        "Our passion is reflected in the smiles of our customers who enjoy our products with their families."
      ]
    }
  ];

  // Achievements Data
  const achievements = [
    {
  id: 1,
  year: "2018",
  title: "The Beginning",
  description: "Panchalveda was founded with a vision to bring authentic Farrukhabadi flavors to every home.",
  image: beginning,
  detail: "What started as a small family kitchen in Farrukhabad has grown into a trusted brand, loved by thousands across India. Our journey began with a simple mission – to preserve the authentic taste of Bharat and share it with the world.",
  popupKey: "achievements"   // ← Reverted: opens "Our Achievements" popup
},
    {
      id: 2,
      year: "2020",
      title: "Pan-India Expansion",
      description: "Expanded operations across multiple states, bringing authentic flavors to customers everywhere.",
      image: panindia,
      detail: "Despite global challenges, we expanded our reach across India. Our products became available in major cities including Mumbai, Delhi, Kolkata, Chennai, and Bangalore, making authentic Farrukhabadi namkeen accessible to families across the nation.",
      popupKey: "panindia"
    },
    {
      id: 3,
      year: "2022",
      title: "10,000+ Happy Families",
      description: "Achieved the milestone of serving over 10,000 satisfied families across India and abroad.",
      image: family,
      detail: "This milestone is a testament to the trust our customers place in us. Every family that chooses PanchalVeda becomes a part of our extended family. We're proud to be a part of countless celebrations, tea-time conversations, and cherished memories.",
      popupKey: "families"
    },
    {
      id: 4,
      year: "2024",
      title: "Heritage Recognition",
      description: "Recognized as a preserver of traditional Indian snacking heritage and culinary excellence.",
      image: heritage,
      detail: "Our commitment to preserving traditional recipes and authentic flavors has been recognized by culinary experts and heritage food enthusiasts. We continue to honor our roots while embracing innovation to serve the evolving tastes of our customers.",
      popupKey: "heritage"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What makes Panchalveda namkeen different from other brands?",
      answer: "Panchalveda is rooted in authenticity. We use traditional recipes passed down through generations, cooked in heart-healthy groundnut oil, and generously flavored with pure asafoetida (heeng). We do not use cheap refined oils, artificial flavors, or chemical preservatives. It is honest, healthy, and truly authentic Indian snacking."
    },
    {
      question: "Are your products healthy for daily consumption?",
      answer: "Yes! We believe snacking should nourish, not harm. Our use of groundnut oil provides natural antioxidants and Vitamin E, while pure asafoetida (heeng) is known in Ayurveda to aid digestion and boost immunity. However, like all fried snacks, we recommend enjoying them in moderation as part of a balanced diet."
    },
    {
      question: "Do you ship Pan-India or internationally?",
      answer: "Currently, we have a strong Pan-India presence, delivering to major cities like Mumbai, Delhi, Kolkata, Chennai, Bangalore, and thousands of smaller towns. We are actively working on international shipping to bring the taste of Bharat to our family abroad very soon."
    },
    {
      question: "How do you ensure the freshness of the namkeen during delivery?",
      answer: "We prepare our namkeen in small, fresh batches. We use food-grade, airtight packaging designed specifically to lock in the crunch and aroma during transit. Our optimized logistics network ensures that a family in Chennai receives the same freshness as a family in Farrukhabad."
    },
    {
      question: "Is your namkeen 100% vegetarian and preservative-free?",
      answer: "Absolutely. Panchalveda is 100% vegetarian. We are deeply committed to purity, which is why we do not add any artificial preservatives, colors, or MSG. The long shelf life of our namkeen is maintained through proper preparation and airtight packaging, not chemicals."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };



  return (
    <div className="about-page">

      {/* ========== HERO SECTION ========== */}
            {/* ========== HERO SECTION ========== */}
      <section className="hero-premium">
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>
        
        {/* Floating decorative elements */}
        <div className="floating-spice spice-1">🌿</div>
        <div className="floating-spice spice-2">✨</div>
        <div className="floating-spice spice-3">🌶️</div>

        <div className="hero-content">
          <h1 className="hero-title">About Panchalveda</h1>
          <h3 className="hero-subtitle">Crafted in Farrukhabad. Rooted in Tradition.</h3>
          <p className="hero-tagline">A Crunch of Tradition,A Dash of Heeng</p>
          
          <div className="hero-scroll-indicator">
            {/* <span>Scroll to Explore</span> */}
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🎯 Purpose</span>
            <h2 className="section-title">Our <span className="highlight">Mission</span> & <span className="highlight">Vision</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Driving us forward with purpose and passion
            </p>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card mission-card-full">
              <div className="mv-icon">🚀</div>
              <h3>Our Mission</h3>
              <p className="mv-description">
                Deliver authentic Indian snacks with uncompromised quality, preserving 
                traditional flavors while maintaining modern standards.
              </p>
              <ul className="mv-list">
                <li>✓ Preserve authentic Indian snacking traditions</li>
                <li>✓ Maintain modern quality standards</li>
                <li>✓ Source the finest ingredients</li>
                <li>✓ Create memorable taste experiences</li>
              </ul>
              <button 
                className="mv-btn"
                onClick={(e) => {
                  createRipple(e);
                  setPopup("mission");
                }}
              >
                Learn More →
              </button>
            </div>

            <div className="mv-card vision-card-full">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p className="mv-description">
                Transform Panchalveda into a globally trusted Indian snack brand, 
                bringing the authentic taste of Bharat to every corner of the world.
              </p>
              <ul className="mv-list">
                <li>✓ Become a global Indian snack brand</li>
                <li>✓ Share authentic flavors worldwide</li>
                <li>✓ Innovate while preserving tradition</li>
                <li>✓ Build lasting customer trust</li>
              </ul>
              <button 
                className="mv-btn"
                onClick={(e) => {
                  createRipple(e);
                  setPopup("vision");
                }}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS ========== */}
      <section className="achievements-section">
        <div className="container">
                    <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id} 
                className={`achievement-card ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                {/* IMAGE SIDE */}
                <div className="achievement-image-wrapper">
                  <img src={achievement.image} alt={achievement.title} />
                  <div className="achievement-year">{achievement.year}</div>
                </div>

                {/* TEXT SIDE */}
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p className="achievement-desc">{achievement.description}</p>
                  <p className="achievement-detail">{achievement.detail}</p>
                  <button 
                    className="achievement-btn"
                    onClick={(e) => {
                      createRipple(e);
                      setPopup(achievement.popupKey);
                    }}
                  >
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPLORE HERITAGE CTA ========== */}
      <section className="explore-heritage-section">
        <div className="container">
          <div className="explore-heritage-card">
            <div className="explore-heritage-content">
              <span className="explore-tag">🏛️ Discover</span>
              <h2>Explore the <span className="highlight">Rich Heritage</span> of Farrukhabad</h2>
              <p>
                Journey through ancient stories of Draupadi, Durvasa Rishi, Lord Buddha, and the sacred 
                land of Panchala. Discover the spiritual and cultural legacy that shaped our traditions.
              </p>
              <button 
                className="explore-heritage-btn"
                onClick={() => navigate("/heritage")}
              >
                Explore Heritage Page →
              </button>
            </div>
            <div className="explore-heritage-visual">
              <div className="explore-icon-grid">
                <span>👑</span>
                <span>🧘</span>
                <span>🕊️</span>
                <span>⚔️</span>
                <span>🕉️</span>
                <span>🔥</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💎 Values</span>
            <h2 className="section-title">Our <span className="highlight">Core Values</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid-modern">
            {coreValues.map((value) => (
              <div 
                key={value.id}
                className="value-card-modern"
                onClick={() => setSelectedValue(value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedValue(value);
                }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <span className="value-cta">Click to learn more →</span>
                <div className="value-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {selectedValue && (
          <div className="value-popup-overlay" onClick={() => setSelectedValue(null)}>
            <div className="value-popup-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="value-popup-close" 
                onClick={() => setSelectedValue(null)}
              >
                ✕
              </button>
              <div className="value-popup-content">
                <div className="value-popup-header">
                  <span className="value-popup-icon">{selectedValue.icon}</span>
                  <h2>{selectedValue.title}</h2>
                </div>
                <div className="value-popup-body">
                  {selectedValue.longDesc.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
                <button 
                  className="value-popup-btn"
                  onClick={() => setSelectedValue(null)}
                >
                  Got it! 🙌
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========== PROFESSIONAL BLOG POPUP ========== */}
      {popup && (
        <div className="pro-blog-popup">
          <button className="pro-popup-close" onClick={closePopup}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div className="pro-language-toggle">
            <button 
              className={`pro-lang-btn ${popupLanguage === "english" ? "active" : ""}`}
              onClick={() => setPopupLanguage("english")}
            >
              English
            </button>
            <button 
              className={`pro-lang-btn ${popupLanguage === "hindi" ? "active" : ""}`}
              onClick={() => setPopupLanguage("hindi")}
            >
              हिंदी
            </button>
          </div>

          <div className="pro-blog-container">
            {/* ===== MISSION ===== */}
            {popup === "mission" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🚀</div>
                  <h1>{popupLanguage === "english" ? "Our Mission" : "हमारा मिशन"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>

                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">
                        At <strong>Panchalveda</strong>, our mission is simple yet powerful — to bring back the
                        <strong> authentic taste of India</strong> in its purest, healthiest, and most honest form.
                        Every bite we create is a promise of tradition, purity, and wellness. We are not just selling
                        namkeen; we are reviving a legacy that has been passed down through generations of Indian kitchens,
                        where food was never just about filling the stomach — it was about nourishing the body, delighting
                        the senses, and bringing families together.
                      </p>

                      <p>
                        In a world where snacks are increasingly made with cheap refined oils, artificial flavors, and
                        chemical preservatives, we chose a different path. We chose the path our grandmothers would have
                        chosen — the path of <strong>groundnut oil</strong>, <strong>asafoetida (heeng)</strong>, fresh
                        spices, and slow, careful preparation. We chose health over shortcuts. We chose tradition over trends.
                        And we chose to make every single pack with the same love and cleanliness as if it were being made
                        for our own family.
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🌿</span>
                        <p>
                          We don't just make namkeen — we craft <strong>healthy snacking</strong> that nourishes the body
                          and delights the soul. Every ingredient is chosen with purpose. Every spice is added with care.
                          Every batch is prepared with the belief that food should heal, not harm.
                        </p>
                      </div>

                      <p>
                        Our journey began with a simple question: <em>Why should healthy food be boring?</em> Why should
                        people have to choose between taste and wellness? We believed there was a better way — and so we
                        set out to create namkeen that is as delicious as it is nutritious. Namkeen that you can proudly
                        serve to your children, your parents, and your guests, knowing that every bite is doing good for
                        their bodies.
                      </p>

                      <p>Here is what makes every Panchalveda pack truly special:</p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🌱 Healthy by Nature</strong> — Every pack of Panchalveda is made with
                          <strong> groundnut oil</strong>, a heart-friendly oil that is rich in natural antioxidants,
                          monounsaturated fats, and Vitamin E. Unlike cheap refined oils that are chemically processed
                          and stripped of their nutrients, groundnut oil retains its natural goodness. It supports heart
                          health, helps maintain healthy cholesterol levels, and gives our namkeen a rich, nutty flavor
                          that refined oils simply cannot match. This is the oil our ancestors cooked with, and it is
                          the oil we proudly use today.
                        </li>

                        <li>
                          <strong>💪 Boosts Immunity & Improves Digestion</strong> — We enrich our namkeen with
                          <strong> asafoetida (heeng)</strong>, a traditional Indian super-spice that has been used in
                          Ayurvedic medicine for centuries. Asafoetida is known to improve digestion, reduce bloating
                          and gas, fight harmful bacteria in the gut, and strengthen the immune system. It is the secret
                          behind why traditional Indian snacks never feel heavy on the stomach. At Panchalveda, we use
                          generous amounts of pure asafoetida so that every bite not only tastes authentic but also
                          supports your digestive health and overall immunity.
                        </li>

                        <li>
                          <strong>🥜 Pure & Fresh Ingredients</strong> — We source our ingredients directly from local
                          farmers and trusted spice merchants who share our passion for quality. Our peanuts, gram flour,
                          lentils, and spices are carefully selected, cleaned, and used fresh. We do not believe in
                          shortcuts, and we do not compromise on freshness. No stale stock. No old oil. No artificial
                          fillers. Only real, honest ingredients that you can taste and trust.
                        </li>

                        <li>
                          <strong>🌶️ Authentic Indian Spices</strong> — Every masala in our namkeen is handpicked and
                          blended the traditional way, giving you the true taste of Indian households. From the warmth
                          of cumin to the zing of black pepper, from the aroma of coriander to the richness of turmeric
                          — each spice is chosen for its flavor and its health benefits. Our spice blends are not just
                          for taste; they are for wellness.
                        </li>

                        <li>
                          <strong>❤️ Made with Love</strong> — Every batch is prepared with the same care as home-cooked
                          food, because taste is not just flavor — it is emotion, memory, and culture. We believe that
                          food made with love tastes different. It carries warmth. It carries nostalgia. It carries the
                          feeling of being home. When you open a pack of Panchalveda, you are not just opening
                          a snack — you are opening a memory.
                        </li>

                        <li>
                          <strong>🧼 Made with Cleanliness</strong> — Hygiene is not an afterthought for us; it is a
                          foundation. Our kitchen follows strict cleanliness protocols, our packaging is food-safe and
                          sealed for freshness, and every batch goes through multiple quality checks before it reaches
                          you. We believe that pure food must also be clean food — and we take that responsibility
                          seriously.
                        </li>
                      </ul>

                      <p>
                        But our mission does not stop at your doorstep. It reaches much further. We want the world to
                        know what real Indian namkeen tastes like — and more importantly, what real Indian namkeen can
                        <em> do</em> for your health. We want people in every corner of the world, from Delhi to Dubai,
                        from Mumbai to London, from Kolkata to New York, to experience the magic of groundnut oil and
                        asafoetida. We want them to understand that Indian snacks are not just about spice and crunch —
                        they are about wisdom, tradition, and wellness.
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          Our mission extends beyond business — we aim to take the <strong>taste of India and the power
                          of groundnut oil & asafoetida</strong> not only across India, but to <strong>every corner of
                          the world</strong>. We want people abroad to enjoy namkeen that is both delicious and healthy.
                          We want them to experience the same joy, the same comfort, and the same nourishment that Indian
                          families have enjoyed for generations. We want to make <strong>Panchalveda</strong> a
                          global symbol of healthy snacking — a brand that people trust not just for its taste, but for
                          its integrity.
                        </p>
                      </div>

                      <p>
                        We are building more than a brand. We are building a movement. A movement that says no to
                        chemical-laden snacks. A movement that says yes to traditional cooking methods, natural
                        ingredients, and honest preparation. A movement that believes health and taste can — and should
                        — go hand in hand.
                      </p>

                      <p>
                        Whether it's a family gathering, a festive celebration, a road trip, or a simple evening snack —
                        <strong> Panchalveda</strong> is here to make every moment healthier, tastier, and more
                        memorable. This is our mission. This is our promise. This is our gift to you and your family. 🙏
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">
                        <strong>पांचालवेदा</strong> का मिशन सरल लेकिन शक्तिशाली है — भारत के
                        <strong> असली स्वाद</strong> को उसके शुद्धतम, स्वास्थ्यवर्धक और ईमानदार रूप में वापस लाना।
                        हमारा हर बाइट परंपरा, शुद्धता और सेहत का वादा है। हम सिर्फ नमकीन नहीं बेचते — हम एक
                        विरासत को जीवित कर रहे हैं, वो विरासत जो पीढ़ियों से भारतीय रसोई में चली आ रही है,
                        जहाँ खाना कभी सिर्फ पेट भरने का साधन नहीं था — वो शरीर का पोषण, इंद्रियों का आनंद
                        और परिवार को जोड़ने का जरिया था।
                      </p>

                      <p>
                        आज की दुनिया में जब स्नैक्स सस्ते रिफाइंड तेल, कृत्रिम स्वाद और केमिकल प्रिजर्वेटिव्स से
                        बनाए जाते हैं, हमने एक अलग रास्ता चुना। हमने वो रास्ता चुना जो हमारी दादी-नानी चुनतीं —
                        <strong> मूंगफली तेल</strong>, <strong>हींग</strong>, ताज़े मसालों और धीमी, सावधानी से
                        की गई तैयारी का रास्ता। हमने सेहत को शॉर्टकट से ऊपर रखा। हमने परंपरा को ट्रेंड से ऊपर
                        रखा। और हमने हर पैक को उसी प्यार और सफाई से बनाया जैसे वो हमारे अपने परिवार के लिए
                        बनाया जा रहा हो।
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🌿</span>
                        <p>
                          हम सिर्फ नमकीन नहीं बनाते — हम <strong>हेल्दी स्नैकिंग</strong> बनाते हैं जो शरीर को
                          पोषण देती है और मन को खुश करती है। हर सामग्री सोच-समझकर चुनी जाती है। हर मसाला
                          प्यार से डाला जाता है। हर बैच इस विश्वास के साथ तैयार होता है कि खाना इलाज होना
                          चाहिए, नुकसान नहीं।
                        </p>
                      </div>

                      <p>
                        हमारी यात्रा एक साधारण सवाल से शुरू हुई: <em>हेल्दी खाना बोरिंग क्यों होना चाहिए?</em>
                        लोगों को स्वाद और सेहत में से एक क्यों चुनना पड़े? हमें विश्वास था कि एक बेहतर रास्ता
                        है — और इसलिए हमने ऐसी नमकीन बनाने का फैसला किया जो स्वादिष्ट भी है और पौष्टिक भी।
                        ऐसी नमकीन जिसे आप गर्व से अपने बच्चों, माता-पिता और मेहमानों को परोस सकें, यह जानते
                        हुए कि हर बाइट उनके शरीर के लिए अच्छी है।
                      </p>

                      <p>हर पांचालवेदा पैक को खास बनाती हैं ये बातें:</p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🌱 प्राकृतिक रूप से हेल्दी</strong> — हर पैक <strong>मूंगफली तेल</strong> में
                          बनाया जाता है, जो दिल के लिए फायदेमंद तेल है और प्राकृतिक एंटीऑक्सिडेंट, मोनोअनसैचुरेटेड
                          फैट और विटामिन ई से भरपूर है। सस्ते रिफाइंड तेल के विपरीत, जो केमिकल प्रोसेस से गुजरते
                          हैं और अपने पोषक तत्व खो देते हैं, मूंगफली तेल अपनी प्राकृतिक अच्छाई बनाए रखता है।
                          यह दिल की सेहत का समर्थन करता है, कोलेस्ट्रॉल स्तर को स्वस्थ रखने में मदद करता है,
                          और हमारी नमकीन को एक समृद्ध, नटी स्वाद देता है जो रिफाइंड तेल कभी नहीं दे सकते।
                        </li>

                        <li>
                          <strong>💪 इम्यूनिटी और पाचन में सुधार</strong> — हम अपनी नमकीन को <strong>हींग</strong>
                          से समृद्ध करते हैं, जो एक पारंपरिक भारतीय सुपर-मसाला है और सदियों से आयुर्वेदिक चिकित्सा
                          में उपयोग किया जाता रहा है। हींग पाचन सुधारती है, पेट फूलना और गैस कम करती है, आंतों
                          में हानिकारक बैक्टीरिया से लड़ती है, और इम्यून सिस्टम को मजबूत बनाती है। यही कारण है
                          कि पारंपरिक भारतीय स्नैक्स कभी पेट पर भारी नहीं लगते। पांचालवेदा में हम शुद्ध हींग
                          का उदार मात्रा में उपयोग करते हैं ताकि हर बाइट न सिर्फ असली लगे बल्कि आपकी पाचन
                          सेहत और इम्यूनिटी का भी समर्थन करे।
                        </li>

                        <li>
                          <strong>🥜 शुद्ध और ताज़ी सामग्री</strong> — हम अपनी सामग्री सीधे स्थानीय किसानों और
                          भरोसेमंद मसाला व्यापारियों से प्राप्त करते हैं जो गुणवत्ता के प्रति हमारे जुनून को
                          साझा करते हैं। हमारे मूंगफली, बेसन, दालें और मसाले सावधानी से चुने, साफ किए और
                          ताज़े उपयोग किए जाते हैं। हम शॉर्टकट में विश्वास नहीं करते, और हम ताज़गी पर
                          समझौता नहीं करते। कोई पुराना स्टॉक नहीं। कोई पुराना तेल नहीं। कोई कृत्रिम भराव नहीं।
                          केवल असली, ईमानदार सामग्री जिसे आप चख सकते हैं और भरोसा कर सकते हैं।
                        </li>

                        <li>
                          <strong>🌶️ असली भारतीय मसाले</strong> — हमारी नमकीन में हर मसाला पारंपरिक तरीके से
                          चुना और मिलाया जाता है, जिससे मिलता है असली भारतीय घरों जैसा स्वाद। जीरे की गर्माहट
                          से लेकर काली मिर्च की चटपटाहट तक, धनिये की सुगंध से लेकर हल्दी की समृद्धि तक —
                          हर मसाला अपने स्वाद और अपने स्वास्थ्य लाभों के लिए चुना जाता है। हमारे मसाला मिश्रण
                          सिर्फ स्वाद के लिए नहीं हैं; वे सेहत के लिए हैं।
                        </li>

                        <li>
                          <strong>❤️ प्यार से बनाया</strong> — हर बैच घर के खाने जैसी देखभाल से तैयार होता है,
                          क्योंकि स्वाद केवल फ्लेवर नहीं — भावना, यादें और संस्कृति है। हम मानते हैं कि प्यार
                          से बनाया खाना अलग स्वाद देता है। वो गर्माहट देता है। वो यादें देता है। वो घर जैसा
                          अहसास देता है। जब आप पांचालवेदा का पैक खोलते हैं, तो आप सिर्फ स्नैक नहीं
                          खोलते — आप एक याद खोलते हैं।
                        </li>

                        <li>
                          <strong>🧼 सफाई के साथ बनाया</strong> — हाइजीन हमारे लिए बाद की सोच नहीं; यह हमारी
                          नींव है। हमारी रसोई सख्त सफाई प्रोटोकॉल का पालन करती है, हमारी पैकेजिंग फूड-सेफ
                          और ताज़गी के लिए सील की जाती है, और हर बैच आप तक पहुँचने से पहले कई गुणवत्ता
                          जांचों से गुजरता है। हम मानते हैं कि शुद्ध खाना साफ खाना भी होना चाहिए — और हम
                          इस जिम्मेदारी को गंभीरता से लेते हैं।
                        </li>
                      </ul>

                      <p>
                        लेकिन हमारा मिशन आपकी दहलीज पर खत्म नहीं होता। यह बहुत आगे तक जाता है। हम दुनिया को
                        बताना चाहते हैं कि असली भारतीय नमकीन कैसी होती है — और इससे भी ज्यादा जरूरी, यह कि
                        असली भारतीय नमकीन आपकी सेहत के लिए क्या <em>कर सकती है</em>। हम चाहते हैं कि दुनिया
                        के हर कोने में लोग, दिल्ली से दुबई तक, मुंबई से लंदन तक, कोलकाता से न्यूयॉर्क तक,
                        मूंगफली तेल और हींग का जादू महसूस करें। हम चाहते हैं कि वे समझें कि भारतीय स्नैक्स
                        सिर्फ मसाला और क्रंच नहीं हैं — वे ज्ञान, परंपरा और सेहत हैं।
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          हमारा मिशन व्यवसाय से परे है — हम <strong>भारत का स्वाद और मूंगफली तेल व हींग की
                          ताकत</strong> सिर्फ भारत में ही नहीं, बल्कि <strong>दुनिया के हर कोने</strong> तक
                          पहुँचाना चाहते हैं। हम चाहते हैं कि विदेशों में रहने वाले लोग भी स्वादिष्ट और
                          हेल्दी नमकीन का आनंद ले सकें। हम चाहते हैं कि वे वही खुशी, वही आराम और वही पोषण
                          महसूस करें जो भारतीय परिवारों ने पीढ़ियों से आनंद लिया है। हम <strong>पांचालवेदा
                         </strong> को हेल्दी स्नैकिंग का वैश्विक प्रतीक बनाना चाहते हैं — एक ऐसा ब्रांड
                          जिस पर लोग सिर्फ स्वाद के लिए नहीं, बल्कि ईमानदारी के लिए भरोसा करें।
                        </p>
                      </div>

                      <p>
                        हम एक ब्रांड से बढ़कर कुछ बना रहे हैं। हम एक आंदोलन बना रहे हैं। एक आंदोलन जो
                        केमिकल युक्त स्नैक्स को ना कहता है। एक आंदोलन जो पारंपरिक खाना पकाने के तरीकों,
                        प्राकृतिक सामग्री और ईमानदार तैयारी को हाँ कहता है। एक आंदोलन जो मानता है कि सेहत
                        और स्वाद साथ-साथ चल सकते हैं — और चलने चाहिए।
                      </p>

                      <p>
                        चाहे पारिवारिक मेल हो, त्योहार हो, रोड ट्रिप हो, या शाम का हल्का नाश्ता —
                        <strong> पांचालवेदा</strong> हर पल को हेल्दी, स्वादिष्ट और यादगार बनाने के लिए
                        यहाँ है। यही हमारा मिशन है। यही हमारा वादा है। यही हमारा आपके और आपके परिवार के
                        लिए तोहफा है। 🙏
                      </p>
                    </>
                  )}

                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== VISION ===== */}
            {popup === "vision" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🌟</div>
                  <h1>{popupLanguage === "english" ? "Our Vision" : "हमारा विज़न"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>

                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">
                        Our vision is not about where we stand today — it is about where we are going tomorrow.
                        At <strong>Panchalveda</strong>, we dream of a future where Indian snacking is not
                        just loved in India, but <strong>respected across the world</strong>. A future where the
                        words "Made in India" on a snack pack are greeted with trust, excitement, and pride — not
                        just in our homeland, but on every continent, in every market, in every home.
                      </p>

                      <p>
                        We are not here to be another namkeen brand. We are here to <strong>rewrite the story</strong>
                        of Indian snacks on the global stage. For too long, Indian food abroad has been reduced to
                        a few stereotypes — too spicy, too oily, too heavy. We want to change that narrative. We
                        want the world to discover what we have always known: that Indian snacking, done right, is
                        among the finest, healthiest, and most soulful food experiences on earth.
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🌍</span>
                        <p>
                          We envision a day when a family in Tokyo, a student in Toronto, a grandmother in Dubai,
                          and a child in Sydney all reach for the same pack — and feel the same joy, the same
                          comfort, and the same connection to India that you feel today.
                        </p>
                      </div>

                      <p>
                        This vision is bigger than business. It is about <strong>pride</strong> — the pride of
                        seeing an Indian brand stand shoulder to shoulder with the world's biggest names. It is
                        about <strong>purpose</strong> — creating something that outlives us, something our
                        children and grandchildren can look at and say, "We built that." And it is about
                        <strong> people</strong> — every customer, every farmer, every family that becomes part
                        of our journey.
                      </p>

                      <p>Here is what our vision is built on:</p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🌏 From India to Every Continent</strong>
                          Our first dream is simple: to see <strong>Panchalveda</strong> on shelves in every
                          major city of the world. From the streets of Delhi to the malls of Dubai, from London's
                          grocery stores to New York's ethnic aisles, from Singapore to Sydney — we want our packs
                          to travel further than we ever could. Not as a niche "Indian product," but as a
                          <strong> globally loved snack</strong> that anyone, from any culture, can enjoy.
                        </li>

                        <li>
                          <strong>🏆 A Brand the World Trusts</strong>
                          Trust is the currency of the future. We want <strong>Panchalveda</strong> to be a name
                          that global customers associate with quality, honesty, and consistency. When someone
                          abroad picks up our pack, they should not have to wonder if it meets international
                          standards — they should <strong>know</strong> it does. We are building systems, processes,
                          and partnerships that will make our brand a benchmark for trust, not just in India, but
                          everywhere we go.
                        </li>

                        <li>
                          <strong>🚀 A Movement, Not Just a Brand</strong>
                          We are not chasing sales. We are building a <strong>movement</strong> — a global
                          community of people who believe that snacking can be healthy, that tradition matters,
                          and that Indian food deserves a place of honor on the world's table. Every customer who
                          joins us is not just a buyer — they are a <strong>co-founder of this dream</strong>.
                          Together, we are proving that a small Indian brand can stand tall on the global stage.
                        </li>

                        <li>
                          <strong>👨‍👩‍👧 A Legacy for Future Generations</strong>
                          We think in decades, not quarters. Our vision is to build something that lasts — a
                          <strong> legacy</strong> that our children and grandchildren will inherit with pride.
                          A brand that will still be loved fifty years from now. A name that will be remembered
                          not just for what it sold, but for what it <strong>stood for</strong>: honesty, health,
                          tradition, and love for India.
                        </li>

                        <li>
                          <strong>🌱 Empowering Farmers & Local Communities</strong>
                          As we grow, we want to grow <strong>together</strong>. Our vision includes fair prices
                          for the farmers who grow our ingredients, steady work for the families who help us
                          prepare our namkeen, and a brighter future for the communities that support us. A brand
                          that grows by lifting others up is the only kind of brand worth building.
                        </li>

                        <li>
                          <strong>❤️ A Brand That Feels Like Home — Everywhere</strong>
                          No matter how far we expand, our vision is to remain <strong>warm, personal, and
                          heartfelt</strong>. We never want to become a faceless corporation. Every pack should
                          still feel like it was made by people who care — because it was. Whether you are in
                          Mumbai or Madrid, Panchalveda should feel like a piece of home, wherever home may be.
                        </li>
                      </ul>

                      <p>
                        This is not a dream we can achieve alone. It will take years. It will take patience. It
                        will take every ounce of love, hard work, and faith we have. But we are ready. And with
                        <strong> you</strong> by our side, we know it is possible.
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          We do not want to be the biggest Indian snack brand. We want to be the most
                          <strong> loved</strong> one. We do not want to be the loudest voice in the market. We
                          want to be the most <strong>trusted</strong> one. We do not want to be famous for our
                          ads. We want to be remembered for our <strong>honesty</strong>. This is our vision —
                          and this is the future we are building, one pack at a time, one country at a time,
                          one heart at a time.
                        </p>
                      </div>

                      <p>
                        The road ahead is long. But the destination is worth every step. And we are honored to
                        have you walking it with us. 🌟
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">
                        हमारा विज़न आज हम कहाँ खड़े हैं, इसके बारे में नहीं है — यह कल हम कहाँ जा रहे हैं,
                        इसके बारे में है। <strong>पांचालवेदा</strong> में हम एक ऐसे भविष्य का सपना
                        देखते हैं जहाँ भारतीय स्नैकिंग सिर्फ भारत में ही नहीं, बल्कि <strong>पूरी दुनिया
                        में सम्मान</strong> पाए। एक ऐसा भविष्य जहाँ स्नैक पैक पर लिखा "Made in India" भरोसे,
                        उत्साह और गर्व के साथ स्वागत किया जाए — सिर्फ हमारी मातृभूमि में नहीं, बल्कि हर
                        महाद्वीप, हर बाजार, हर घर में।
                      </p>

                      <p>
                        हम एक और नमकीन ब्रांड बनने के लिए यहाँ नहीं हैं। हम वैश्विक मंच पर भारतीय स्नैक्स
                        की <strong>कहानी फिर से लिखने</strong> के लिए यहाँ हैं। बहुत लंबे समय से विदेशों
                        में भारतीय खाने को कुछ गिनी-चुनी छवियों तक सीमित कर दिया गया है — बहुत तीखा, बहुत
                        तैलीय, बहुत भारी। हम यह कहानी बदलना चाहते हैं। हम दुनिया को वो दिखाना चाहते हैं
                        जो हम हमेशा से जानते हैं: कि भारतीय स्नैकिंग, सही तरीके से बनाई जाए तो दुनिया के
                        सबसे बेहतरीन, स्वास्थ्यवर्धक और आत्मीय खाने के अनुभवों में से एक है।
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🌍</span>
                        <p>
                          हम एक ऐसे दिन की कल्पना करते हैं जब टोक्यो का एक परिवार, टोरंटो का एक छात्र,
                          दुबई की एक दादी और सिडनी का एक बच्चा — सब एक ही पैक की ओर बढ़ें और वही खुशी,
                          वही आराम और भारत से वही जुड़ाव महसूस करें जो आप आज महसूस करते हैं।
                        </p>
                      </div>

                      <p>
                        यह विज़न व्यवसाय से बड़ा है। यह <strong>गर्व</strong> के बारे में है — एक भारतीय
                        ब्रांड को दुनिया के सबसे बड़े नामों के साथ कंधे से कंधा मिलाकर खड़ा देखने का गर्व।
                        यह <strong>उद्देश्य</strong> के बारे में है — कुछ ऐसा बनाना जो हमसे आगे भी जिए,
                        जिसे देखकर हमारे बच्चे और पोते कहें, "यह हमने बनाया है।" और यह <strong>लोगों</strong>
                        के बारे में है — हर ग्राहक, हर किसान, हर परिवार जो हमारी यात्रा का हिस्सा बनता है।
                      </p>

                      <p>हमारा विज़न इन बातों पर टिका है:</p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🌏 भारत से हर महाद्वीप तक</strong>
                          हमारा पहला सपना सरल है: <strong>पांचालवेदा</strong> को दुनिया के हर बड़े शहर की
                          शेल्फ पर देखना। दिल्ली की सड़कों से लेकर दुबई के मॉल्स तक, लंदन के किराना स्टोर्स
                          से लेकर न्यूयॉर्क की एथनिक आइल्स तक, सिंगापुर से सिडनी तक — हम चाहते हैं कि हमारे
                          पैक हमसे कहीं ज्यादा दूर तक यात्रा करें। एक संकीर्ण "भारतीय उत्पाद" के रूप में नहीं,
                          बल्कि एक <strong>वैश्विक स्तर पर पसंदीदा स्नैक</strong> के रूप में, जिसे किसी भी
                          संस्कृति का कोई भी व्यक्ति आनंद ले सके।
                        </li>

                        <li>
                          <strong>🏆 एक ब्रांड जिस पर दुनिया भरोसा करे</strong>
                          भरोसा भविष्य की मुद्रा है। हम चाहते हैं कि <strong>पांचालवेदा</strong> एक ऐसा नाम
                          हो जिसे वैश्विक ग्राहक गुणवत्ता, ईमानदारी और निरंतरता से जोड़ें। जब कोई विदेश में
                          हमारा पैक उठाए, तो उसे यह न सोचना पड़े कि यह अंतर्राष्ट्रीय मानकों को पूरा करता
                          है या नहीं — उसे यह <strong>पता</strong> हो कि यह करता है। हम ऐसी प्रणालियाँ,
                          प्रक्रियाएँ और साझेदारियाँ बना रहे हैं जो हमारे ब्रांड को भरोसे का मानक बनाएँगी —
                          सिर्फ भारत में नहीं, बल्कि हर जगह जहाँ हम जाएँगे।
                        </li>

                        <li>
                          <strong>🚀 एक आंदोलन, सिर्फ एक ब्रांड नहीं</strong>
                          हम बिक्री के पीछे नहीं भाग रहे। हम एक <strong>आंदोलन</strong> बना रहे हैं — ऐसे
                          लोगों का एक वैश्विक समुदाय जो मानते हैं कि स्नैकिंग हेल्दी हो सकती है, कि परंपरा
                          मायने रखती है, और कि भारतीय खाना दुनिया की मेज पर सम्मान का हकदार है। हर ग्राहक
                          जो हमसे जुड़ता है, वह सिर्फ खरीदार नहीं — वह इस सपने का <strong>सह-संस्थापक</strong>
                          है। साथ मिलकर, हम साबित कर रहे हैं कि एक छोटा भारतीय ब्रांड वैश्विक मंच पर गर्व
                          से खड़ा हो सकता है।
                        </li>

                        <li>
                          <strong>👨‍👩‍👧 आने वाली पीढ़ियों के लिए विरासत</strong>
                          हम दशकों में सोचते हैं, तिमाहियों में नहीं। हमारा विज़न कुछ ऐसा बनाना है जो
                          टिके — एक ऐसी <strong>विरासत</strong> जिसे हमारे बच्चे और पोते गर्व से विरासत
                          में पाएँ। एक ऐसा ब्रांड जो पचास साल बाद भी प्यार किया जाए। एक ऐसा नाम जो सिर्फ
                          इस बात के लिए याद न किया जाए कि उसने क्या बेचा, बल्कि इस बात के लिए कि वह
                          <strong> किसके लिए खड़ा था</strong>: ईमानदारी, सेहत, परंपरा और भारत के लिए प्यार।
                        </li>

                        <li>
                          <strong>🌱 किसानों और स्थानीय समुदायों का सशक्तिकरण</strong>
                          जैसे-जैसे हम बढ़ेंगे, हम <strong>साथ मिलकर</strong> बढ़ना चाहते हैं। हमारे विज़न
                          में उन किसानों के लिए उचित मूल्य शामिल है जो हमारी सामग्री उगाते हैं, उन परिवारों
                          के लिए स्थिर काम जो हमारी नमकीन बनाने में मदद करते हैं, और उन समुदायों के लिए एक
                          बेहतर भविष्य जो हमारा समर्थन करते हैं। जो ब्रांड दूसरों को ऊपर उठाकर बढ़ता है,
                          वही बनाने लायक ब्रांड है।
                        </li>

                        <li>
                          <strong>❤️ हर जगह घर जैसा महसूस होने वाला ब्रांड</strong>
                          चाहे हम कितनी भी दूर तक फैलें, हमारा विज़न <strong>गर्मजोश, व्यक्तिगत और
                          दिल से</strong> बने रहना है। हम कभी एक चेहरे-रहित निगम नहीं बनना चाहते। हर पैक
                          आज भी ऐसा महसूस होना चाहिए जैसे उसे उन लोगों ने बनाया है जो परवाह करते हैं —
                          क्योंकि उसे वाकई उन्होंने बनाया है। चाहे आप मुंबई में हों या मैड्रिड में,
                          पांचालवेदा घर का एक टुकड़ा महसूस होना चाहिए — जहाँ भी घर हो।
                        </li>
                      </ul>

                      <p>
                        यह सपना हम अकेले पूरा नहीं कर सकते। इसमें सालों लगेंगे। इसमें धैर्य लगेगा। इसमें
                        हमारा हर बूंद प्यार, मेहनत और विश्वास लगेगा। लेकिन हम तैयार हैं। और <strong>आप</strong>
                        के साथ, हम जानते हैं कि यह संभव है।
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          हम भारत का सबसे बड़ा स्नैक ब्रांड नहीं बनना चाहते। हम सबसे <strong>प्यारा</strong>
                          बनना चाहते हैं। हम बाजार की सबसे तेज़ आवाज़ नहीं बनना चाहते। हम सबसे
                          <strong> भरोसेमंद</strong> बनना चाहते हैं। हम अपने विज्ञापनों के लिए मशहूर नहीं
                          होना चाहते। हम अपनी <strong>ईमानदारी</strong> के लिए याद किए जाना चाहते हैं।
                          यही हमारा विज़न है — और यही वो भविष्य है जो हम बना रहे हैं, एक पैक एक बार में,
                          एक देश एक बार में, एक दिल एक बार में।
                        </p>
                      </div>

                      <p>
                        आगे का रास्ता लंबा है। लेकिन मंज़िल हर कदम के लायक है। और हमें गर्व है कि आप हमारे
                        साथ चल रहे हैं। 🌟
                      </p>
                    </>
                  )}

                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== HISTORY ===== */}
            {popup === "history" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">📜</div>
                  <h1>{popupLanguage === "english" ? "PanchalVeda Heritage" : "पंचालवेडा विरासत"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>
                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">Farrukhabadi Namkeen is known for its powerful flavor profile and aromatic use of authentic heeng.</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🧘</span>
                        <p>Generations of craftsmanship and traditional recipes have shaped this flavorful legacy.</p>
                      </div>
                      <h2 className="pro-blog-subtitle">Heeng: The Star Ingredient</h2>
                      <p>While heeng is commonly used in Indian tempering, Farrukhabadi Namkeen makes it the centerpiece of every bite.</p>
                      <div className="pro-blog-list">
                        <h3>Popular Varieties</h3>
                        <ul>
                          <li><strong>Heeng Sev:</strong> Thin, crispy gram-flour strands seasoned generously with authentic heeng.</li>
                          <li><strong>Heeng Bhujia:</strong> Slightly thicker than sev with a stronger, richer flavor.</li>
                          <li><strong>Heeng Kachori:</strong> Crispy layered kachoris filled with spicy heeng stuffing.</li>
                          <li><strong>Chana Dal Namkeen:</strong> Crunchy roasted chana dal seasoned with salt, pepper, and a touch of heeng.</li>
                        </ul>
                      </div>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>Farrukhabadi Namkeen is more than just a snack—it is a culinary heritage proudly representing the traditions of Farrukhabad.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">फर्रुखाबादी नमकीन अपने शक्तिशाली स्वाद और असली हींग की मनमोहक सुगंध के लिए प्रसिद्ध है।</p>
                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🧘</span>
                        <p>पीढ़ियों से चली आ रही शिल्पकला और पारंपरिक रेसिपी ने इसे स्वादिष्ट विरासत प्रदान की है।</p>
                      </div>
                      <h2 className="pro-blog-subtitle">हींग: मुख्य नायिका</h2>
                      <p>भारतीय रसोई में हींग का उपयोग सामान्यतः तड़के में किया जाता है, लेकिन फर्रुखाबादी नमकीन में यही इसका सबसे प्रमुख स्वाद बन जाती है।</p>
                      <div className="pro-blog-list">
                        <h3>लोकप्रिय किस्में</h3>
                        <ul>
                          <li><strong>हींग सेव:</strong> पतले, कुरकुरे बेसन के तार</li>
                          <li><strong>हींग भुजिया:</strong> सेव से थोड़ी मोटी और अधिक तीखी</li>
                          <li><strong>हींग कचौड़ी:</strong> कुरकुरी परतों वाली मसालेदार कचौड़ी</li>
                          <li><strong>चना दाल नमकीन:</strong> कुरकुरी भुनी चना दाल</li>
                        </ul>
                      </div>
                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>फर्रुखाबादी नमकीन केवल एक नमकीन नहीं, बल्कि एक समृद्ध पाक-विरासत है।</p>
                      </div>
                    </>
                  )}
                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== PAN-INDIA EXPANSION ===== */}
            {popup === "panindia" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🌍</div>
                  <h1>{popupLanguage === "english" ? "Pan-India Expansion" : "पूरे भारत में विस्तार"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>

                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">
                        What began in a small kitchen in Farrukhabad was never meant to stay there. Every
                        pack we made carried a dream — that one day, families from every corner of India
                        would taste the <strong>honest, traditional flavors of Farrukhabad</strong>. And
                        that dream is now a reality. <strong>Panchalveda</strong> is no longer a local
                        name — it is a <strong>Pan-India brand</strong>, serving families from the
                        foothills of the Himalayas to the shores of Kanyakumari.
                      </p>

                      <p>
                        Expansion was never about chasing numbers. It was about <strong>reaching more
                        homes</strong> — reaching the mother in Mumbai who wants her children to snack
                        healthy, the father in Delhi who misses the namkeen of his childhood, the student
                        in Bangalore who craves a taste of home. Every new city we entered, every new
                        distribution partner we onboarded, was a promise — that we would never compromise
                        on the very things that made us who we are.
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🚀</span>
                        <p>
                          From a single kitchen in Farrukhabad to a footprint spanning
                          <strong> Mumbai, Delhi, Kolkata, Chennai, Bangalore</strong> and dozens of cities
                          in between — <strong>Panchalveda</strong> has grown into a truly national
                          brand. What once took weeks to reach a customer now reaches them in days. What
                          was once a local secret is now India's trusted namkeen.
                        </p>
                      </div>

                      <p>
                        Here is how our Pan-India journey unfolded — city by city, family by family:
                      </p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🌱 The First Step Beyond Farrukhabad</strong>
                          Every expansion begins with a single decision. For us, that decision came when
                          the first order arrived from outside Uttar Pradesh. A family in Delhi had heard
                          about our namkeen from a relative and wanted to try it. That one order changed
                          everything. It told us that our flavors were not just local favourites — they
                          had a <strong>universal appeal</strong>. We realized that if one family in Delhi
                          loved our namkeen, thousands would. And that belief became the seed of our
                          Pan-India journey.
                        </li>

                        <li>
                          <strong>🏙️ Mumbai — The City of Dreams, and Our First Metro Success</strong>
                          Mumbai was our first big-city test. The city is fast, demanding, and full of
                          choices. Families here have access to the best of everything — so earning their
                          trust was not easy. But when the first reviews came in, they were overwhelming.
                          Customers loved the <strong>crunch, the aroma, and the honest ingredients</strong>.
                          Mumbai taught us that quality always wins, no matter where you come from. Today,
                          our namkeen is a familiar sight in homes across Mumbai — from Andheri to
                          Thane, from Bandra to Borivali.
                        </li>

                        <li>
                          <strong>🏛️ Delhi NCR — Where Tradition Meets Modernity</strong>
                          Delhi was a special milestone. It is the capital of India, and one of the
                          most competitive markets for snacks in the country. When Panchalveda reached
                          Delhi NCR — including Noida, Gurgaon, Ghaziabad, and Faridabad — we were
                          welcomed with open arms. Families here appreciated that our namkeen was
                          <strong>traditional yet healthy</strong> — a rare combination in a market
                          dominated by mass-produced snacks. Our presence in Delhi NCR also brought us
                          closer to national events, expos, and government platforms like
                          <strong>ODOP</strong>.
                        </li>

                        <li>
                          <strong>🎭 Kolkata — Winning the East</strong>
                          Kolkata has one of India's most discerning food cultures. Bengalis know their
                          flavors, and they do not settle for anything less than authentic. When we
                          entered Kolkata, we knew we had to bring our very best. And the response was
                          heartwarming. Customers appreciated the <strong>purity of our ingredients</strong>
                          and the <strong>nostalgic taste of traditional Indian snacking</strong>. Kolkata
                          taught us that authenticity transcends regional boundaries — good food speaks
                          a universal language.
                        </li>

                        <li>
                          <strong>🌴 Chennai — Bringing the Taste of the North to the South</strong>
                          Chennai was our boldest step — a leap into a region with very different
                          culinary traditions. We were told that our namkeen might not find takers in
                          South India. But our customers proved the skeptics wrong. Families in Chennai
                          embraced our namkeen with enthusiasm, and many wrote to us saying it reminded
                          them of the snacks their North Indian friends had shared. Chennai showed us
                          that <strong>India is one family</strong> — and that good food truly bridges
                          every distance.
                        </li>

                        <li>
                          <strong>💻 Bangalore — Fueling India's Tech Capital</strong>
                          Bangalore is a city of dreamers, doers, and hardworking professionals. Many of
                          our customers here are young professionals who grew up eating traditional
                          Indian namkeen but now struggle to find authentic options. Panchalveda became
                          their go-to snack — <strong>healthy, honest, and full of the taste of home</strong>.
                          Bangalore's fast-paced lifestyle also taught us the importance of reliable
                          logistics, timely delivery, and packaging that preserves freshness. Today, our
                          namkeen travels to Bangalore within days of being made in Farrukhabad.
                        </li>

                        <li>
                          <strong>🛣️ Beyond the Metros — Reaching Tier 2 & Tier 3 Cities</strong>
                          True Pan-India presence is not just about the big cities. We have worked
                          tirelessly to reach smaller towns and villages — places like Kanpur, Lucknow,
                          Agra, Varanasi, Jaipur, Indore, Bhopal, Nagpur, Surat, Ahmedabad, and hundreds
                          more. In many of these cities, our namkeen is now a household name. This
                          expansion has been especially meaningful because it has brought us closer to
                          our <strong>roots</strong> — to the very kinds of families who first believed
                          in us.
                        </li>

                        <li>
                          <strong>📦 Building a Nationwide Supply Chain</strong>
                          Expansion is not just about selling — it is about <strong>reaching safely and
                          consistently</strong>. Over the years, we have built a network of trusted
                          distributors, delivery partners, and retail outlets across India. Our packaging
                          has been redesigned to lock in freshness for longer journeys. Our logistics
                          have been optimized so that a family in Chennai receives the same freshness
                          that a family in Farrukhabad does. Every improvement we made was in service of
                          one goal — that <strong>no Indian family is too far from honest namkeen</strong>.
                        </li>

                        <li>
                          <strong>❤️ What Pan-India Really Means to Us</strong>
                          Pan-India expansion is not just a business milestone — it is an emotional one.
                          It means a grandmother in Kolkata can order the same namkeen her daughter in
                          Delhi loves. It means a student in Bangalore can share the taste of his
                          hometown with his friends. It means a mother in Mumbai can finally give her
                          children a snack she feels good about. Every delivery we make, every city we
                          reach, is a small act of <strong>bringing India together over a shared love
                          of honest food</strong>.
                        </li>
                      </ul>

                      <p>
                        But this is only the beginning. There are still hundreds of cities we have not
                        yet reached, thousands of families who have not yet tasted our namkeen, and
                        millions of moments waiting to be made. Every state we enter, every city we
                        serve, reminds us that our mission is far from over. We are working every day
                        to make Panchalveda available in every corner of India — because we believe
                        that <strong>the taste of honest Indian snacking should not be a luxury — it
                        should be a right</strong>.
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          When we say we are a Pan-India brand, we do not mean it as a boast. We mean it
                          as a <strong>responsibility</strong> — a promise to every family from Kashmir
                          to Kanyakumari, from Gujarat to Assam, that we will continue to serve them with
                          the same honesty, the same quality, and the same love that we began with in
                          a small kitchen in Farrukhabad.
                        </p>
                      </div>

                      <p>
                        To every customer in every city — <strong>thank you for welcoming us into your
                        home</strong>. You are not just a customer; you are a part of our story. And we
                        promise — the journey has only just begun. 🌍🇮🇳
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">
                        जो फर्रुखाबाद की एक छोटी रसोई से शुरू हुआ था, वह कभी वहीं तक सीमित रहने के लिए
                        नहीं था। हमारे हर पैक में एक सपना था — कि एक दिन भारत के हर कोने के परिवार
                        <strong> फर्रुखाबाद के ईमानदार, पारंपरिक स्वाद</strong> का आनंद लेंगे। और आज
                        वह सपना सच हो चुका है। <strong>पांचालवेदा</strong> अब सिर्फ एक स्थानीय नाम नहीं
                        है — यह एक <strong>पूरे भारत का ब्रांड</strong> है, जो हिमालय की तलहटी से लेकर
                        कन्याकुमारी के तटों तक के परिवारों की सेवा कर रहा है।
                      </p>

                      <p>
                        विस्तार कभी भी आंकड़ों के पीछे भागने के बारे में नहीं था। यह
                        <strong> अधिक घरों तक पहुँचने</strong> के बारे में था — मुंबई की उस माँ तक
                        पहुँचना जो चाहती है कि उसके बच्चे हेल्दी स्नैक खाएँ, दिल्ली के उस पिता तक पहुँचना
                        जो अपने बचपन की नमकीन को मिस करता है, बैंगलोर के उस छात्र तक पहुँचना जो घर के
                        स्वाद को तरसता है। हर नया शहर, हर नया वितरण साझेदार, एक वादा था — कि हम उन
                        चीज़ों से कभी समझौता नहीं करेंगे जिन्होंने हमें बनाया है।
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🚀</span>
                        <p>
                          फर्रुखाबाद की एक रसोई से लेकर
                          <strong> मुंबई, दिल्ली, कोलकाता, चेन्नई, बैंगलोर</strong> और बीच के दर्जनों
                          शहरों तक फैली उपस्थिति तक — <strong>पांचालवेदा</strong> एक सच्चे अर्थों में
                          राष्ट्रीय ब्रांड बन चुका है। जो कभी एक ग्राहक तक पहुँचने में हफ्ते लगते थे,
                          अब वह कुछ ही दिनों में पहुँच जाता है। जो कभी एक स्थानीय रहस्य था, वह अब
                          भारत की विश्वसनीय नमकीन है।
                        </p>
                      </div>

                      <p>
                        हमारी पूरे भारत में यात्रा कुछ इस तरह सामने आई — शहर दर शहर, परिवार दर परिवार:
                      </p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🌱 फर्रुखाबाद से पहला कदम</strong>
                          हर विस्तार एक निर्णय से शुरू होता है। हमारे लिए वह निर्णय तब आया जब उत्तर
                          प्रदेश के बाहर से पहला ऑर्डर आया। दिल्ली के एक परिवार ने रिश्तेदार से हमारी
                          नमकीन के बारे में सुना था और उसे आज़माना चाहता था। उस एक ऑर्डर ने सब कुछ बदल
                          दिया। इसने हमें बताया कि हमारे स्वाद सिर्फ स्थानीय पसंद नहीं थे — उनमें
                          <strong> सार्वभौमिक आकर्षण</strong> था। हमें एहसास हुआ कि अगर दिल्ली का एक
                          परिवार हमारी नमकीन से प्यार कर सकता है, तो हजारों करेंगे। और वही विश्वास हमारी
                          पूरे भारत की यात्रा का बीज बना।
                        </li>

                        <li>
                          <strong>🏙️ मुंबई — सपनों का शहर, और हमारी पहली महानगर सफलता</strong>
                          मुंबई हमारी पहली बड़ी परीक्षा थी। यह शहर तेज़, मांग करने वाला और विकल्पों से
                          भरा हुआ है। यहाँ के परिवारों के पास हर चीज़ का सर्वश्रेष्ठ उपलब्ध है — इसलिए
                          उनका भरोसा जीतना आसान नहीं था। लेकिन जब पहली प्रतिक्रियाएँ आईं, तो वे
                          अभूतपूर्व थीं। ग्राहकों को हमारी <strong>कुरकुराहट, सुगंध और ईमानदार सामग्री</strong>
                          बहुत पसंद आई। मुंबई ने हमें सिखाया कि गुणवत्ता हमेशा जीतती है, चाहे आप कहीं
                          से भी आएँ। आज, अंधेरी से ठाणे तक, बांद्रा से बोरीवली तक, मुंबई के घरों में
                          हमारी नमकीन एक परिचित दृश्य है।
                        </li>

                        <li>
                          <strong>🏛️ दिल्ली एनसीआर — जहाँ परंपरा आधुनिकता से मिलती है</strong>
                          दिल्ली एक विशेष मील का पत्थर था। यह भारत की राजधानी है, और देश में स्नैक्स
                          के लिए सबसे प्रतिस्पर्धी बाजारों में से एक है। जब पांचालवेदा दिल्ली एनसीआर —
                          नोएडा, गुड़गांव, गाजियाबाद और फरीदाबाद सहित — में पहुँचा, तो हमारा खुले दिल
                          से स्वागत हुआ। यहाँ के परिवारों ने सराहा कि हमारी नमकीन
                          <strong> पारंपरिक भी है और हेल्दी भी</strong> — एक दुर्लभ संयोजन उस बाजार में
                          जहाँ बड़े पैमाने पर उत्पादित स्नैक्स का बोलबाला है। दिल्ली एनसीआर में हमारी
                          उपस्थिति ने हमें राष्ट्रीय कार्यक्रमों, एक्सपो और सरकारी मंचों जैसे
                          <strong> ODOP</strong> के और करीब पहुँचाया।
                        </li>

                        <li>
                          <strong>🎭 कोलकाता — पूर्व को जीतना</strong>
                          कोलकाता की भारत की सबसे विवेकपूर्ण खाद्य संस्कृतियों में से एक है। बंगाली
                          अपने स्वाद जानते हैं, और वे प्रामाणिकता से कम पर कभी समझौता नहीं करते। जब हम
                          कोलकाता पहुँचे, तो हम जानते थे कि हमें अपना सर्वश्रेष्ठ लाना होगा। और
                          प्रतिक्रिया हृदयस्पर्शी थी। ग्राहकों ने हमारी सामग्री की
                          <strong> शुद्धता</strong> और पारंपरिक भारतीय स्नैकिंग के
                          <strong> पुराने स्वाद</strong> की सराहना की। कोलकाता ने हमें सिखाया कि
                          प्रामाणिकता क्षेत्रीय सीमाओं से परे है — अच्छा खाना एक सार्वभौमिक भाषा
                          बोलता है।
                        </li>

                        <li>
                          <strong>🌴 चेन्नई — दक्षिण में उत्तर का स्वाद लाना</strong>
                          चेन्नई हमारा सबसे साहसी कदम था — एक ऐसे क्षेत्र में छलांग जहाँ की पाक
                          परंपराएँ बहुत अलग हैं। हमें कहा गया था कि दक्षिण भारत में हमारी नमकीन को
                          खरीदार नहीं मिलेंगे। लेकिन हमारे ग्राहकों ने संदेह करने वालों को गलत साबित
                          किया। चेन्नई के परिवारों ने उत्साह के साथ हमारी नमकीन को अपनाया, और कई लोगों
                          ने लिखा कि यह उन्हें उन पलों की याद दिलाती है जब उनके उत्तर भारतीय दोस्तों ने
                          उनके साथ स्नैक्स साझा किए थे। चेन्नई ने हमें दिखाया कि
                          <strong> भारत एक परिवार है</strong> — और अच्छा खाना हर दूरी को पाट देता है।
                        </li>

                        <li>
                          <strong>💻 बैंगलोर — भारत की टेक राजधानी को ऊर्जा देना</strong>
                          बैंगलोर सपने देखने वालों, करने वालों और मेहनती पेशेवरों का शहर है। यहाँ के
                          कई ग्राहक ऐसे युवा पेशेवर हैं जो पारंपरिक भारतीय नमकीन खाकर बड़े हुए हैं,
                          लेकिन अब प्रामाणिक विकल्प खोजने में कठिनाई होती है। पांचालवेदा उनका पसंदीदा
                          स्नैक बन गया — <strong>हेल्दी, ईमानदार, और घर के स्वाद से भरपूर</strong>।
                          बैंगलोर की तेज़ जीवनशैली ने हमें विश्वसनीय लॉजिस्टिक्स, समय पर डिलीवरी और
                          ताज़गी बनाए रखने वाली पैकेजिंग का महत्व भी सिखाया। आज, हमारी नमकीन फर्रुखाबाद
                          में बनने के कुछ ही दिनों में बैंगलोर पहुँच जाती है।
                        </li>

                        <li>
                          <strong>🛣️ महानगरों से आगे — टियर 2 और टियर 3 शहरों तक पहुँचना</strong>
                          सच्ची पूरे भारत की उपस्थिति सिर्फ बड़े शहरों के बारे में नहीं है। हमने छोटे
                          शहरों और गाँवों तक पहुँचने के लिए अथक प्रयास किया है — कानपुर, लखनऊ, आगरा,
                          वाराणसी, जयपुर, इंदौर, भोपाल, नागपुर, सूरत, अहमदाबाद और सैकड़ों अन्य जैसे
                          स्थानों तक। इनमें से कई शहरों में हमारी नमकीन अब एक घरेलू नाम है। यह विस्तार
                          विशेष रूप से सार्थक रहा है क्योंकि इसने हमें हमारी <strong>जड़ों</strong> के
                          और करीब लाया है — उन्हीं परिवारों के करीब जिन्होंने सबसे पहले हम पर विश्वास
                          किया था।
                        </li>

                        <li>
                          <strong>📦 देशव्यापी आपूर्ति श्रृंखला का निर्माण</strong>
                          विस्तार सिर्फ बेचने के बारे में नहीं है — यह <strong>सुरक्षित और लगातार
                          पहुँचने</strong> के बारे में है। वर्षों में, हमने पूरे भारत में विश्वसनीय
                          वितरकों, डिलीवरी साझेदारों और खुदरा दुकानों का नेटवर्क बनाया है। हमारी
                          पैकेजिंग को लंबी यात्राओं के लिए ताज़गी बनाए रखने के लिए फिर से डिज़ाइन किया
                          गया है। हमारी लॉजिस्टिक्स को अनुकूलित किया गया है ताकि चेन्नई का परिवार वही
                          ताज़गी प्राप्त करे जो फर्रुखाबाद का परिवार प्राप्त करता है। हमने जो भी सुधार
                          किया, वह एक लक्ष्य की सेवा में था — कि <strong>कोई भी भारतीय परिवार ईमानदार
                          नमकीन से बहुत दूर न हो</strong>।
                        </li>

                        <li>
                          <strong>❤️ हमारे लिए पूरे भारत का वास्तविक अर्थ</strong>
                          पूरे भारत में विस्तार सिर्फ एक व्यावसायिक उपलब्धि नहीं है — यह एक भावनात्मक
                          उपलब्धि है। इसका मतलब है कि कोलकाता की एक दादी वही नमकीन ऑर्डर कर सकती हैं
                          जो उनकी बेटी दिल्ली में पसंद करती है। इसका मतलब है कि बैंगलोर का एक छात्र
                          अपने दोस्तों के साथ अपने गृहनगर का स्वाद साझा कर सकता है। इसका मतलब है कि
                          मुंबई की एक माँ आखिरकार अपने बच्चों को ऐसा स्नैक दे सकती है जिसके बारे में
                          वह अच्छा महसूस करती है। हमारी हर डिलीवरी, हर शहर, एक छोटा प्रयास है
                          <strong> ईमानदार खाने के साझा प्यार पर भारत को एक साथ लाने का</strong>।
                        </li>
                      </ul>

                      <p>
                        लेकिन यह सिर्फ शुरुआत है। अभी भी सैकड़ों शहर हैं जहाँ हम नहीं पहुँचे हैं,
                        हजारों परिवार हैं जिन्होंने अभी हमारी नमकीन नहीं चखी है, और लाखों पल हैं जो
                        बनाए जाने बाकी हैं। हर राज्य जहाँ हम प्रवेश करते हैं, हर शहर जहाँ हम सेवा करते
                        हैं, हमें याद दिलाता है कि हमारा मिशन अभी खत्म नहीं हुआ है। हम हर दिन
                        पांचालवेदा को भारत के हर कोने में उपलब्ध कराने के लिए काम कर रहे हैं — क्योंकि
                        हम मानते हैं कि <strong>ईमानदार भारतीय स्नैकिंग का स्वाद विलासिता नहीं होना
                        चाहिए — यह एक अधिकार होना चाहिए</strong>।
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          जब हम कहते हैं कि हम एक पूरे भारत का ब्रांड हैं, तो हम इसका मतलब घमंड के
                          रूप में नहीं कहते। हम इसे एक <strong>जिम्मेदारी</strong> के रूप में कहते हैं
                          — कश्मीर से कन्याकुमारी तक, गुजरात से असम तक के हर परिवार से एक वादा — कि हम
                          उनकी सेवा उसी ईमानदारी, उसी गुणवत्ता और उसी प्यार से करते रहेंगे जिससे हमने
                          फर्रुखाबाद की एक छोटी रसोई में शुरुआत की थी।
                        </p>
                      </div>

                      <p>
                        हर शहर के हर ग्राहक को — <strong>आपने हमें अपने घर में स्वीकार करने के लिए
                        धन्यवाद</strong>। आप सिर्फ एक ग्राहक नहीं हैं; आप हमारी कहानी का हिस्सा हैं।
                        और हम वादा करते हैं — यात्रा तो अभी शुरू हुई है। 🌍🇮🇳
                      </p>
                    </>
                  )}

                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ===== 10,000+ HAPPY FAMILIES ===== */}
            {popup === "families" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">❤️</div>
                  <h1>{popupLanguage === "english" ? "10,000+ Happy Families" : "10,000+ खुश परिवार"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>

                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">
                        Numbers can be impressive. But there is one number that means more to us than
                        any award, any recognition, or any milestone — and that number is
                        <strong> 10,000</strong>. Not 10,000 customers. Not 10,000 orders.
                        <strong> 10,000 families</strong> who have welcomed us into their homes,
                        their kitchens, their celebrations, and their everyday lives. This is not
                        just a milestone. It is a <strong>relationship built on trust</strong> —
                        one family, one pack, one shared moment at a time.
                      </p>

                      <p>
                        When we started in <strong>2018</strong> in a small kitchen in Farrukhabad,
                        we never imagined this. We did not have a marketing team or a big budget.
                        What we had was a belief — that if we made namkeen the way our grandmothers
                        did, with <strong>honest ingredients and no shortcuts</strong>, families
                        would notice. And they did. Slowly at first. Then faster. And today, that
                        belief has grown into a family of over <strong>10,000 households</strong>
                        across India.
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🎉</span>
                        <p>
                          <strong>10,000+ families</strong> across India have made Panchalveda a
                          part of their daily lives. From the morning cup of chai to festive
                          celebrations, from children's tiffins to late-night cravings — our
                          namkeen has become a small but meaningful part of thousands of Indian
                          homes. Every one of those 10,000 families is a story we are honoured
                          to be a part of.
                        </p>
                      </div>

                      <p>
                        Here is what this milestone truly means to us — beyond the numbers:
                      </p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🏡 Every Family Is a Story</strong>
                          Behind the number 10,000, there are 10,000 different stories. A mother in
                          Jaipur who orders namkeen for her son's birthday party every year. A
                          grandmother in Varanasi who says our namkeen reminds her of her childhood.
                          A young couple in Bangalore who discovered us on their first Diwali
                          together. A father in Delhi who sends our packs to his daughter studying
                          abroad. Every order we receive carries a story — and we consider it a
                          privilege to be a small part of so many lives.
                        </li>

                        <li>
                          <strong>☕ The Chai-Time Companion</strong>
                          In India, chai is not just a drink — it is a ritual. It is where
                          conversations happen, where relationships grow, where laughter is shared.
                          And we are proud that our namkeen has become the <strong>chai-time
                          companion</strong> for thousands of families. Morning chai with the
                          newspaper. Evening chai with family. Chai with guests. Chai after dinner.
                          Our namkeen has quietly become part of these small, sacred moments.
                        </li>

                        <li>
                          <strong>🎊 Part of Your Celebrations</strong>
                          One of the most humbling things we hear is that Panchalveda has become a
                          part of your celebrations. Diwali. Holi. Raksha Bandhan. Weddings.
                          Anniversaries. Housewarmings. Baby showers. School events. Office parties.
                          Every time a family chooses our namkeen for a special occasion, they are
                          trusting us with a moment that matters. And we never take that trust
                          lightly.
                        </li>

                        <li>
                          <strong>👨‍👩‍👧 From One Generation to the Next</strong>
                          Perhaps the most meaningful thing we have witnessed is this — our
                          customers' children have grown up eating Panchalveda. Kids who tasted our
                          namkeen at age five are now asking for it by name. Families who ordered
                          from us when we were just a small local brand are still ordering from us
                          today. This kind of loyalty is not bought. It is earned — and we are
                          deeply grateful for it.
                        </li>

                        <li>
                          <strong>💌 Every Message and Review Matters</strong>
                          Every review we receive, every WhatsApp message we get, every phone call
                          we answer — we read them all. Some make us laugh. Some make us emotional.
                          Some remind us why we started this journey in the first place. A simple
                          <em> "Bahut tasty hai"</em> or <em>"Bachhon ko bahut pasand aaya"</em>
                          means more to us than any marketing metric ever could. Your words are
                          our fuel.
                        </li>

                        <li>
                          <strong>🌍 Across Cities, Across Cultures</strong>
                          Our 10,000+ families are spread across India — from Farrukhabad to
                          Mumbai, from Delhi to Chennai, from Kolkata to Bangalore, and hundreds
                          of smaller cities and towns in between. This is not just a geographic
                          milestone. It is proof that <strong>honest, traditional food has
                          universal appeal</strong>. Good taste does not need translation —
                          it speaks the same language in every home.
                        </li>

                        <li>
                          <strong>🤝 More Than Customers — Family</strong>
                          In many ways, our customers have become our extended family. They send
                          us feedback. They recommend us to friends and relatives. They ask us
                          about new products and new flavors. They celebrate our wins with us and
                          support us in difficult times. When we say "Panchalveda family," we do
                          not mean it as a marketing term. We mean it <strong>literally</strong>
                          — because that is what you have become to us.
                        </li>

                        <li>
                          <strong>📦 Every Pack, Delivered with Love</strong>
                          Somewhere between our kitchen in Farrukhabad and your home, there is a
                          journey. Our namkeen is made by hand, packed with care, and shipped with
                          hope — hope that it reaches you fresh, that it brings a smile to your
                          face, and that it becomes a small part of your family's story. Every
                          pack you open is a piece of our promise to you.
                        </li>

                        <li>
                          <strong>🙏 A Thank You We Cannot Fully Express</strong>
                          To every one of those 10,000+ families — <strong>thank you</strong>. Thank
                          you for trusting a small brand from Farrukhabad. Thank you for giving us
                          a place in your home and on your table. Thank you for every reorder,
                          every review, every recommendation. You have not just bought our namkeen
                          — you have become part of our journey. And we will never forget that.
                        </li>

                        <li>
                          <strong>🚀 The Next 10,000 and Beyond</strong>
                          Reaching 10,000 families is a milestone — but it is not a destination.
                          There are millions of families across India who have not yet tasted our
                          namkeen. Millions of homes we have not yet reached. Millions of
                          celebrations we have not yet been a part of. And we are working every
                          single day to change that. Because our mission was never about numbers —
                          it was about <strong>bringing honest, healthy, traditional Indian
                          snacking to every home in India</strong>. And that mission is far from
                          finished.
                        </li>
                      </ul>

                      <p>
                        We often sit back and think about what this journey means. It started with
                        a single recipe in a small kitchen. It grew because of a single family who
                        trusted us. And now, thousands of families later, we still wake up with the
                        same excitement we had on day one. Not because we have grown — but because
                        we have grown <strong>with you</strong>. And that is the most beautiful
                        thing of all.
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          We did not build a business. We built a <strong>family of 10,000+
                          households</strong>. Every pack of Panchalveda that leaves our kitchen
                          carries a simple promise — that we will always be honest, always be
                          traditional, and always be grateful for the trust you have placed in us.
                          Thank you for being part of our story. ❤️
                        </p>
                      </div>

                      <p>
                        Here's to the next milestone, the next celebration, and the next family
                        that welcomes us in. From all of us at <strong>Panchalveda</strong> —
                        <strong>thank you, and welcome to the family</strong>. 🌿❤️
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">
                        आंकड़े प्रभावशाली हो सकते हैं। लेकिन हमारे लिए एक संख्या किसी भी पुरस्कार,
                        किसी भी मान्यता, या किसी भी उपलब्धि से बढ़कर है — और वह संख्या है
                        <strong> 10,000</strong>। 10,000 ग्राहक नहीं। 10,000 ऑर्डर नहीं।
                        <strong> 10,000 परिवार</strong> जिन्होंने हमें अपने घरों, अपनी रसोइयों,
                        अपने उत्सवों और अपने रोज़मर्रा के जीवन में जगह दी है। यह सिर्फ एक उपलब्धि
                        नहीं है। यह <strong>भरोसे पर बना एक रिश्ता</strong> है — एक परिवार, एक पैक,
                        एक साझा पल एक बार में।
                      </p>

                      <p>
                        जब हमने <strong>2018</strong> में फर्रुखाबाद की एक छोटी रसोई में शुरुआत की,
                        तब हमने ऐसा कभी सोचा भी नहीं था। हमारे पास मार्केटिंग टीम या बड़ा बजट नहीं
                        था। हमारे पास जो था वो एक विश्वास था — कि अगर हम नमकीन उसी तरह बनाएँ जैसे
                        हमारी दादी-नानी बनाती थीं, <strong>ईमानदार सामग्री और बिना किसी शॉर्टकट के</strong>,
                        तो परिवार इसे पहचानेंगे। और उन्होंने पहचाना। पहले धीरे-धीरे। फिर तेज़ी से।
                        और आज, वह विश्वास भारत भर के <strong>10,000 से अधिक घरों</strong> के परिवार
                        में बदल चुका है।
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🎉</span>
                        <p>
                          भारत भर के <strong>10,000+ परिवारों</strong> ने पांचालवेदा को अपने दैनिक
                          जीवन का हिस्सा बनाया है। सुबह की चाय से लेकर त्योहारों के उत्सव तक,
                          बच्चों के टिफिन से लेकर देर रात की भूख तक — हमारी नमकीन हजारों भारतीय
                          घरों का एक छोटा लेकिन सार्थक हिस्सा बन चुकी है। उन सभी 10,000 परिवारों
                          में से हर एक एक कहानी है जिसका हिस्सा बनना हमारे लिए सम्मान की बात है।
                        </p>
                      </div>

                      <p>
                        इस उपलब्धि का हमारे लिए वास्तव में क्या अर्थ है — आंकड़ों से परे:
                      </p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>🏡 हर परिवार एक कहानी है</strong>
                          10,000 के आंकड़े के पीछे 10,000 अलग-अलग कहानियाँ हैं। जयपुर की एक माँ
                          जो हर साल अपने बेटे के जन्मदिन की पार्टी के लिए हमारी नमकीन ऑर्डर करती
                          है। वाराणसी की एक दादी जो कहती हैं कि हमारी नमकीन उन्हें उनके बचपन की
                          याद दिलाती है। बैंगलोर का एक युवा जोड़ा जिसने अपनी पहली दिवाली पर हमें
                          खोजा। दिल्ली के एक पिता जो विदेश में पढ़ रही अपनी बेटी को हमारे पैक
                          भेजते हैं। हमें मिलने वाला हर ऑर्डर एक कहानी लेकर आता है — और इतने सारे
                          जीवन का एक छोटा हिस्सा बनना हमारे लिए एक विशेषाधिकार है।
                        </li>

                        <li>
                          <strong>☕ चाय के समय का साथी</strong>
                          भारत में चाय सिर्फ एक पेय नहीं है — यह एक अनुष्ठान है। यहीं बातचीत होती
                          है, रिश्ते बढ़ते हैं, हँसी साझा होती है। और हमें गर्व है कि हमारी नमकीन
                          हजारों परिवारों के लिए <strong>चाय के समय का साथी</strong> बन गई है।
                          सुबह अखबार के साथ चाय। शाम को परिवार के साथ चाय। मेहमानों के साथ चाय।
                          खाने के बाद चाय। हमारी नमकीन चुपचाप इन छोटे, पवित्र पलों का हिस्सा बन
                          गई है।
                        </li>

                        <li>
                          <strong>🎊 आपके उत्सवों का हिस्सा</strong>
                          सबसे विनम्र बातों में से एक जो हम सुनते हैं वह यह है कि पांचालवेदा आपके
                          उत्सवों का हिस्सा बन गया है। दिवाली। होली। रक्षाबंधन। शादियाँ।
                          सालगिरह। गृहप्रवेश। मुंडन। स्कूल के कार्यक्रम। ऑफिस पार्टियाँ। हर बार
                          जब कोई परिवार किसी विशेष अवसर के लिए हमारी नमकीन चुनता है, तो वे हमें
                          एक ऐसा पल सौंपते हैं जो मायने रखता है। और हम उस भरोसे को कभी हल्के में
                          नहीं लेते।
                        </li>

                        <li>
                          <strong>👨‍👩‍👧 एक पीढ़ी से दूसरी पीढ़ी तक</strong>
                          शायद सबसे सार्थक बात जो हमने देखी है वह यह है — हमारे ग्राहकों के बच्चे
                          पांचालवेदा खाते हुए बड़े हुए हैं। जो बच्चे पाँच साल की उम्र में हमारी
                          नमकीन चखते थे, वे अब नाम लेकर इसे माँगते हैं। जो परिवार तब हमसे ऑर्डर
                          करते थे जब हम सिर्फ एक छोटा स्थानीय ब्रांड थे, वे आज भी हमसे ऑर्डर कर
                          रहे हैं। इस तरह की वफादारी खरीदी नहीं जाती। यह अर्जित की जाती है — और
                          हम इसके लिए हृदय से आभारी हैं।
                        </li>

                        <li>
                          <strong>💌 हर संदेश और समीक्षा मायने रखती है</strong>
                          हमें मिलने वाली हर समीक्षा, हर व्हाट्सएप संदेश, हर फोन कॉल — हम उन
                          सभी को पढ़ते हैं। कुछ हमें हँसाती हैं। कुछ हमें भावुक कर देती हैं। कुछ
                          हमें याद दिलाती हैं कि हमने यह यात्रा क्यों शुरू की थी। एक साधारण
                          <em> "बहुत टेस्टी है"</em> या <em>"बच्चों को बहुत पसंद आया"</em> हमारे
                          लिए किसी भी मार्केटिंग मेट्रिक से बढ़कर है। आपके शब्द हमारा ईंधन हैं।
                        </li>

                        <li>
                          <strong>🌍 शहरों में, संस्कृतियों में</strong>
                          हमारे 10,000+ परिवार भारत भर में फैले हुए हैं — फर्रुखाबाद से मुंबई
                          तक, दिल्ली से चेन्नई तक, कोलकाता से बैंगलोर तक, और बीच के सैकड़ों छोटे
                          शहरों और कस्बों तक। यह सिर्फ एक भौगोलिक उपलब्धि नहीं है। यह प्रमाण है
                          कि <strong>ईमानदार, पारंपरिक भोजन में सार्वभौमिक आकर्षण है</strong>।
                          अच्छे स्वाद को अनुवाद की जरूरत नहीं होती — यह हर घर में एक ही भाषा
                          बोलता है।
                        </li>

                        <li>
                          <strong>🤝 ग्राहकों से बढ़कर — परिवार</strong>
                          कई मायनों में, हमारे ग्राहक हमारा विस्तारित परिवार बन गए हैं। वे हमें
                          प्रतिक्रिया भेजते हैं। वे हमें दोस्तों और रिश्तेदारों को सुझाते हैं।
                          वे हमसे नए उत्पादों और नए स्वादों के बारे में पूछते हैं। वे हमारी जीत
                          में हमारे साथ जश्न मनाते हैं और कठिन समय में हमारा समर्थन करते हैं।
                          जब हम "पांचालवेदा परिवार" कहते हैं, तो हम इसे मार्केटिंग शब्द के रूप
                          में नहीं कहते। हम इसे <strong>सचमुच</strong> कहते हैं — क्योंकि आप
                          हमारे लिए यही बन गए हैं।
                        </li>

                        <li>
                          <strong>📦 हर पैक, प्यार से भेजा गया</strong>
                          फर्रुखाबाद की हमारी रसोई और आपके घर के बीच एक यात्रा है। हमारी नमकीन
                          हाथ से बनाई जाती है, सावधानी से पैक की जाती है, और उम्मीद के साथ भेजी
                          जाती है — उम्मीद है कि यह आप तक ताज़ा पहुँचेगी, आपके चेहरे पर मुस्कान
                          लाएगी, और आपके परिवार की कहानी का एक छोटा हिस्सा बनेगी। आप जो भी पैक
                          खोलते हैं, वह हमारे वादे का एक टुकड़ा है।
                        </li>

                        <li>
                          <strong>🙏 एक धन्यवाद जिसे हम पूरी तरह व्यक्त नहीं कर सकते</strong>
                          उन सभी 10,000+ परिवारों को — <strong>धन्यवाद</strong>। फर्रुखाबाद के
                          एक छोटे ब्रांड पर भरोसा करने के लिए धन्यवाद। हमें अपने घर और अपनी मेज
                          पर जगह देने के लिए धन्यवाद। हर दोबारा ऑर्डर, हर समीक्षा, हर सिफारिश के
                          लिए धन्यवाद। आपने सिर्फ हमारी नमकीन नहीं खरीदी — आप हमारी यात्रा का
                          हिस्सा बन गए हैं। और हम यह कभी नहीं भूलेंगे।
                        </li>

                        <li>
                          <strong>🚀 अगले 10,000 और उससे आगे</strong>
                          10,000 परिवारों तक पहुँचना एक उपलब्धि है — लेकिन यह मंज़िल नहीं है।
                          भारत भर में लाखों परिवार हैं जिन्होंने अभी हमारी नमकीन नहीं चखी है।
                          लाखों घर हैं जहाँ हम अभी नहीं पहुँचे हैं। लाखों उत्सव हैं जिनका हम
                          अभी हिस्सा नहीं बने हैं। और हम इसे बदलने के लिए हर दिन काम कर रहे हैं।
                          क्योंकि हमारा मिशन कभी आंकड़ों के बारे में नहीं था — यह
                          <strong> भारत के हर घर तक ईमानदार, हेल्दी, पारंपरिक भारतीय स्नैकिंग
                          पहुँचाने</strong> के बारे में था। और वह मिशन अभी खत्म नहीं हुआ है।
                        </li>
                      </ul>

                      <p>
                        हम अक्सर बैठकर सोचते हैं कि इस यात्रा का क्या अर्थ है। यह एक छोटी रसोई
                        में एक रेसिपी से शुरू हुई। यह एक परिवार के भरोसे से बढ़ी। और अब, हजारों
                        परिवारों के बाद, हम आज भी उसी उत्साह के साथ उठते हैं जो पहले दिन था। इसलिए
                        नहीं कि हम बढ़े हैं — बल्कि इसलिए कि हम
                        <strong> आपके साथ</strong> बढ़े हैं। और यही सबसे सुंदर बात है।
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          हमने व्यवसाय नहीं बनाया। हमने
                          <strong> 10,000+ घरों का परिवार</strong> बनाया। पांचालवेदा का हर पैक
                          जो हमारी रसोई से निकलता है, एक सरल वादा लेकर निकलता है — कि हम हमेशा
                          ईमानदार रहेंगे, हमेशा पारंपरिक रहेंगे, और आपके भरोसे के लिए हमेशा आभारी
                          रहेंगे। हमारी कहानी का हिस्सा बनने के लिए धन्यवाद। ❤️
                        </p>
                      </div>

                      <p>
                        अगली उपलब्धि, अगले उत्सव, और अगले परिवार के लिए जो हमें अपने घर में
                        स्वीकार करेगा — यही हमारी कामना है। <strong>पांचालवेदा</strong> की पूरी
                        टीम की ओर से — <strong>धन्यवाद, और परिवार में आपका स्वागत है</strong>।
                        🌿❤️
                      </p>
                    </>
                  )}

                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}







{popup === "achievements" && (
  <div className="pro-blog-content">
    <div className="pro-blog-header">
      <div className="pro-blog-icon">🏆</div>
      <h1>{popupLanguage === "english" ? "Our Achievements" : "हमारी उपलब्धियाँ"}</h1>
      <div className="pro-blog-divider"></div>
    </div>

    <div className="pro-blog-body">
      {popupLanguage === "english" ? (
        <>
          <p className="pro-blog-intro">
            Every brand has a story. Ours is written not in awards or numbers, but in the
            <strong> trust of thousands of families</strong> who have made <strong>Panchalveda</strong>
            a part of their homes, their celebrations, and their everyday moments. From a small
            kitchen in Farrukhabad to national stages and international recognition — our journey
            has been nothing short of extraordinary. And we are only getting started.
          </p>

          <p>
            When we began in <strong>2018</strong>, we had nothing but a recipe, a belief, and a
            deep love for the traditional Indian way of snacking. We did not have big budgets or
            fancy marketing. What we had was something far more valuable —
            <strong> honesty in every pack</strong>. And that honesty is what has carried us from
            a local kitchen to platforms where India showcases its finest products to the world.
          </p>

          <div className="pro-blog-highlight">
            <span className="pro-highlight-icon">🚀</span>
            <p>
              From a small kitchen in Farrukhabad to international expos and government-recognized
              platforms — <strong>Panchalveda</strong> has grown into a trusted name serving
              thousands of families across India. Every milestone we have achieved belongs not just
              to us, but to every customer who believed in us.
            </p>
          </div>

          <p>
            Here are some of the proudest moments of our journey so far:
          </p>

          <ul className="pro-blog-list">
            <li>
              <strong>🎉 2018 — The Beginning</strong>
              Panchalveda was born in a small kitchen in Farrukhabad, Uttar Pradesh, with a simple
              mission: to make namkeen that is as healthy as it is delicious. Every pack was made
              by hand, with groundnut oil, pure asafoetida, and fresh spices. There were no
              shortcuts, no compromises — just a family's love for real Indian food. What started
              as a humble effort soon became a name that families began to trust.
            </li>

            <li>
              <strong>🏅 2024 — The Noida Expo Breakthrough</strong>
              In 2024, we took <strong>Panchalveda</strong> to the Noida Expo — and the response
              was overwhelming. People from all walks of life visited our stall, tasted our namkeen,
              and walked away with smiles on their faces. The two things we heard again and again
              were: <em>"The taste is incredible"</em> and <em>"This actually feels healthy."</em>
              That feedback meant more to us than any trophy ever could. It confirmed that our
              belief — that taste and health can go hand in hand — was absolutely right. The Noida
              Expo was not just an event for us. It was the moment we realized that
              <strong>Panchalveda</strong> was ready for a much bigger stage.
            </li>

            <li>
              <strong>🇯🇵 2026 — ODOP & The Japanese Delegation</strong>
              In 2026, we reached a milestone that we had only dreamed of. <strong>Panchalveda</strong>
              was selected to be part of the <strong>One District One Product (ODOP)</strong>
              initiative by the Government of Uttar Pradesh — a prestigious platform that
              celebrates the finest products from every district of the state. As part of this,
              a <strong>delegation from Japan</strong> visited Lucknow and was hosted by
              <strong> Chief Minister Yogi Adityanath</strong> himself. Our product was proudly
              listed and showcased at this event, representing the rich snacking heritage of
              Farrukhabad on an international stage. It was a moment of immense pride — not just
              for our brand, but for our entire district and our state.
            </li>

            <li>
              <strong>🌍 Growing Trust Across India</strong>
              Today, <strong>Panchalveda</strong> is not just a Farrukhabad brand — it is a brand
              that families across India trust. From small towns to big cities, our namkeen is
              enjoyed in homes, at festivals, at gatherings, and in everyday moments. Thousands of
              families have made us a part of their lives, and that number continues to grow.
              Every new customer is not just a sale — they are a new member of the Panchalveda
              family.
            </li>

            <li>
              <strong>💚 Recognized for Preserving Tradition</strong>
              We have been recognized for our efforts to preserve and promote traditional Indian
              snacking heritage. In a world where snacks are increasingly made with cheap oils and
              chemical additives, we have stayed true to the old ways — groundnut oil, pure
              asafoetida, fresh spices, and honest preparation. This commitment to tradition has
              earned us respect not just from customers, but from industry experts and government
              bodies alike.
            </li>

            <li>
              <strong>❤️ The Achievement That Matters Most</strong>
              Of all the expos, recognitions, and platforms we have been part of, the achievement
              that matters most to us is something much simpler: the <strong>love and trust of
              our customers</strong>. Every message we receive, every family that reorders, every
              child who asks for "Panchalveda" by name — these are the real trophies. These
              are the moments that tell us we are on the right path.
            </li>
          </ul>

          <p>
            But we are far from done. Every milestone we have reached is not a destination — it is
            a stepping stone. The Noida Expo taught us that people want healthy snacks. The ODOP
            platform showed us that we can represent India on the world stage. The Japanese
            delegation reminded us that our flavors have the power to cross borders and win hearts.
            And the trust of thousands of families tells us that we have a responsibility to keep
            going — to keep improving, keep expanding, and keep bringing the taste of real India
            to more and more people.
          </p>

          <div className="pro-blog-quote">
            <span className="pro-quote-mark">"</span>
            <p>
              Our achievements are not just numbers on a page. They are the smiles of families
              who trust us. The pride of our district. The recognition of our state. And the
              promise of a future where <strong>Panchalveda</strong> stands as a symbol of
              healthy, honest, and truly Indian snacking — not just in India, but across the
              world.
            </p>
          </div>

          <p>
            To every customer, every well-wisher, and every family that has been part of this
            journey — <strong>thank you</strong>. You are the reason we wake up every morning
            with the same excitement we had on day one. The best is yet to come. 🏆
          </p>
        </>
      ) : (
        <>
          <p className="pro-blog-intro">
            हर ब्रांड की एक कहानी होती है। हमारी कहानी पुरस्कारों या आंकड़ों में नहीं, बल्कि
            <strong> उन हजारों परिवारों के भरोसे</strong> में लिखी गई है जिन्होंने
            <strong> पांचालवेदा</strong> को अपने घरों, अपने उत्सवों और अपने रोज़मर्रा के पलों
            का हिस्सा बनाया है। फर्रुखाबाद की एक छोटी रसोई से लेकर राष्ट्रीय मंचों और
            अंतर्राष्ट्रीय पहचान तक — हमारी यात्रा असाधारण से कम नहीं रही। और यह तो बस
            शुरुआत है।
          </p>

          <p>
            जब हमने <strong>2018</strong> में शुरुआत की थी, तब हमारे पास एक रेसिपी, एक विश्वास
            और पारंपरिक भारतीय तरीके से स्नैकिंग करने का गहरा प्यार था। हमारे पास बड़े बजट या
            भव्य मार्केटिंग नहीं थी। हमारे पास जो था वो इससे कहीं ज्यादा कीमती था —
            <strong> हर पैक में ईमानदारी</strong>। और यही ईमानदारी हमें एक स्थानीय रसोई से
            उन मंचों तक ले गई जहाँ भारत अपने बेहतरीन उत्पादों को दुनिया के सामने प्रस्तुत
            करता है।
          </p>

          <div className="pro-blog-highlight">
            <span className="pro-highlight-icon">🚀</span>
            <p>
              फर्रुखाबाद की एक छोटी रसोई से लेकर अंतर्राष्ट्रीय एक्सपो और सरकार द्वारा
              मान्यता प्राप्त मंचों तक — <strong>पांचालवेदा</strong> भारत भर के हजारों
              परिवारों की सेवा करने वाले एक विश्वसनीय नाम के रूप में विकसित हुआ है। हमारी हर
              उपलब्धि सिर्फ हमारी नहीं है, बल्कि हर उस ग्राहक की है जिसने हम पर विश्वास किया।
            </p>
          </div>

          <p>
            अब तक की यात्रा के कुछ गर्व के क्षण ये हैं:
          </p>

          <ul className="pro-blog-list">
            <li>
              <strong>🎉 2018 — शुरुआत</strong>
              पांचालवेदा का जन्म उत्तर प्रदेश के फर्रुखाबाद की एक छोटी रसोई में हुआ, एक सरल
              मिशन के साथ: ऐसी नमकीन बनाना जो स्वादिष्ट भी हो और हेल्दी भी। हर पैक हाथ से
              बनाया जाता था — मूंगफली तेल, शुद्ध हींग और ताज़े मसालों के साथ। कोई शॉर्टकट
              नहीं, कोई समझौता नहीं — बस असली भारतीय खाने के लिए एक परिवार का प्यार। जो एक
              छोटी कोशिश के रूप में शुरू हुआ, वह जल्द ही एक ऐसा नाम बन गया जिस पर परिवार
              भरोसा करने लगे।
            </li>

            <li>
              <strong>🏅 2024 — नोएडा एक्सपो की सफलता</strong>
              2024 में, हम <strong>पांचालवेदा</strong> को नोएडा एक्सपो में ले गए — और वहाँ
              प्रतिक्रिया शानदार रही। हर वर्ग के लोग हमारे स्टॉल पर आए, हमारी नमकीन चखी, और
              मुस्कान के साथ लौटे। दो बातें हमने बार-बार सुनीं: <em>"स्वाद लाजवाब है"</em>
              और <em>"यह वाकई हेल्दी लगती है।"</em> वह प्रतिक्रिया हमारे लिए किसी भी ट्रॉफी
              से बढ़कर थी। इसने पुष्टि की कि हमारा विश्वास — कि स्वाद और सेहत साथ-साथ चल
              सकते हैं — बिल्कुल सही था। नोएडा एक्सपो हमारे लिए सिर्फ एक कार्यक्रम नहीं था।
              यह वह क्षण था जब हमें एहसास हुआ कि <strong>पांचालवेदा</strong> एक बहुत बड़े
              मंच के लिए तैयार है।
            </li>

            <li>
              <strong>🇯🇵 2026 — ODOP और जापानी प्रतिनिधिमंडल</strong>
              2026 में, हमने एक ऐसा मील का पत्थर छुआ जिसका हमने सिर्फ सपना देखा था।
              <strong> पांचालवेदा</strong> को उत्तर प्रदेश सरकार की प्रतिष्ठित
              <strong> वन डिस्ट्रिक्ट वन प्रोडक्ट (ODOP)</strong> पहल का हिस्सा बनने के लिए
              चुना गया — एक ऐसा मंच जो राज्य के हर जिले के बेहतरीन उत्पादों का उत्सव मनाता
              है। इसी क्रम में, <strong>जापान से एक प्रतिनिधिमंडल</strong> लखनऊ आया, जिसकी
              मेजबानी स्वयं <strong>मुख्यमंत्री योगी आदित्यनाथ</strong> ने की। इस कार्यक्रम
              में हमारा उत्पाद गर्व से प्रदर्शित किया गया, जो अंतर्राष्ट्रीय मंच पर फर्रुखाबाद
              की समृद्ध स्नैकिंग विरासत का प्रतिनिधित्व कर रहा था। यह अपार गर्व का क्षण था —
              सिर्फ हमारे ब्रांड के लिए नहीं, बल्कि हमारे पूरे जिले और हमारे राज्य के लिए।
            </li>

            <li>
              <strong>🌍 भारत भर में बढ़ता भरोसा</strong>
              आज, <strong>पांचालवेदा</strong> सिर्फ फर्रुखाबाद का ब्रांड नहीं है — यह एक ऐसा
              ब्रांड है जिस पर भारत भर के परिवार भरोसा करते हैं। छोटे शहरों से लेकर बड़े
              महानगरों तक, हमारी नमकीन घरों में, त्योहारों पर, समारोहों में और रोज़मर्रा के
              पलों में आनंद ली जाती है। हजारों परिवारों ने हमें अपने जीवन का हिस्सा बनाया
              है, और यह संख्या लगातार बढ़ रही है। हर नया ग्राहक सिर्फ एक बिक्री नहीं है —
              वह पांचालवेदा परिवार का एक नया सदस्य है।
            </li>

            <li>
              <strong>💚 परंपरा के संरक्षण के लिए मान्यता</strong>
              पारंपरिक भारतीय स्नैकिंग विरासत को संरक्षित और बढ़ावा देने के हमारे प्रयासों
              के लिए हमें मान्यता मिली है। एक ऐसी दुनिया में जहाँ स्नैक्स तेजी से सस्ते तेल
              और केमिकल एडिटिव्स से बनाए जा रहे हैं, हम पुराने तरीकों के प्रति सच्चे रहे हैं
              — मूंगफली तेल, शुद्ध हींग, ताज़े मसाले और ईमानदार तैयारी। परंपरा के प्रति यह
              प्रतिबद्धता हमें सिर्फ ग्राहकों से ही नहीं, बल्कि उद्योग विशेषज्ञों और सरकारी
              निकायों से भी सम्मान दिलाई है।
            </li>

            <li>
              <strong>❤️ वो उपलब्धि जो सबसे ज्यादा मायने रखती है</strong>
              सभी एक्सपो, मान्यताओं और मंचों में से, जो उपलब्धि हमारे लिए सबसे ज्यादा मायने
              रखती है वह कुछ बहुत सरल है: हमारे <strong>ग्राहकों का प्यार और भरोसा</strong>।
              हर संदेश जो हमें मिलता है, हर परिवार जो दोबारा ऑर्डर करता है, हर बच्चा जो
              नाम लेकर "पांचालवेदा" माँगता है — ये असली ट्रॉफियाँ हैं। ये वो क्षण हैं
              जो हमें बताते हैं कि हम सही रास्ते पर हैं।
            </li>
          </ul>

          <p>
            लेकिन हम अभी बहुत दूर हैं। हर मील का पत्थर जो हमने छुआ है, वह मंज़िल नहीं — वह
            एक सीढ़ी है। नोएडा एक्सपो ने हमें सिखाया कि लोग हेल्दी स्नैक्स चाहते हैं। ODOP
            मंच ने हमें दिखाया कि हम विश्व मंच पर भारत का प्रतिनिधित्व कर सकते हैं। जापानी
            प्रतिनिधिमंडल ने हमें याद दिलाया कि हमारे स्वाद सीमाओं को पार करके दिल जीतने
            की ताकत रखते हैं। और हजारों परिवारों का भरोसा हमें बताता है कि हमारी एक
            जिम्मेदारी है — आगे बढ़ते रहने की, बेहतर होते रहने की, और असली भारत का स्वाद
            और ज्यादा लोगों तक पहुँचाने की।
          </p>

          <div className="pro-blog-quote">
            <span className="pro-quote-mark">"</span>
            <p>
              हमारी उपलब्धियाँ सिर्फ पन्नों पर लिखे आंकड़े नहीं हैं। वे उन परिवारों की
              मुस्कान हैं जो हम पर भरोसा करते हैं। हमारे जिले का गर्व हैं। हमारे राज्य की
              मान्यता हैं। और एक ऐसे भविष्य का वादा हैं जहाँ <strong>पांचालवेदा </strong>
              हेल्दी, ईमानदार और सच्चे भारतीय स्नैकिंग का प्रतीक बनेगा — सिर्फ भारत में नहीं,
              बल्कि पूरी दुनिया में।
            </p>
          </div>

          <p>
            हर ग्राहक, हर शुभचिंतक और इस यात्रा का हिस्सा बने हर परिवार को —
            <strong> धन्यवाद</strong>। आप ही वजह हैं कि हम हर सुबह उसी उत्साह के साथ उठते
            हैं जो पहले दिन था। सबसे अच्छा अभी आना बाकी है। 🏆
          </p>
        </>
      )}

      <div className="pro-comment-form">
        <h3>💬 Share Your Thoughts</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleFormChange}
              className={formError && !formData.name ? "error" : ""}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleFormChange}
              className={formError && !formData.phone ? "error" : ""}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleFormChange}
              className={formError && !formData.email ? "error" : ""}
            />
          </div>
          <div className="form-group">
            <textarea
              name="comment"
              placeholder="Write your comment here... *"
              rows="4"
              value={formData.comment}
              onChange={handleFormChange}
              className={formError && !formData.comment ? "error" : ""}
            ></textarea>
          </div>
          {formError && <p className="form-error">{formError}</p>}
          <button type="submit" className="form-submit-btn">
            <span>📤</span> Send via WhatsApp
          </button>
          <p className="form-note">Your comment will be sent to us via WhatsApp</p>
        </form>
      </div>
    </div>
  </div>
)}




            {/* ===== HERITAGE RECOGNITION ===== */}
            {popup === "heritage" && (
              <div className="pro-blog-content">
                <div className="pro-blog-header">
                  <div className="pro-blog-icon">🏛️</div>
                  <h1>{popupLanguage === "english" ? "Heritage Recognition" : "विरासत की मान्यता"}</h1>
                  <div className="pro-blog-divider"></div>
                </div>

                <div className="pro-blog-body">
                  {popupLanguage === "english" ? (
                    <>
                      <p className="pro-blog-intro">
                        In a world that is rushing forward, there are some things that deserve to be
                        protected. Recipes that were perfected over generations. Flavors that carry
                        the memory of a grandmother's kitchen. Traditions that remind us who we are
                        and where we came from. At <strong>Panchalveda</strong>, we have always
                        believed that these traditions are not just worth preserving — they are
                        <strong> worth celebrating</strong>. And it is a matter of immense pride
                        that our commitment to this belief has been
                        <strong> recognized by culinary experts and heritage food enthusiasts
                        across India</strong>.
                      </p>

                      <p>
                        This recognition is not just an award or a certificate. It is an
                        acknowledgment that the path we chose — the harder path, the slower path,
                        the path of <strong>honest ingredients and traditional methods</strong> —
                        was the right one. In an era where snacks are increasingly made with cheap
                        refined oils, artificial flavors, and chemical preservatives, we chose to
                        stay true to the old ways. And today, that choice has earned us something
                        more valuable than any marketing campaign could ever buy —
                        <strong> respect</strong>.
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🏅</span>
                        <p>
                          <strong>Panchalveda</strong> has been recognized as a
                          <strong> preserver of traditional Indian snacking heritage</strong> and
                          a symbol of culinary excellence. This recognition comes from culinary
                          experts, food historians, and heritage food enthusiasts who see in our
                          products not just snacks, but a <strong>living link to India's rich food
                          traditions</strong>.
                        </p>
                      </div>

                      <p>
                        Here is what this recognition truly means to us — and what it stands for:
                      </p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>📜 Recipes Passed Down Through Generations</strong>
                          The recipes we use at Panchalveda are not inventions of a marketing team.
                          They are <strong>living traditions</strong> — passed down through
                          generations of Indian families. The proportions of spices, the timing of
                          roasting, the choice of oil, the way asafoetida is blended — these are
                          not details we learned from a textbook. They are details we inherited
                          from the kitchens of our mothers and grandmothers. Every pack of
                          Panchalveda carries forward a tradition that is centuries old.
                        </li>

                        <li>
                          <strong>🌾 Honoring the Ingredients of the Past</strong>
                          Traditional Indian snacking was built on simple, honest ingredients —
                          <strong>groundnut oil, pure asafoetida, fresh spices, and hand-picked
                          grains</strong>. These were the ingredients that made our ancestors'
                          namkeen so beloved. And these are the very ingredients we still use
                          today. We have not switched to cheaper alternatives. We have not
                          compromised on quality for the sake of profit. We have stayed true to
                          the ingredients that defined an entire era of Indian snacking.
                        </li>

                        <li>
                          <strong>🍳 Methods That Machines Cannot Replicate</strong>
                          There is a difference between namkeen that is mass-produced in a factory
                          and namkeen that is made by hand with care. The <strong>small batch
                          preparation, the hand-mixed spices, the slow roasting</strong> — these
                          are methods that machines simply cannot replicate. And it is precisely
                          these methods that have earned us the recognition we have today.
                          Culinary experts recognize that what we do cannot be automated. It can
                          only be honored.
                        </li>

                        <li>
                          <strong>🏛️ A Living Museum of Indian Flavors</strong>
                          In many ways, Panchalveda has become a <strong>living museum of
                          traditional Indian snacking</strong>. Every product we make is a
                          snapshot of a time when snacks were made with love, not formulas. When
                          food was nourishing, not just filling. When flavors were authentic, not
                          artificial. Our recognition as a heritage preserver is a recognition of
                          this — that we are keeping alive something that would otherwise be
                          lost to the rush of modernization.
                        </li>

                        <li>
                          <strong>👨‍🍳 Endorsed by Culinary Experts</strong>
                          The recognition we have received is not self-proclaimed. It comes from
                          <strong> chefs, food critics, culinary historians, and heritage food
                          enthusiasts</strong> — people who understand Indian food deeply and
                          who have tasted the difference between authentic and artificial. Their
                          endorsement means more to us than any advertisement ever could, because
                          they judge us not by our marketing, but by our food.
                        </li>

                        <li>
                          <strong>📰 Featured on Heritage Food Platforms</strong>
                          Our journey of preserving tradition has been featured on various
                          <strong> heritage food platforms, culinary blogs, and food history
                          forums</strong>. These platforms are dedicated to documenting and
                          celebrating India's vast culinary heritage — and being included among
                          the names they recognize is a matter of immense pride for a small brand
                          from Farrukhabad.
                        </li>

                        <li>
                          <strong>🌍 Representing Farrukhabad & Uttar Pradesh</strong>
                          Our recognition is not just about Panchalveda — it is about
                          <strong> Farrukhabad</strong>, the district that gave us our roots,
                          and <strong> Uttar Pradesh</strong>, the state that has been home to
                          some of India's most celebrated culinary traditions. When we are
                          recognized, we carry the pride of our entire region with us. This
                          recognition belongs as much to our community as it does to us.
                        </li>

                        <li>
                          <strong>🔄 Tradition + Innovation — The Balance We Strike</strong>
                          Heritage recognition does not mean we are stuck in the past. We honor
                          tradition while also <strong>embracing thoughtful innovation</strong>.
                          We have improved packaging to keep our namkeen fresher for longer. We
                          have introduced new flavors that speak to modern palates while
                          remaining rooted in tradition. We have expanded our reach so that
                          more families can experience what honest Indian snacking tastes like.
                          This balance — between honoring the past and embracing the future —
                          is what makes us unique.
                        </li>

                        <li>
                          <strong>👵 A Tribute to Our Elders</strong>
                          Every time we receive recognition for preserving heritage, we think
                          of the people who taught us. Our grandmothers. Our mothers. The
                          generations of Indian women who perfected these recipes over
                          centuries without ever receiving credit for them. This recognition is
                          a small tribute to them — and a promise that we will continue to
                          honor their legacy in everything we make.
                        </li>

                        <li>
                          <strong>🌱 A Responsibility, Not Just an Achievement</strong>
                          Recognition is not a destination — it is a
                          <strong> responsibility</strong>. Now that we have been recognized as
                          preservers of heritage, we feel an even greater duty to live up to
                          that title. Every pack we make must meet the standard that our
                          recognition demands. Every recipe we create must honor the traditions
                          that came before us. Every decision we make must be worthy of the
                          trust that has been placed in us. This is not just an achievement —
                          it is a commitment for life.
                        </li>
                      </ul>

                      <p>
                        We often think about what heritage really means. Heritage is not just
                        about old things — it is about <strong>living things</strong>. It is
                        about traditions that continue to breathe, that continue to be passed
                        on, that continue to bring joy to new generations. Heritage is not
                        something we preserve in a museum. It is something we preserve
                        <strong> on every plate, in every home, in every moment of shared
                        food</strong>. And that is exactly what Panchalveda does.
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          Recognition is not something we chased. It came to us because we
                          chose to do things the right way — even when the right way was the
                          harder way. Our heritage is not a marketing tool. It is our
                          <strong> identity</strong>. And we will continue to protect it,
                          honor it, and share it with every Indian family that welcomes us
                          into their home.
                        </p>
                      </div>

                      <p>
                        To every culinary expert, food historian, and heritage enthusiast who
                        has recognized our efforts — <strong>thank you</strong>. And to every
                        customer who has tasted the difference — thank you for being the
                        reason we keep going. The traditions we carry are not ours alone.
                        They belong to all of us. And we are proud to be one of the hands
                        that keeps them alive. 🏛️🌿
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="pro-blog-intro">
                        एक ऐसी दुनिया में जो तेज़ी से आगे बढ़ रही है, कुछ चीज़ें हैं जो संरक्षित
                        किए जाने के योग्य हैं। ऐसी रेसिपीज जो पीढ़ियों से निखारी गई हैं। ऐसे स्वाद
                        जो दादी की रसोई की यादें लेकर चलते हैं। ऐसी परंपराएँ जो हमें याद दिलाती हैं
                        कि हम कौन हैं और कहाँ से आए हैं। <strong>पांचालवेदा</strong> में, हमने हमेशा
                        माना है कि ये परंपराएँ सिर्फ संरक्षित करने योग्य नहीं हैं — ये
                        <strong> उत्सव मनाने योग्य</strong> हैं। और यह अपार गर्व की बात है कि इस
                        विश्वास के प्रति हमारी प्रतिबद्धता को
                        <strong> भारत भर के पाक विशेषज्ञों और विरासत खाद्य प्रेमियों द्वारा
                        मान्यता मिली है</strong>।
                      </p>

                      <p>
                        यह मान्यता सिर्फ एक पुरस्कार या प्रमाणपत्र नहीं है। यह इस बात की स्वीकृति
                        है कि हमने जो रास्ता चुना — कठिन रास्ता, धीमा रास्ता,
                        <strong> ईमानदार सामग्री और पारंपरिक तरीकों का रास्ता</strong> — वह सही
                        था। एक ऐसे युग में जहाँ स्नैक्स तेजी से सस्ते रिफाइंड तेल, कृत्रिम स्वाद
                        और रासायनिक प्रिज़र्वेटिव्स से बनाए जा रहे हैं, हमने पुराने तरीकों के प्रति
                        सच्चे रहना चुना। और आज, उस चुनाव ने हमें किसी भी मार्केटिंग अभियान से कहीं
                        ज्यादा कीमती चीज़ दिलाई है — <strong>सम्मान</strong>।
                      </p>

                      <div className="pro-blog-highlight">
                        <span className="pro-highlight-icon">🏅</span>
                        <p>
                          <strong>पांचालवेदा</strong> को
                          <strong> पारंपरिक भारतीय स्नैकिंग विरासत के संरक्षक</strong> और पाक
                          उत्कृष्टता के प्रतीक के रूप में मान्यता मिली है। यह मान्यता उन पाक
                          विशेषज्ञों, खाद्य इतिहासकारों और विरासत खाद्य प्रेमियों से आई है जो
                          हमारे उत्पादों में सिर्फ स्नैक्स नहीं, बल्कि
                          <strong> भारत की समृद्ध खाद्य परंपराओं से एक जीवंत कड़ी</strong> देखते
                          हैं।
                        </p>
                      </div>

                      <p>
                        यह मान्यता हमारे लिए वास्तव में क्या मायने रखती है — और यह किस बात का
                        प्रतीक है:
                      </p>

                      <ul className="pro-blog-list">
                        <li>
                          <strong>📜 पीढ़ियों से चली आ रही रेसिपीज</strong>
                          पांचालवेदा में हम जो रेसिपीज इस्तेमाल करते हैं वे किसी मार्केटिंग टीम
                          के आविष्कार नहीं हैं। वे <strong>जीवित परंपराएँ</strong> हैं — जो
                          भारतीय परिवारों की पीढ़ियों से चली आ रही हैं। मसालों का अनुपात, भूनने
                          का समय, तेल का चुनाव, हींग को मिलाने का तरीका — ये ऐसी बारीकियाँ नहीं
                          हैं जो हमने किसी किताब से सीखी हैं। ये वो बारीकियाँ हैं जो हमें अपनी
                          माँओं और दादी-नानी की रसोइयों से विरासत में मिली हैं। पांचालवेदा का हर
                          पैक एक ऐसी परंपरा को आगे बढ़ाता है जो सदियों पुरानी है।
                        </li>

                        <li>
                          <strong>🌾 अतीत की सामग्री का सम्मान</strong>
                          पारंपरिक भारतीय स्नैकिंग सरल, ईमानदार सामग्री पर बनी थी —
                          <strong> मूंगफली तेल, शुद्ध हींग, ताज़े मसाले, और हाथ से चुने हुए
                          अनाज</strong>। यही सामग्री थी जिसने हमारे पूर्वजों की नमकीन को इतना
                          प्यारा बनाया। और यही सामग्री है जो हम आज भी उपयोग करते हैं। हमने सस्ते
                          विकल्पों पर स्विच नहीं किया है। हमने मुनाफे के लिए गुणवत्ता से समझौता
                          नहीं किया है। हम उन सामग्रियों के प्रति सच्चे रहे हैं जिन्होंने भारतीय
                          स्नैकिंग के एक पूरे युग को परिभाषित किया।
                        </li>

                        <li>
                          <strong>🍳 ऐसे तरीके जिन्हें मशीनें दोहरा नहीं सकतीं</strong>
                          फैक्ट्री में बड़े पैमाने पर बनी नमकीन और प्यार से हाथ से बनी नमकीन में
                          फर्क होता है। <strong>छोटे बैच में तैयारी, हाथ से मिलाए मसाले, धीमी
                          भूनाई</strong> — ये ऐसे तरीके हैं जिन्हें मशीनें दोहरा ही नहीं सकतीं।
                          और यही तरीके हैं जिन्होंने हमें आज की मान्यता दिलाई है। पाक विशेषज्ञ
                          मानते हैं कि जो हम करते हैं उसे स्वचालित नहीं किया जा सकता। उसे सिर्फ
                          सम्मान दिया जा सकता है।
                        </li>

                        <li>
                          <strong>🏛️ भारतीय स्वादों का जीवंत संग्रहालय</strong>
                          कई मायनों में, पांचालवेदा
                          <strong> पारंपरिक भारतीय स्नैकिंग का जीवंत संग्रहालय</strong> बन गया
                          है। हम जो भी उत्पाद बनाते हैं वह उस समय की एक झलक है जब स्नैक्स प्यार
                          से बनाए जाते थे, फॉर्मूले से नहीं। जब खाना सिर्फ पेट भरने वाला नहीं,
                          पोषण देने वाला था। जब स्वाद असली थे, कृत्रिम नहीं। विरासत संरक्षक के
                          रूप में हमारी मान्यता इस बात की मान्यता है — कि हम उस चीज़ को जीवित
                          रख रहे हैं जो आधुनिकीकरण की दौड़ में खो जाती।
                        </li>

                        <li>
                          <strong>👨‍🍳 पाक विशेषज्ञों द्वारा प्रमाणित</strong>
                          हमें जो मान्यता मिली है वह स्वयं-घोषित नहीं है। यह
                          <strong> शेफ, खाद्य समीक्षक, पाक इतिहासकार और विरासत खाद्य
                          प्रेमियों</strong> से आती है — ऐसे लोग जो भारतीय भोजन को गहराई से
                          समझते हैं और जिन्होंने असली और कृत्रिम के बीच का अंतर चखा है। उनका
                          समर्थन हमारे लिए किसी भी विज्ञापन से बढ़कर है, क्योंकि वे हमें हमारी
                          मार्केटिंग से नहीं, हमारे खाने से आँकते हैं।
                        </li>

                        <li>
                          <strong>📰 विरासत खाद्य मंचों पर प्रदर्शित</strong>
                          परंपरा को संरक्षित करने की हमारी यात्रा को विभिन्न
                          <strong> विरासत खाद्य मंचों, पाक ब्लॉगों और खाद्य इतिहास फोरमों</strong>
                          पर प्रदर्शित किया गया है। ये मंच भारत की विशाल पाक विरासत को प्रलेखित
                          और मनाने के लिए समर्पित हैं — और फर्रुखाबाद के एक छोटे ब्रांड का उन
                          नामों में शामिल होना जिन्हें वे मान्यता देते हैं, अपार गर्व की बात है।
                        </li>

                        <li>
                          <strong>🌍 फर्रुखाबाद और उत्तर प्रदेश का प्रतिनिधित्व</strong>
                          हमारी मान्यता सिर्फ पांचालवेदा के बारे में नहीं है — यह
                          <strong> फर्रुखाबाद</strong> के बारे में है, वह जिला जिसने हमें जड़ें
                          दीं, और <strong>उत्तर प्रदेश</strong> के बारे में है, वह राज्य जो भारत
                          की कुछ सबसे प्रसिद्ध पाक परंपराओं का घर रहा है। जब हमें मान्यता मिलती
                          है, तो हम अपने पूरे क्षेत्र का गर्व अपने साथ लेकर चलते हैं। यह मान्यता
                          उतनी ही हमारे समुदाय की है जितनी हमारी।
                        </li>

                        <li>
                          <strong>🔄 परंपरा + नवाचार — हमारा संतुलन</strong>
                          विरासत की मान्यता का मतलब यह नहीं है कि हम अतीत में अटके हुए हैं। हम
                          परंपरा का सम्मान करते हैं और साथ ही
                          <strong> विचारशील नवाचार को अपनाते हैं</strong>। हमने पैकेजिंग को बेहतर
                          किया है ताकि हमारी नमकीन ज्यादा देर तक ताज़ा रहे। हमने नए स्वाद पेश किए
                          हैं जो आधुनिक स्वाद से बात करते हैं लेकिन परंपरा में निहित हैं। हमने
                          अपनी पहुँच का विस्तार किया है ताकि अधिक परिवार अनुभव कर सकें कि ईमानदार
                          भारतीय स्नैकिंग कैसी होती है। यह संतुलन — अतीत का सम्मान और भविष्य को
                          अपनाना — हमें अनोखा बनाता है।
                        </li>

                        <li>
                          <strong>👵 हमारे बड़ों को श्रद्धांजलि</strong>
                          हर बार जब हमें विरासत संरक्षण के लिए मान्यता मिलती है, तो हम उन लोगों
                          के बारे में सोचते हैं जिन्होंने हमें सिखाया। हमारी दादी-नानी। हमारी
                          माँएँ। भारतीय महिलाओं की वे पीढ़ियाँ जिन्होंने सदियों में इन रेसिपीज को
                          निखारा बिना कभी इसका श्रेय पाए। यह मान्यता उनके लिए एक छोटी श्रद्धांजलि
                          है — और एक वादा कि हम अपनी हर रचना में उनकी विरासत का सम्मान करते
                          रहेंगे।
                        </li>

                        <li>
                          <strong>🌱 एक जिम्मेदारी, सिर्फ एक उपलब्धि नहीं</strong>
                          मान्यता मंज़िल नहीं है — यह एक <strong>जिम्मेदारी</strong> है। अब जब
                          हमें विरासत के संरक्षक के रूप में मान्यता मिली है, तो हम इस उपाधि के
                          योग्य बने रहने का और भी बड़ा कर्तव्य महसूस करते हैं। हमारा हर पैक उस
                          मानक को पूरा करना चाहिए जिसकी मान्यता मांग करती है। हमारी हर रेसिपी उन
                          परंपराओं का सम्मान करनी चाहिए जो हमसे पहले आईं। हमारा हर निर्णय उस
                          भरोसे के योग्य होना चाहिए जो हम पर रखा गया है। यह सिर्फ एक उपलब्धि
                          नहीं है — यह जीवन भर की प्रतिबद्धता है।
                        </li>
                      </ul>

                      <p>
                        हम अक्सर सोचते हैं कि विरासत का वास्तव में क्या अर्थ है। विरासत सिर्फ
                        पुरानी चीज़ों के बारे में नहीं है — यह <strong>जीवित चीज़ों</strong> के
                        बारे में है। यह उन परंपराओं के बारे में है जो साँस लेती रहती हैं, जो आगे
                        बढ़ती रहती हैं, जो नई पीढ़ियों को खुशी देती रहती हैं। विरासत वह चीज़ नहीं
                        है जिसे हम संग्रहालय में सहेजते हैं। यह वह चीज़ है जिसे हम
                        <strong> हर थाली पर, हर घर में, साझा भोजन के हर पल में</strong> सहेजते
                        हैं। और यही पांचालवेदा करता है।
                      </p>

                      <div className="pro-blog-quote">
                        <span className="pro-quote-mark">"</span>
                        <p>
                          मान्यता वह चीज़ नहीं है जिसके पीछे हम भागे। यह हमारे पास आई क्योंकि
                          हमने चीज़ें सही तरीके से करना चुना — तब भी जब सही तरीका कठिन तरीका था।
                          हमारी विरासत कोई मार्केटिंग उपकरण नहीं है। यह हमारी
                          <strong> पहचान</strong> है। और हम इसे संरक्षित करते रहेंगे, इसका
                          सम्मान करते रहेंगे, और हर उस भारतीय परिवार के साथ साझा करते रहेंगे
                          जो हमें अपने घर में स्वीकार करता है।
                        </p>
                      </div>

                      <p>
                        हर उस पाक विशेषज्ञ, खाद्य इतिहासकार और विरासत प्रेमी को जिसने हमारे
                        प्रयासों को मान्यता दी — <strong>धन्यवाद</strong>। और हर उस ग्राहक को
                        जिसने अंतर चखा — धन्यवाद कि आप हमारे चलते रहने का कारण हैं। हम जो
                        परंपराएँ लेकर चलते हैं वे सिर्फ हमारी नहीं हैं। वे हम सबकी हैं। और हमें
                        गर्व है कि हम उन्हें जीवित रखने वाले हाथों में से एक हैं। 🏛️🌿
                      </p>
                    </>
                  )}

                  <div className="pro-comment-form">
                    <h3>💬 Share Your Thoughts</h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleFormChange}
                          className={formError && !formData.name ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className={formError && !formData.phone ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={formError && !formData.email ? "error" : ""}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="comment"
                          placeholder="Write your comment here... *"
                          rows="4"
                          value={formData.comment}
                          onChange={handleFormChange}
                          className={formError && !formData.comment ? "error" : ""}
                        ></textarea>
                      </div>
                      {formError && <p className="form-error">{formError}</p>}
                      <button type="submit" className="form-submit-btn">
                        <span>📤</span> Send via WhatsApp
                      </button>
                      <p className="form-note">Your comment will be sent to us via WhatsApp</p>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className="pro-popup-footer">
              <button className="pro-back-btn" onClick={closePopup}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to About
              </button>
            </div>
          </div>
        </div>
      )}



            {/* ========== FAQ SECTION ========== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">❓ Questions</span>
            <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Everything you need to know about our products and our journey
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}





