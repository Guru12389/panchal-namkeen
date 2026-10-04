// src/pages/Events.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

// 2024 Assets
import trade1 from "./assets/pic6.jpeg";
import trade2 from "./assets/pic4.jpeg";
import trade3 from "./assets/pic5.jpeg";
import trade4 from "./assets/pic8.jpeg";
import trade5 from "./assets/pic9.jpeg";
import trade6 from "./assets/Noidaexpo.jpeg";

// 2026 Assets (new images)
import trade2026_1 from "./assets/trade2026_1.jpeg";
import trade2026_2 from "./assets/trade2026_2.jpeg";
import trade2026_3 from "./assets/trade2026_3.jpeg";
import trade2026_4 from "./assets/trade2026_4.jpeg";
import trade2026_5 from "./assets/trade2026_5.jpeg";
import trade2026_6 from "./assets/trade2026_6.jpeg";

// Video
import feedbackVideo from "./assets/feedback.mp4";

export default function Events() {
  const navigate = useNavigate();
  const [activeEvent, setActiveEvent] = useState("upts-2026");
  const [lightbox, setLightbox] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    document.title = "Events & Trade Shows | PanchalVeda";
    window.scrollTo(0, 0);
  }, []);

  // ─── EVENTS DATA ──────────────────────────────────────────────
  const events = [
    {
      id: "upts-2026",
      year: "2026",
      title: "UP International Trade Show 2026",
      subtitle: "The Next Chapter of Global Flavours",
      location: "Greater Noida, Uttar Pradesh",
      venue: "India Expo Centre & Mart",
      organizer: "Government of Uttar Pradesh",
      icon: "🌏",
      color: "linear-gradient(135deg, #dc2626, #b91c1c)",
      description:
        "Building on our 2024 success, PanchalVeda returns to the UP International Trade Show in 2026 with an expanded vision. We are bringing an even wider range of Farrukhabadi namkeen to the global stage, forging new international partnerships, and showcasing the true taste of tradition to buyers from over 80 countries.",
      highlights: [
        
"Launching our new global export line",

"International chefs and buyers eager to collaborate with us",

"Featured in the ODOP Global Pavilion",

"Exporters and distributors ready to take our taste worldwide",

"Showcasing sustainable packaging innovations",

"Hosting a panel on regional Indian snacks",

      ],
      stats: [
        { value: "8000+", label: "Visitors" },
        { value: "5+", label: "Countries" },
        { value: "300+", label: "B2B Meetings" },
        { value: "75+", label: "New Partners" },
      ],
    },
    {
      id: "upts-2024",
      year: "2024",
      title: "UP International Trade Show 2024",
      subtitle: "Showcasing the Taste of Uttar Pradesh to the World",
      location: "Greater Noida, Uttar Pradesh",
      venue: "India Expo Centre & Mart",
      organizer: "Government of Uttar Pradesh",
      icon: "🌏",
      color: "linear-gradient(135deg, #f97316, #ea580c)",
      description:
        "PanchalVeda proudly participated in the UP International Trade Show, one of India's largest trade expos organized by the Government of Uttar Pradesh. Our stall showcased the authentic flavours of Farrukhabadi namkeen to a global audience, including international buyers, distributors, and food enthusiasts from over 60 countries.",
      highlights: [
        "Showcased our full range of premium namkeen products",
        "Connected with distributors from over 20 countries",
        "Received overwhelming response from international buyers",
        "Featured in ODOP (One District One Product) showcase",
        "Received recognition for authentic Farrukhabadi flavours",
        "Global chefs keen to collaborate and spread our taste worldwide",
      ],
      stats: [
        { value: "5000+", label: "Visitors" },
        { value: "60+", label: "Countries" },
        { value: "200+", label: "B2B Meetings" },
        { value: "50+", label: "New Partners" },
      ],
    },
  ];

  // ─── GALLERY IMAGES (per event) ──────────────────────────────
  const gallery2024 = [
    { src: trade1, caption: "PanchalVeda stall at UP International Trade Show 2024" },
    { src: trade2, caption: "Visitors tasting our authentic namkeen" },
    { src: trade3, caption: "Meeting with international buyers" },
    { src: trade4, caption: "Our product display at the expo" },
    { src: trade5, caption: "Team PanchalVeda at the trade show" },
    { src: trade6, caption: "Networking with distributors" },
  ];

  const gallery2026 = [
    { src: trade2026_1, caption: "PanchalVeda grand stall at UP ITS 2026" },
    { src: trade2026_2, caption: "Live tasting session with global chefs" },
    { src: trade2026_3, caption: "MoU signing with international partners" },
    { src: trade2026_4, caption: "New sustainable packaging showcase" },
    { src: trade2026_5, caption: "Team PanchalVeda at the 2026 expo" },
    { src: trade2026_6, caption: "Award for excellence in regional snacks" },
  ];

  // Choose gallery based on active event
  const galleryImages = activeEvent === "upts-2026" ? gallery2026 : gallery2024;

  // ─── FAQS ────────────────────────────────────────────────────
  const faqs = [
    {
      q: "What is the UP International Trade Show?",
      a: "The UP International Trade Show is one of India's largest trade expos organized by the Government of Uttar Pradesh. It brings together businesses, exporters, and buyers from over 60 countries to showcase products and services from Uttar Pradesh.",
    },
    {
      q: "Which events has PanchalVeda participated in?",
      a: "PanchalVeda has proudly participated in the UP International Trade Show (2024 and 2026) and Noida Food Expo (2024), representing Farrukhabad and its rich snacking heritage on state, national, and international platforms.",
    },
    {
      q: "Can I meet PanchalVeda at upcoming events?",
      a: "Yes! We regularly participate in trade shows, food expos, and ODOP events. Follow us on social media or contact us at contact@panchalveda.com to know about our upcoming events.",
    },
    {
      q: "How can I partner with PanchalVeda as a distributor?",
      a: "We are actively looking for distributors across India and internationally. Please visit our Contact page or WhatsApp us at +91-8174900977 to discuss partnership opportunities.",
    },
  ];

  const currentEvent = events.find((e) => e.id === activeEvent) || events[0];

  return (
    <div className="events-page">
      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-overlay"></div>
        <div className="events-hero-grain"></div>
        <div className="events-hero-content">
          <span className="events-hero-tag">✦ Events & Trade Shows</span>
          <h1>Where Tradition Meets the World</h1>
          <p>
            Showcasing the authentic flavours of Farrukhabad at national and international
            platforms — one event at a time.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="events-tabs-section">
        <div className="events-tabs-container">
          <div className="events-tabs">
            {events.map((ev) => (
              <button
                key={ev.id}
                className={`events-tab ${activeEvent === ev.id ? "active" : ""}`}
                onClick={() => setActiveEvent(ev.id)}
              >
                <span className="tab-icon">{ev.icon}</span>
                <span className="tab-content">
                  <strong>{ev.title}</strong>
                  <small>{ev.year}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="featured-event-section">
        <div className="featured-event-container">
          <div className="featured-event-header">
            <div
              className="featured-event-icon"
              style={{ background: currentEvent.color }}
            >
              {currentEvent.icon}
            </div>
            <div className="featured-event-title-block">
              <span className="featured-event-year">{currentEvent.year}</span>
              <h2>{currentEvent.title}</h2>
              <p className="featured-event-subtitle">{currentEvent.subtitle}</p>
            </div>
          </div>

          <div className="featured-event-grid">
            <div className="featured-event-main">
              <p className="featured-event-description">{currentEvent.description}</p>

              <div className="event-info-cards">
                <div className="event-info-card">
                  <span className="info-icon">📍</span>
                  <div>
                    <span className="info-label">Location</span>
                    <strong>{currentEvent.location}</strong>
                  </div>
                </div>
                <div className="event-info-card">
                  <span className="info-icon">🏛️</span>
                  <div>
                    <span className="info-label">Venue</span>
                    <strong>{currentEvent.venue}</strong>
                  </div>
                </div>
                <div className="event-info-card">
                  <span className="info-icon">🤝</span>
                  <div>
                    <span className="info-label">Organized By</span>
                    <strong>{currentEvent.organizer}</strong>
                  </div>
                </div>
              </div>

              <div className="event-highlights">
                <h3>
                  <span className="highlight-star">★</span> Key Highlights
                </h3>
                <ul>
                  {currentEvent.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="featured-event-sidebar">
              <div className="event-stats-card">
                <h4>Event Impact</h4>
                <div className="event-stats-grid">
                  {currentEvent.stats.map((stat, i) => (
                    <div className="event-stat" key={i}>
                      <span className="event-stat-value">{stat.value}</span>
                      <span className="event-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="event-cta-card">
                <span className="cta-icon">💼</span>
                <h4>Become a Partner</h4>
                <p>
                  Interested in distributing PanchalVeda products? Let's talk business.
                </p>
                <button className="event-cta-btn" onClick={() => navigate("/contact")}>
                  Get in Touch →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO SECTION (2026 only) ────────────────────────── */}
      {/* ─── VIDEO SECTION (2026 only) ────────────────────────── */}
{activeEvent === "upts-2026" && (
  <section className="events-video-section">
    {/* Ambient glow backgrounds */}
    <div className="events-video-glow events-video-glow-1"></div>
    <div className="events-video-glow events-video-glow-2"></div>

    <div className="events-video-container">
      <div className="events-video-header">
        <span className="events-section-tag">🎥 Live Feedback</span>
        <h2>
          What Our <span className="highlight-text">Partners Say</span>
        </h2>
        <div className="section-underline"></div>
        <p className="events-video-subtitle">
          Real voices from distributors, buyers, and food lovers who visited our
          stall at UP International Trade Show 2026.
        </p>
      </div>

      <div className="events-video-layout">
        {/* LEFT: Video Player */}
        <div className="events-video-frame">
          <div className="events-video-badge">
            <span className="badge-dot"></span>
            LIVE FROM EXPO
          </div>

          <div className="events-video-wrapper">
            {!videoError && feedbackVideo ? (
              <video
                className="events-feedback-video"
                controls
                playsInline
                preload="metadata"
                poster=""
                onError={() => setVideoError(true)}
              >
                <source src={feedbackVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="events-video-fallback">
                <span className="video-fallback-icon">🎬</span>
                <p>Video feedback is currently unavailable.</p>
                <p className="video-fallback-sub">
                  Please check back later or contact us for more details.
                </p>
              </div>
            )}
          </div>

          <div className="events-video-frame-footer">
            <div className="video-footer-left">
              <span className="video-footer-icon">🎙️</span>
              <div>
                <strong>Partner Feedback Reel</strong>
                <small>UP International Trade Show 2026</small>
              </div>
            </div>
            <div className="video-footer-right">
              <span className="video-footer-stat">
                <strong>80+</strong>
                <small>Countries</small>
              </span>
              <span className="video-footer-stat">
                <strong>75+</strong>
                <small>Partners</small>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Info Card */}
        <div className="events-video-info">
          <div className="video-info-card">
            <span className="video-info-quote">"</span>
            <p className="video-info-text">
              The authenticity of Farrukhabadi namkeen impressed every buyer we
              brought to the PanchalVeda stall. This is exactly what the global
              market is looking for.
            </p>
            <div className="video-info-author">
              <div className="video-info-avatar">RA</div>
              <div>
                <strong>Rahul Agarwal</strong>
                <small>Indian Buyer · Noida</small>
              </div>
            </div>
          </div>

          <div className="video-info-highlights">
            <div className="video-info-highlight">
              <span className="vih-icon">🌍</span>
              <div>
                <strong>Global Reach</strong>
                <small>Partners from 5+ countries</small>
              </div>
            </div>
            <div className="video-info-highlight">
              <span className="vih-icon">🤝</span>
              <div>
                <strong>Trusted Quality</strong>
                <small>Made with groundnut oil & pure heeng</small>
              </div>
            </div>
            <div className="video-info-highlight">
              <span className="vih-icon">🏆</span>
              <div>
                <strong>Award Winning</strong>
                <small>Recognized for authentic flavours</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

      {/* GALLERY */}
      <section className="events-gallery-section">
        <div className="events-gallery-container">
          <div className="events-gallery-header">
            <span className="events-section-tag">📸 Gallery</span>
            <h2>
              Moments from the <span className="highlight-text">Trade Show</span>
            </h2>
            <div className="section-underline"></div>
            <p className="events-gallery-subtitle">
              {activeEvent === "upts-2026"
                ? "A glimpse into our journey at UP International Trade Show 2026"
                : "A glimpse into our journey at UP International Trade Show 2024"}
            </p>
          </div>

          <div className="events-gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item-${i + 1}`}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-zoom">🔍</span>
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">{lightbox.caption}</p>
        </div>
      )}

      {/* FAQ */}
      <section className="events-faq-section">
        <div className="events-faq-container">
          <div className="events-faq-header">
            <span className="events-section-tag">❓ Questions</span>
            <h2>
              Frequently Asked <span className="highlight-text">Questions</span>
            </h2>
            <div className="section-underline"></div>
          </div>

          <div className="events-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`events-faq-item ${activeFaq === i ? "active" : ""}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="events-faq-question">
                  <h3>{faq.q}</h3>
                  <span className="events-faq-icon">
                    {activeFaq === i ? "−" : "+"}
                  </span>
                </div>
                <div className="events-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="events-final-cta">
        <div className="events-final-cta-content">
          <h2>Bring the Taste of Farrukhabad to Your Market</h2>
          <p>
            Partner with PanchalVeda and offer your customers authentic Indian namkeen
            made with groundnut oil and pure heeng.
          </p>
          <div className="events-final-cta-buttons">
            <button
              className="cta-btn primary"
              onClick={() => navigate("/contact")}
            >
              Become a Distributor
            </button>
            <button
              className="cta-btn secondary"
              onClick={() => navigate("/product")}
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}