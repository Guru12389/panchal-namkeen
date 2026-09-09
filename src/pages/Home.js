import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Aboutpic from './assets/Aboutpic.jpeg';
import Homepic from './assets/HomePic.png';
import sembeej from './assets/SemBeej.png';
import paneerbhujiya from './assets/PaneerBhujiya.png';
import gadbad from './assets/Gadbad.png';
import pic1 from './assets/pic1.jpeg';
import pic2 from './assets/pic2.jpeg';
import pic3 from './assets/pic3.jpeg';
import pic4 from './assets/pic4.jpeg';
import pic5 from './assets/pic5.jpeg';
import pic6 from './assets/pic6.jpeg';
import Japan1 from './assets/Japan1.jpeg';
import Japan2 from './assets/Japan2.jpeg';
import Noidaexpo from './assets/Noidaexpo.jpeg';
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  
  // ===== GALLERY STATE =====
  const galleryImages = [Noidaexpo, Japan2, pic2, pic3, pic4, pic5, pic6];
  const [currentIndex, setCurrentIndex] = useState(0);
  // ===== GALLERY DATA WITH DESCRIPTIONS =====
const galleryData = [
  {
    id: 1,
    title: "Traditional Spice Blending",
    description: "Master craftsmen blending authentic spices using time-honored techniques passed down through generations.",
    location: "Farrukhabad, UP",
    category: "Process",
    image: Noidaexpo
  },
  {
    id: 2,
    title: "Premium Quality Ingredients",
    description: "Hand-selected premium ingredients sourced from the finest farms and spice merchants across India.",
    location: "Spice Markets",
    category: "Ingredients",
    image: Japan2
  },
  {
    id: 3,
    title: "Artisanal Namkeen Making",
    description: "Our skilled artisans crafting each batch with precision, ensuring perfect texture and authentic taste.",
    location: "Production Floor",
    category: "Craftsmanship",
    image: pic2
  },
  {
    id: 4,
    title: "Quality Control Excellence",
    description: "Rigorous quality checks at every stage to ensure our namkeen meets the highest standards of purity.",
    location: "Quality Lab",
    category: "Quality",
    image: pic3
  },
  {
    id: 5,
    title: "Packaging with Care",
    description: "Carefully packed to preserve freshness and deliver the authentic taste of Bharat to your doorstep.",
    location: "Packaging Unit",
    category: "Packaging",
    image: pic4
  },
    {
    id: 6,
    title: "Packaging with Care",
    description: "Carefully packed to preserve freshness and deliver the authentic taste of Bharat to your doorstep.",
    location: "Packaging Unit",
    category: "Packaging",
    image: pic5
  },
  {
    id: 7,
    title: "Family Tradition Continues",
    description: "Generations of expertise and passion for authentic flavors come together in every product we make.",
    location: "PanchalVeda Kitchen",
    category: "Heritage",
    image: pic6
  }
];

  // ===== WHY CHOOSE US POPUP STATE =====
  const [selectedFeature, setSelectedFeature] = useState(null);

  // ===== TESTIMONIALS STATE =====
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  "The soul of Indian cuisine lies in its spices, and we honor this tradition by using only the finest, freshest spices in our blends. The bold, aromatic punch of heeng (asafoetida) combined with a carefully curated selection of indigenous spices creates a symphony of flavors that transports you to the bustling streets and warm kitchens of Bharat. Every spice is proportioned with precision, ensuring that each bite delivers a harmonious explosion of taste that lingers delightfully on your palate.",

  "Our commitment to quality extends beyond ingredients to the very process of creation. Each batch is prepared with meticulous attention to detail, from the careful roasting of spices to the perfect frying temperature that gives our sev its signature crunch. The result is a namkeen that not only satisfies your cravings but also tells a story of culinary passion, cultural heritage, and the timeless traditions that make Indian cuisine truly extraordinary. Whether it's the fiery zest of our masala blends or the subtle, comforting warmth of our classic mixtures, every flavor we create is a tribute to the vibrant spirit of India."
]
    },
    {
      id: "premium",
      icon: "🌿",
      title: "Premium Ingredients",
      shortDesc: "Pure, high-quality ingredients sourced with care.",
      longDesc: [
  "At PanchalVeda, we believe that extraordinary taste begins with extraordinary ingredients. That's why we spare no effort in sourcing only the finest, purest raw materials for our entire product range. From the moment we select our ingredients to the final packaging, every step is guided by an uncompromising commitment to quality, purity, and nutritional excellence.",

  "Our journey starts with premium chickpea flour (besan), the heart of our classic namkeen offerings. Milled to perfection from the highest-grade chickpeas, our besan delivers a rich, nutty flavor and unparalleled texture that forms the foundation of our beloved sev and mixtures. Complementing this is the bold, aromatic heeng (asafoetida), imported directly from Afghanistan, where the resin is harvested at its peak potency. This prized spice infuses our namkeen with a distinctive, savory depth that has become our signature.",

  "For our range of crunchy snacks, we use only the finest quality potatoes, carefully selected for their ideal starch content to achieve that perfect golden crispness. Our sugar-free variants are crafted with premium natural alternatives, ensuring that you can indulge in the authentic taste of India without compromising your health goals. Each ingredient, from the spices to the oils, undergoes rigorous quality testing to ensure it meets our exacting standards.",

  "Our dedication to purity is unwavering. We never use artificial flavors, chemical preservatives, or low-quality substitutes. Every product is made with 100% natural ingredients, sourced from trusted farmers and suppliers who share our philosophy of honest, wholesome food. The result is namkeen that not only tastes exceptional but also nourishes the body and soul—a true reflection of PanchalVeda's promise to deliver the authentic taste of Bharat with integrity and care."
]
    },
    {
      id: "loved",
      icon: "❤️",
      title: "Loved by All",
      shortDesc: "A favorite snack for families across generations.",
      longDesc: [
        "Panchalveda Namkeen has become a beloved household name, cherished by families across India and beyond.",
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
        "Whether you're in Mumbai, Delhi, Kolkata, or anywhere in between, the taste of Panchalveda is just a click away."
      ]
    }
  ];

  // ===== TESTIMONIALS DATA =====
  const testimonials = [
    {
      id: 1,
      name: "Vasu Chaurasia",
      location: "Lucknow, UP",
      rating: 5,
      comment: "Absolutely delicious! Reminds me of the authentic flavors I grew up with. Panchalveda Namkeen brings back so many childhood memories.",
      image: "👨‍🦰"
    },
    {
      id: 2,
      name: "Prashant Upadhyay",
      location: "Varanasi, UP",
      rating: 5,
      comment: "Truly mouthwatering! Brings back the real taste of my childhood favorites. The quality and authenticity are unmatched.",
      image: "👨"
    },
    {
      id: 3,
      name: "Preeti",
      location: "Delhi",
      rating: 5,
      comment: "The flavors feel so authentic—it instantly takes me back to home-cooked memories. Every bite is a journey to my roots.",
      image: "👩"
    },
    {
      id: 4,
      name: "Aayush",
      location: "Mumbai, MH",
      rating: 5,
      comment: "I've tried many namkeen brands, but Panchalveda stands out with its perfect blend of spices and premium quality ingredients.",
      image: "👨‍💼"
    },
    {
      id: 5,
      name: "Tanya",
      location: "Bangalore, KA",
      rating: 5,
      comment: "The heeng aroma is absolutely divine! This is the only namkeen that reminds me of my grandmother's kitchen. Simply the best!",
      image: "👩‍💼"
    },
    {
      id: 6,
      name: "Anant",
      location: "Jaipur, RJ",
      rating: 5,
      comment: "Panchalveda Namkeen is my go-to snack for every occasion. The consistency in taste and quality is truly commendable.",
      image: "👨‍🎓"
    },
    {
      id: 7,
      name: "Govind",
      location: "Ahmedabad, GJ",
      rating: 5,
      comment: "I've been ordering from Panchalveda for years now. Their products never disappoint. The authentic taste keeps me coming back.",
      image: "👨‍🌾"
    },
    {
      id: 8,
      name: "Laxmi",
      location: "Chennai, TN",
      rating: 5,
      comment: "What a wonderful discovery! The flavors are so pure and authentic. My entire family loves Panchalveda Namkeen. Highly recommended!",
      image: "👩‍👧"
    }
  ];

  // ===== AUTO-SLIDE TESTIMONIALS =====
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  // ===== GALLERY FUNCTIONS =====
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

  // ===== TESTIMONIAL NAVIGATION =====
  const goToPrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentTestimonial(index);
  };

  // ===== RENDER =====
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-up delay-1">Panchalveda Namkeen</h1>
          <p className="fade-up delay-2 brand-slogan">
            "Taste of Bharat in Every Bite - PanchalVeda AgroFoods"
          </p>
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
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      {/* ===== ABOUT US SECTION ===== */}
<section className="about-us-section">
  <div className="about-us-container">
    <div className="about-us-grid">
      {/* Left Side - Image with floating elements */}
      <div className="about-us-image-wrapper">
        <div className="about-us-image-container">
          <img 
            src={Homepic} 
            alt="Panchalveda Namkeen - Authentic Indian Snacks" 
            className="about-us-image"
          />
          {/* Floating Badges */}
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

      {/* Right Side - Content */}
      <div className="about-us-content">
        <div className="about-us-header">
          <span className="about-us-tag">About Us</span>
          <h2 className="about-us-title">
            Taste of Bharat <br />
            <span className="highlight-text">in Every Bite</span>
          </h2>
          <div className="about-us-underline"></div>
        </div>

        <div className="about-us-body">
          <p className="about-us-description">
            Panchalveda Namkeen brings you the authentic flavors of India, 
            crafted with <strong>premium ingredients</strong> and &nbsp;
            <strong>traditional recipes</strong> that have been passed down 
            through generations.
          </p>
          <p className="about-us-description">
            Our mission is to deliver delicious snacks that connect people 
            with the <strong>true taste of Bharat</strong>. Every bite tells 
            a story of heritage, quality, and passion.
          </p>
        </div>

        {/* Stats */}
        <div className="about-us-stats">
          <div className="stat-item">
            <span className="stat-number" data-target="50">50+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number" data-target="28">28+</span>
            <span className="stat-label">Varieties</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number" data-target="10000">10K+</span>
            <span className="stat-label">Customers</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="about-us-actions">
          <button 
            className="about-btn-primary"
            onClick={() => navigate("/about")}
          >
            Learn More
            <span className="btn-arrow">→</span>
          </button>
          <button 
            className="about-btn-secondary"
            onClick={() => navigate("/product")}
          >
            Explore Products
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FEATURED PRODUCTS */}
      {/* ===== POPULAR PRODUCTS ===== */}
