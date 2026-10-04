import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Homepic from './assets/HomePic.png';
import sembeej from './assets/SemBeej.png';
import paneerbhujiya from './assets/PaneerBhujiya.png';
import gadbad from './assets/Gadbad.png';
import pic2 from './assets/pic2.jpeg';
import pic3 from './assets/pic3.jpeg';
import pic4 from './assets/pic4.jpeg';
import pic5 from './assets/pic5.jpeg';
import pic6 from './assets/pic6.jpeg';
import Japan2 from './assets/Japan2.jpeg';
import Noidaexpo from './assets/Noidaexpo.jpeg';
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  // ===== GALLERY STATE =====
  const galleryImages = [Noidaexpo, Japan2, pic2, pic3, pic5, pic6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = [
    { id: 1, title: "Making Our Flavours Meet the World", description: "In 2024, our team proudly participated in the Noida Expo, where we set up our own stall to showcase and market our authentic range of namkeens and traditional snacks.", location: "India Expo - Noida, UP", category: "Stall", image: Noidaexpo },
    { id: 2, title: "Sharing the Taste of Uttar Pradesh with Japan", description: "In 2026, a Japanese delegation visited Uttar Pradesh as part of the One District One Product (ODOP) initiative. We were honoured to be part of this special occasion in Lucknow, where we presented our traditional range of namkeens and snacks to the delegation.", location: "Lucknow, UP", category: "Ingredients", image: Japan2 },
    { id: 3, title: "Our Stall at Noida Expo 2024", description: "In 2024, our team proudly participated in the Noida Expo, where we set up a dedicated stall to showcase our authentic range of namkeens and traditional snacks.", location: "Noida-Expo, UP", category: "Expo", image: pic2 },
    { id: 4, title: "A Taste of Tradition", description: "Our range of authentic namkeens and traditional snacks, carefully prepared to bring the rich and familiar flavours of Uttar Pradesh to every bite.", location: "Noida, UP", category: "Products", image: pic3 },
    { id: 5, title: "Moments with Our Visitors", description: "Our journey is made special by the people who stop by, discover our products, and experience our authentic flavours. These pictures capture some of the memorable moments we shared with visitors, customers, and food enthusiasts at our exhibitions and events.", location: "Noida, UP", category: "Visiters", image: pic5 },
    { id: 6, title: "Connecting Through Taste", description: "Every tasting is an opportunity to create a connection. From curious visitors discovering our flavours for the first time to customers sharing their appreciation, these moments reflect the joy our products bring to people.", location: "Noida, UP", category: "Happy Customers", image: pic6 }
  ];

  // ===== POPUP STATE =====
  const [selectedFeature, setSelectedFeature] = useState(null);

  // ===== TESTIMONIALS STATE =====
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ===== FAQ STATE =====
  const [openFaq, setOpenFaq] = useState(null);

  // ===== COUNTER ANIMATION STATE =====
  const [counters, setCounters] = useState({ products: 0, varieties: 0, customers: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // ===== FEATURE DATA =====
  const features = [
    {
      id: "authentic",
      icon: "⭐",
      title: "Authentic Taste",
      shortDesc: "Traditional recipes passed down through generations.",
      longDesc: [
        "At PanchalVeda, we take immense pride in crafting namkeen that embodies the true essence of Indian culinary heritage. Our recipes have been meticulously preserved and perfected over generations in the heart of Farrukhabad, a region renowned for its rich tradition of savory snack-making. Every ingredient we use is handpicked with unwavering dedication to quality, sourced directly from trusted local farmers and spice merchants who share our deep-rooted commitment to authenticity and excellence.",
        "What sets our namkeen apart is our uncompromising adherence to traditional cooking methods. We prepare every batch in 100% pure groundnut oil, a choice that not only enhances the authentic flavor profile but also offers superior health benefits compared to refined oils. Groundnut oil, rich in heart-healthy monounsaturated fats and vitamin E, ensures that our namkeen delivers the perfect balance of taste and nutrition, allowing you to indulge without guilt.",
        "The soul of Indian cuisine lies in its spices, and we honor this tradition by using only the finest, freshest spices in our blends. The bold, aromatic punch of heeng (asafoetida) combined with a carefully curated selection of indigenous spices creates a symphony of flavors that transports you to the bustling streets and warm kitchens of Bharat.",
        "Our commitment to quality extends beyond ingredients to the very process of creation. Each batch is prepared with meticulous attention to detail, from the careful roasting of spices to the perfect frying temperature that gives our sev its signature crunch."
      ]
    },
    {
      id: "premium",
      icon: "🌿",
      title: "Premium Ingredients",
      shortDesc: "Pure, high-quality ingredients sourced with care.",
      longDesc: [
        "At PanchalVeda, we believe that extraordinary taste begins with extraordinary ingredients. That's why we spare no effort in sourcing only the finest, purest raw materials for our entire product range. From the moment we select our ingredients to the final packaging, every step is guided by an uncompromising commitment to quality, purity, and nutritional excellence.",
        "Our journey starts with premium chickpea flour (besan), the heart of our classic namkeen offerings. Milled to perfection from the highest-grade chickpeas, our besan delivers a rich, nutty flavor and unparalleled texture that forms the foundation of our beloved sev and mixtures.",
        "For our range of crunchy snacks, we use only the finest quality potatoes, carefully selected for their ideal starch content to achieve that perfect golden crispness. Our sugar-free variants are crafted with premium natural alternatives, ensuring that you can indulge in the authentic taste of India without compromising your health goals.",
        "Our dedication to purity is unwavering. We never use artificial flavors, chemical preservatives, or low-quality substitutes. Every product is made with 100% natural ingredients, sourced from trusted farmers and suppliers who share our philosophy of honest, wholesome food."
      ]
    },
    {
      id: "loved",
      icon: "❤️",
      title: "Loved by All",
      shortDesc: "A favorite snack for families across generations.",
      longDesc: [
        "PanchalVeda has become a beloved household name, cherished by families across India and beyond.",
        "Our customers love the authentic taste and consistent quality that our products deliver, making them a staple at every gathering.",
        "From festive celebrations to everyday tea-time snacks, our namkeen brings joy and flavor to countless homes.",
        "We're proud to have earned the trust and loyalty of our customers through years of dedication to quality and taste."
      ]
    },
    {
      id: "reach",
      icon: "📍",
      title: "Pan-India Reach",
      shortDesc: "Delivering authentic taste across the nation.",
      longDesc: [
        "What started as a small family business in Farrukhabad has now grown into a brand with Pan-India presence.",
        "Our products are available across multiple states, bringing the authentic taste of Bharat to customers everywhere.",
        "We've built a robust supply chain that ensures our namkeen reaches you fresh and flavorful, no matter where you are.",
        "Whether you're in Mumbai, Delhi, Kolkata, or anywhere in between, the taste of PanchalVeda is just a click away."
      ]
    }
  ];

  // ===== TESTIMONIALS DATA =====
  const testimonials = [
    { id: 1, name: "Vasu Chaurasia", location: "Lucknow, UP", rating: 5, comment: "Absolutely delicious! Reminds me of the authentic flavors I grew up with. PanchalVeda brings back so many childhood memories.", image: "👨‍🦰" },
    { id: 2, name: "Prashant Upadhyay", location: "Varanasi, UP", rating: 5, comment: "Truly mouthwatering! Brings back the real taste of my childhood favorites. The quality and authenticity are unmatched.", image: "👨" },
    { id: 3, name: "Preeti", location: "Delhi", rating: 5, comment: "The flavors feel so authentic—it instantly takes me back to home-cooked memories. Every bite is a journey to my roots.", image: "👩" },
    { id: 4, name: "Aayush", location: "Mumbai, MH", rating: 5, comment: "I've tried many namkeen brands, but PanchalVeda stands out with its perfect blend of spices and premium quality ingredients.", image: "👨‍💼" },
    { id: 5, name: "Tanya", location: "Bangalore, KA", rating: 5, comment: "The heeng aroma is absolutely divine! This is the only namkeen that reminds me of my grandmother's kitchen. Simply the best!", image: "👩‍💼" },
    { id: 6, name: "Anant", location: "Jaipur, RJ", rating: 5, comment: "PanchalVeda is my go-to snack for every occasion. The consistency in taste and quality is truly commendable.", image: "👨‍🎓" },
    { id: 7, name: "Govind", location: "Ahmedabad, GJ", rating: 5, comment: "I've been ordering from PanchalVeda for years now. Their products never disappoint. The authentic taste keeps me coming back.", image: "👨‍🌾" },
    { id: 8, name: "Laxmi", location: "Chennai, TN", rating: 5, comment: "What a wonderful discovery! The flavors are so pure and authentic. My entire family loves PanchalVeda. Highly recommended!", image: "👩‍👧" }
  ];

  // ===== FAQ DATA =====
  const faqData = [
    { id: 1, question: "What makes PanchalVeda namkeen different from other brands?", answer: "PanchalVeda stands apart through our unwavering commitment to authenticity. We use 100% pure groundnut oil instead of refined oils, premium heeng imported directly from Afghanistan, and time-honored recipes passed down through generations in Farrukhabad. Every batch is handcrafted with meticulous attention to detail, ensuring you taste the true essence of Bharat in every bite." },
    { id: 2, question: "Are your products suitable for people with dietary restrictions?", answer: "Yes! We offer a range of products to suit various dietary needs. Our sugar-free variants are perfect for health-conscious individuals, and all our products are made with 100% natural ingredients without artificial flavors or chemical preservatives. For specific allergen information, please check individual product labels or contact us directly." },
    { id: 3, question: "How do you ensure the freshness and quality of your products?", answer: "We follow a rigorous quality control process at every stage—from sourcing raw materials to final packaging. Our ingredients undergo strict quality testing, and we use premium packaging designed to preserve freshness. We also maintain a robust supply chain to ensure our products reach you in peak condition, no matter where you are in India." },
    { id: 4, question: "What is the shelf life of PanchalVeda products?", answer: "Our namkeen products typically have a shelf life of 3-6 months when stored properly in a cool, dry place away from direct sunlight. Each package has a clearly printed manufacturing and best-before date. Once opened, we recommend consuming within 2-3 weeks for optimal taste and crunch." },
    { id: 5, question: "Do you offer bulk orders or corporate gifting options?", answer: "Absolutely! We offer special pricing and customized packaging for bulk orders, corporate gifting, weddings, and festive occasions. Our team can help you create personalized gift hampers that showcase the authentic taste of Bharat. Contact us at contact@panchalveda.com or call +91-8174900977 for customized solutions." },
    { id: 6, question: "Which regions do you deliver to, and how long does shipping take?", answer: "We deliver Pan-India with a growing presence in major cities including Delhi, Mumbai, Bangalore, Chennai, Kolkata, and more. Standard delivery takes 3-7 business days depending on your location. We're constantly expanding our reach to bring the taste of PanchalVeda to every corner of India." }
  ];

  // ===== AUTO-SLIDE TESTIMONIALS =====
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ===== AUTO-SLIDE GALLERY =====
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev === galleryImages.length - 1 ? 0 : prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // ===== COUNTER ANIMATION =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter("products", 50, 1500);
            animateCounter("varieties", 28, 1500);
            animateCounter("customers", 10000, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (key, target, duration) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setCounters((prev) => ({ ...prev, [key]: current }));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    return num.toString();
  };

  // ===== NAVIGATION FUNCTIONS =====
  const handlePrev = () => setCurrentIndex((p) => p === 0 ? galleryImages.length - 1 : p - 1);
  const handleNext = () => setCurrentIndex((p) => p === galleryImages.length - 1 ? 0 : p + 1);
  const goToPrevious = () => setCurrentTestimonial((p) => p === 0 ? testimonials.length - 1 : p - 1);
  const goToNext = () => setCurrentTestimonial((p) => p === testimonials.length - 1 ? 0 : p + 1);
  const goToSlide = (index) => setCurrentTestimonial(index);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // ===== RENDER =====
  return (
    <div className="home-container">

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-premium">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-bg-glow"></div>

        {/* Floating ingredient particles: groundnut, cashew, almond, raisin, chana dal, heeng */}
        {/* <div className="hero-particles">
          <span className="hero-particle hero-particle-1" aria-hidden="true">🥜</span>
          <span className="hero-particle hero-particle-2" aria-hidden="true">🌰</span>
          <span className="hero-particle hero-particle-3" aria-hidden="true">🥜</span>
          <span className="hero-particle hero-particle-4" aria-hidden="true">🫘</span>
          <span className="hero-particle hero-particle-5" aria-hidden="true">🌰</span>
          <span className="hero-particle hero-particle-6" aria-hidden="true">🍇</span>
          <span className="hero-particle hero-particle-7" aria-hidden="true">🥜</span>
          <span className="hero-particle hero-particle-8" aria-hidden="true">🧄</span>
          <span className="hero-particle hero-particle-9" aria-hidden="true">🫘</span>
          <span className="hero-particle hero-particle-10" aria-hidden="true">🍇</span>
        </div> */}

        <div className="hero-decor decor-1"></div>
        <div className="hero-decor decor-2"></div>

        <div className="hero-premium-content">
          <div className="hero-badge animate-fade-down">
            <span className="badge-dot"></span>
            <span>Authentic Indian Namkeen Since 2018</span>
          </div>

          <h1 className="hero-premium-title">
            <span className="hero-title-letter-group">
              <span className="hero-title-word">Panchal</span>
              <span className="hero-title-word hero-title-highlight">Veda</span>
            </span>
          </h1>

          <p className="hero-premium-slogan animate-fade-up">
            A Crunch of Tradition,A Dash of Heeng
          </p>

          {/* Ingredient chips — groundnut oil & premium ingredients */}
          {/* <div className="hero-ingredients-row">
            <span className="ingredient-chip">
              <span className="ingredient-chip-icon">🛢️</span>
              Groundnut Oil
            </span>
            <span className="ingredient-chip">
              <span className="ingredient-chip-icon">🌰</span>
              Cashew
            </span>
            <span className="ingredient-chip">
              <span className="ingredient-chip-icon">🥜</span>
              Almond
            </span>
            <span className="ingredient-chip">
              <span className="ingredient-chip-icon">🍇</span>
              Raisins
            </span>
            <span className="ingredient-chip">
              <span className="ingredient-chip-icon">🫘</span>
              Chana Dal
            </span>
            <span className="ingredient-chip">
              <span className="ingredient-chip-icon">🧄</span>
              Heeng
            </span>
          </div> */}

          <div className="hero-premium-buttons animate-fade-up-delay-2">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => navigate("/product")}
            >
              <span className="btn-text">Explore Products</span>
              <span className="btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="btn-shine"></span>
            </button>

            <button
              className="hero-btn hero-btn-outline"
              onClick={() => navigate("/contact")}
            >
              <span className="btn-text">Contact Us</span>
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-grid">
            <div className="about-us-image-wrapper">
              <div className="about-us-image-container">
                <img src={Homepic} alt="PanchalVeda - Authentic Indian Snacks" className="about-us-image" />
                <div className="floating-badge badge-1">
                  <span className="badge-icon">🌟</span>
                  <div className="badge-text">
                    <strong>Since 2018</strong>
                    <span>Years of Excellence</span>
                  </div>
                </div>
                <div className="floating-badge badge-2">
                  <span className="badge-icon">🏆</span>
                  <div className="badge-text">
                    <strong>100%</strong>
                    <span>Authentic Taste</span>
                  </div>
                </div>
                <div className="floating-badge badge-3">
                  <span className="badge-icon">❤️</span>
                  <div className="badge-text">
                    <strong>10K+</strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-us-content">
              <div className="about-us-header">
                <span className="about-us-tag">About Us</span>
                <h2 className="about-us-title">
                  A Crunch of Tradition<br />
                  <span className="highlight-text">A Dash of Heeng</span>
                </h2>
                <div className="about-us-underline"></div>
              </div>

              <div className="about-us-body">
                <p className="about-us-description">
                  PanchalVeda brings you the authentic flavors of India,
                  crafted with <strong>premium ingredients</strong> and
                  <strong> traditional recipes</strong> that have been passed down
                  through generations.
                </p>
                <p className="about-us-description">
                  Our mission is to deliver delicious snacks that connect people
                  with the <strong>true taste of Bharat</strong>. Every bite tells
                  a story of heritage, quality, and passion.
                </p>
              </div>

              <div className="about-us-stats" ref={statsRef}>
                <div className="stat-item">
                  <span className="stat-number">{counters.products}+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">{counters.varieties}+</span>
                  <span className="stat-label">Varieties</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">{formatNumber(counters.customers)}+</span>
                  <span className="stat-label">Customers</span>
                </div>
              </div>

              <div className="about-us-actions">
                <button className="about-btn-primary" onClick={() => navigate("/about")}>
                  Learn More
                  <span className="btn-arrow">→</span>
                </button>
                <button className="about-btn-secondary" onClick={() => navigate("/product")}>
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== POPULAR PRODUCTS ==================== */}
      <section className="popular-products">
        <div className="products-header">
          <h2 className="products-title">Our Popular Products</h2>
          <p className="products-subtitle">Handcrafted with love and the finest ingredients</p>
          <span className="products-underline"></span>
        </div>

        <div className="product-grid-modern">
          {[
            { img: gadbad, name: "Gadbad", badge: "Bestseller", reviews: 128, desc: "Crispy, flavorful and made with love. A perfect blend of traditional spices." },
            { img: sembeej, name: "Sem Seeds", badge: "Premium", reviews: 96, desc: "Crispy, flavorful and made with love. Premium quality roasted seeds." },
            { img: paneerbhujiya, name: "Paneer Bhujia", badge: "Popular", reviews: 204, desc: "Crispy, flavorful and made with love. Authentic bhujia with a paneer twist." }
          ].map((p, i) => (
            <div className="product-card-modern" key={i}>
              <div className="product-image-wrapper">
                <img src={p.img} alt={p.name} className="product-image" />
                <div className="product-badge">{p.badge}</div>
                <div className="product-overlay">
                  <button className="quick-view-btn" onClick={() => navigate("/product")}>
                    Quick View
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">({p.reviews} reviews)</span>
                </div>
                <p className="product-description">{p.desc}</p>
                <div className="product-footer">
                  <button className="product-btn" onClick={() => navigate("/product")}>
                    View More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta-wrapper">
          <button className="view-all-products-btn" onClick={() => navigate("/product")}>
            View All Products
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Discover what makes PanchalVeda the preferred choice for families everywhere
          </p>

          <div className="why-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="why-card"
                onClick={() => setSelectedFeature(feature)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedFeature(feature); }}
              >
                <div className="why-card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.shortDesc}</p>
                <span className="why-card-cta">Learn More →</span>
              </div>
            ))}
          </div>
        </div>

        {selectedFeature && (
          <div className="popup-overlay" onClick={() => setSelectedFeature(null)}>
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={() => setSelectedFeature(null)} aria-label="Close popup">✕</button>
              <div className="popup-content">
                <div className="popup-header">
                  <span className="popup-icon">{selectedFeature.icon}</span>
                  <h2>{selectedFeature.title}</h2>
                </div>
                <div className="popup-body">
                  {selectedFeature.longDesc.map((paragraph, index) => (
                    <p key={index} className="popup-text">{paragraph}</p>
                  ))}
                </div>
                <div className="popup-footer">
                  <button className="popup-btn" onClick={() => setSelectedFeature(null)}>Got it! 👍</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">
            What Our Customers Say
            <span className="title-underline"></span>
          </h2>
          <p className="testimonials-subtitle">Real stories from real people who love PanchalVeda</p>

          <div className="testimonials-slider">
            <div className="stars-container">
              {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
              <span className="rating-text">5.0 Average Rating</span>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content" key={currentTestimonial}>
                <div className="testimonial-icon">{testimonials[currentTestimonial].image}</div>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-comment">{testimonials[currentTestimonial].comment}</p>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].location}</span>
                </div>
              </div>
            </div>

            <button className="slider-btn prev-btn" onClick={goToPrevious} aria-label="Previous">❮</button>
            <button className="slider-btn next-btn" onClick={goToNext} aria-label="Next">❯</button>

            <div className="dots-container">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="testimonial-counter">
              {currentTestimonial + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <div className="gallery-header-content">
              <span className="gallery-tag">📸 Our Gallery</span>
              <h2 className="gallery-title">
                Behind the <span className="highlight-text">Flavors</span>
              </h2>
              <p className="gallery-subtitle">A glimpse into our world of authentic namkeen making</p>
              <div className="gallery-underline"></div>
            </div>
            <div className="gallery-counter">
              <span className="counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="counter-divider">/</span>
              <span className="counter-total">{String(galleryImages.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="gallery-slider-modern">
            <button className="gallery-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous">‹</button>

            <div className="gallery-slide-wrapper">
              <div className="gallery-slide" key={currentIndex}>
                <img
                  src={galleryImages[currentIndex]}
                  alt={`Gallery ${currentIndex + 1}`}
                  className="gallery-slide-image"
                />
                <div className="gallery-slide-overlay">
                  <div className="slide-content">
                    <span className="slide-number">0{currentIndex + 1}</span>
                    <h3 className="slide-title">{galleryData[currentIndex].title}</h3>
                    <p className="slide-description">{galleryData[currentIndex].description}</p>
                    <div className="slide-meta">
                      <span className="slide-location">
                        <span className="location-icon">📍</span>
                        {galleryData[currentIndex].location}
                      </span>
                      <span className="slide-category">{galleryData[currentIndex].category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="gallery-nav-btn next-btn" onClick={handleNext} aria-label="Next">›</button>
          </div>

          <div className="gallery-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="dot-number">{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>

          <div className="gallery-progress">
            <div
              className="gallery-progress-bar"
              style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-tag">❓ Have Questions?</span>
            <h2 className="faq-title">
              Frequently Asked <span className="highlight-text">Questions</span>
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about PanchalVeda products, quality, and services
            </p>
            <div className="faq-underline"></div>
          </div>

          <div className="faq-grid">
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={faq.id} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-icon ${openFaq === index ? 'rotated' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </span>
                  </button>
                  <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
  <div className="faq-answer-inner">
    <div className="faq-answer-content">
      <p>{faq.answer}</p>
    </div>
  </div>
</div>
                </div>
              ))}
            </div>

            <div className="faq-contact-card">
              <div className="faq-contact-glow"></div>
              <div className="faq-contact-content">
                <div className="faq-contact-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <h3 className="faq-contact-title">Still Have Questions?</h3>
                <p className="faq-contact-text">
                  Can't find the answer you're looking for? Our friendly team is here to help you with anything you need.
                </p>

                <div className="faq-contact-details">
                  <div className="faq-contact-item">
                    <span className="faq-contact-item-icon">📞</span>
                    <div>
                      <span className="faq-contact-label">Call Us</span>
                      <span className="faq-contact-value">+91-8174900977</span>
                    </div>
                  </div>
                  <div className="faq-contact-item">
                    <span className="faq-contact-item-icon">📧</span>
                    <div>
                      <span className="faq-contact-label">Email Us</span>
                      <span className="faq-contact-value">contact@panchalveda.com</span>
                    </div>
                  </div>
                  <div className="faq-contact-item">
                    <span className="faq-contact-item-icon">📍</span>
                    <div>
                      <span className="faq-contact-label">Visit Us</span>
                      <span className="faq-contact-value">Kamalganj, Farrukhabad, UP</span>
                    </div>
                  </div>
                </div>

                <button className="faq-contact-btn" onClick={() => navigate("/contact")}>
                  <span>Get in Touch</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="cta">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>Order Now & Taste the Tradition</h2>
          <button className="btn-primary" onClick={() => navigate("/product")}>Shop Now</button>
        </div>
      </section>

      {/* ==================== MAP & CONTACT ==================== */}
      <section className="map-contact">
        <h2>Find Us</h2>
        <div className="map-contact-grid">
          <iframe
            title="PanchalVeda Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14186.771411491427!2d79.61951843560308!3d27.26016079771111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bb24b78d7fd%3A0x5d00e7487012539a!2sKamalganj%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sro!4v1789147389526!5m2!1sen!2sro"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-details">
            <h3>PanchalVeda</h3>
            <p>A Crunch of Tradition,A Dash of Heeng - PanchalVeda AgroFoods</p>
            <p>📍 Kamalganj, Farrukhabad, Uttar Pradesh, India</p>
            <p>📞 +91-8174900977</p>
            <p>📧 contact@panchalveda.com</p>
          </div>
        </div>
      </section>

    </div>
  );
}