<section className="popular-products">
  <div className="products-header">
    <h2 className="products-title">Our Popular Products</h2>
    <p className="products-subtitle">
      Handcrafted with love and the finest ingredients
    </p>
    <span className="products-underline"></span>
  </div>

  <div className="product-grid-modern">
    {/* Product 1 - Gadbad */}
    <div className="product-card-modern">
      <div className="product-image-wrapper">
        <img
          src={gadbad}
          alt="Gadbad Namkeen"
          className="product-image"
        />
        <div className="product-badge">Bestseller</div>
        <div className="product-overlay">
          <button
            className="quick-view-btn"
            onClick={() => navigate("/product")}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">Gadbad</h3>
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-count">(128 reviews)</span>
        </div>
        <p className="product-description">
          Crispy, flavorful and made with love. A perfect blend of traditional spices.
        </p>
        <div className="product-footer">
          {/* <span className="product-price">₹160</span> */}
          <button
            className="product-btn"
            onClick={() => navigate("/product")}
          >
            View More →
          </button>
        </div>
      </div>
    </div>

    {/* Product 2 - Sem Seeds */}
    <div className="product-card-modern">
      <div className="product-image-wrapper">
        <img
          src={sembeej}
          alt="Sem Seeds"
          className="product-image"
        />
        <div className="product-badge">Premium</div>
        <div className="product-overlay">
          <button
            className="quick-view-btn"
            onClick={() => navigate("/product")}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">Sem Seeds</h3>
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-count">(96 reviews)</span>
        </div>
        <p className="product-description">
          Crispy, flavorful and made with love. Premium quality roasted seeds.
        </p>
        <div className="product-footer">
          {/* <span className="product-price">₹280</span> */}
          <button
            className="product-btn"
            onClick={() => navigate("/product")}
          >
            View More →
          </button>
        </div>
      </div>
    </div>

    {/* Product 3 - Paneer Bhujia */}
    <div className="product-card-modern">
      <div className="product-image-wrapper">
        <img
          src={paneerbhujiya}
          alt="Paneer Bhujia"
          className="product-image"
        />
        <div className="product-badge">Popular</div>
        <div className="product-overlay">
          <button
            className="quick-view-btn"
            onClick={() => navigate("/product")}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">Paneer Bhujia</h3>
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-count">(204 reviews)</span>
        </div>
        <p className="product-description">
          Crispy, flavorful and made with love. Authentic bhujia with a paneer twist.
        </p>
        <div className="product-footer">
          {/* <span className="product-price">₹160</span> */}
          <button
            className="product-btn"
            onClick={() => navigate("/product")}
          >
            View More →
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* View All Products Button */}
  <div className="products-cta-wrapper">
    <button
      className="view-all-products-btn"
      onClick={() => navigate("/product")}
    >
      View All Products
      <span className="btn-arrow">→</span>
    </button>
  </div>
</section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Discover what makes Panchalveda Namkeen the preferred choice for families everywhere
          </p>
          
          <div className="why-grid">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="why-card"
                onClick={() => setSelectedFeature(feature)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedFeature(feature);
                }}
              >
                <div className="why-card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.shortDesc}</p>
                <span className="why-card-cta">Learn More →</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== POPUP MODAL ===== */}
        {selectedFeature && (
          <div className="popup-overlay" onClick={() => setSelectedFeature(null)}>
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="popup-close" 
                onClick={() => setSelectedFeature(null)}
                aria-label="Close popup"
              >
                ✕
              </button>
              
              <div className="popup-content">
                <div className="popup-header">
                  <span className="popup-icon">{selectedFeature.icon}</span>
                  <h2>{selectedFeature.title}</h2>
                </div>
                
                <div className="popup-body">
                  {selectedFeature.longDesc.map((paragraph, index) => (
                    <p key={index} className="popup-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="popup-footer">
                  <button 
                    className="popup-btn"
                    onClick={() => setSelectedFeature(null)}
                  >
                    Got it! 👍
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ===== TESTIMONIALS SLIDER ===== */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">
            What Our Customers Say
            <span className="title-underline"></span>
          </h2>
          <p className="testimonials-subtitle">
            Real stories from real people who love Panchalveda Namkeen
          </p>

          <div className="testimonials-slider">
            {/* Rating Stars */}
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              <span className="rating-text">5.0 Average Rating</span>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-icon">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-comment">
                  {testimonials[currentTestimonial].comment}
                </p>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].location}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              className="slider-btn prev-btn" 
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              ❮
            </button>
            <button 
              className="slider-btn next-btn" 
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              ❯
            </button>

            {/* Dots Indicator */}
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

            {/* Counter */}
            <div className="testimonial-counter">
              {currentTestimonial + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
     {/* ===== GALLERY SECTION - PROFESSIONAL ===== */}
<section className="gallery-section">
  <div className="gallery-container">
    <div className="gallery-header">
      <div className="gallery-header-content">
        <span className="gallery-tag">📸 Our Gallery</span>
        <h2 className="gallery-title">Behind the <span className="highlight-text">Flavors</span></h2>
        <p className="gallery-subtitle">
          A glimpse into our world of authentic namkeen making
        </p>
        <div className="gallery-underline"></div>
      </div>
      <div className="gallery-counter">
        <span className="counter-current">{currentIndex + 1}</span>
        <span className="counter-divider">/</span>
        <span className="counter-total">{galleryImages.length}</span>
      </div>
    </div>

    {/* Slider */}
    <div className="gallery-slider-modern">
      <button 
        className="gallery-nav-btn prev-btn" 
        onClick={handlePrev}
        aria-label="Previous image"
      >
        <span>‹</span>
      </button>

      <div className="gallery-slide-wrapper">
        <div className="gallery-slide">
          <img
            src={galleryImages[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="gallery-slide-image"
          />
          {/* Overlay with description */}
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

      <button 
        className="gallery-nav-btn next-btn" 
        onClick={handleNext}
        aria-label="Next image"
      >
        <span>›</span>
      </button>
    </div>

    {/* Thumbnails / Dots */}
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

    {/* Progress Bar */}
    <div className="gallery-progress">
      <div 
        className="gallery-progress-bar" 
        style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
      ></div>
    </div>
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
            <p>Taste of Bharat in Every Bite - PanchalVeda AgroFoods</p>
            <p>📍 Farrukhabad, Uttar Pradesh, India</p>
            <p>📞 +91-8174900977</p>
            <p>📧 panchalvedaagrofoods@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}