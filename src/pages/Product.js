import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Product.css";

/* -------------------------
   PRODUCT IMAGES
------------------------- */
import HeengSev from "./assets/HeengSev.png";
import BadamMixture from "./assets/BadamMixture.png";
import AlooBhujiya from "./assets/AlooBhujiya.png";
import BesanBhujiya from "./assets/BesanBhujiya.png";
import BesanDaana from "./assets/BesanDaana.png";
import BesanGathiya from "./assets/BesanGathiya.png";
import Bhakharbadi from "./assets/Bhakharbadi.png";
import ShahiMixture from "./assets/ShahiMixture.png";
import ChanaDal from "./assets/ChanaDal.png";
import ChanaJorGaram from "./assets/ChanaJorGaram.png";
import Gadbad from "./assets/Gadbad.png";
import HaraMatar from "./assets/HaraMatar.png";
import HaraMoongMixture from "./assets/HaraMoongMixture.png";
import HeengDana from "./assets/HeengDana.png";
import HeengMahin from "./assets/HeengMahin.png";
import KajuDalmoth from "./assets/KajuDalmoth.png";
import KhattaMeetha from "./assets/KhattaMeetha.png";
import LehsunMixture from "./assets/LehsunMixture.png";
import MoongDal from "./assets/MoongDal.png";
import MasoorDal from "./assets/masoordal.png";
import Navratan from "./assets/Navratan.png";
import PaneerBhujiya from "./assets/PaneerBhujiya.png";
import PotatoChips from "./assets/PotatoChips.png";
import GarlicSev from "./assets/Garlic Sev.png";
import SemBeej from "./assets/SemBeej.png";
import MasalaCasew from "./assets/MasalaCasew.png";

/* -------------------------
   PRODUCTS
------------------------- */

const PRODUCTS = [
  // =========================
  // TOP 9 PRODUCTS
  // =========================

  {
    id: 1,
    name: "Masala Cashew",
    category: "Premium",
    desc: "Spicy roasted cashews with authentic masala.",
    img: MasalaCasew,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 160 },
      { weight: "200g", price: 320 },
      { weight: "400g", price: 640 },
    ],
  },

  {
    id: 2,
    name: "Sem Seeds",
    category: "Premium",
    desc: "Premium roasted seeds with light salt.",
    img: SemBeej,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 140 },
      { weight: "200g", price: 280 },
      { weight: "400g", price: 560 },
    ],
  },

  {
    id: 3,
    name: "Kaju Badam Mixture",
    category: "Premium",
    desc: "Rich mixture loaded with crunchy cashews and almonds.",
    img: BadamMixture,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 100 },
      { weight: "200g", price: 200 },
      { weight: "400g", price: 400 },
    ],
  },

  {
    id: 4,
    name: "Masoor Dal",
    category: "Namkeen",
    desc: "Extra-spicy masoor dal with bold black pepper and aromatic heeng.",
    img: MasoorDal,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 5,
    name: "Hing Mahin",
    category: "Namkeen",
    desc: "Fine and crunchy sev infused with aromatic heeng.",
    img: HeengMahin,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 6,
    name: "Besan Dana",
    category: "Snacks",
    desc: "Crunchy fried besan pearls.",
    img: BesanDaana,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 7,
    name: "Chana Dal",
    category: "Snacks",
    desc: "Crunchy roasted chana dal.",
    img: ChanaDal,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 8,
    name: "Masala Peanuts",
    category: "Snacks",
    desc: "Spicy roasted peanuts.",
    img: HeengDana,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 9,
    name: "Garlic Sev",
    category: "Namkeen",
    desc: "Light and crunchy garlic-flavored sev.",
    img: GarlicSev,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  // =========================
  // REMAINING PRODUCTS
  // =========================

  {
    id: 10,
    name: "Shahi Mixture",
    category: "Namkeen",
    desc: "Thin sev blended with premium cashews.",
    img: ShahiMixture,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 80 },
      { weight: "200g", price: 160 },
      { weight: "400g", price: 320 },
    ],
  },

  {
    id: 11,
    name: "Bhujiya Sev",
    category: "Bhujiya",
    desc: "Crispy, golden, authentic flavor.",
    img: BesanBhujiya,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 12,
    name: "Aloo Bhujiya",
    category: "Bhujiya",
    desc: "Potato-based crunchy snack.",
    img: AlooBhujiya,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 13,
    name: "Moong Dal",
    category: "Snacks",
    desc: "Crispy fried moong dal.",
    img: MoongDal,
    isOffer: true,
    snacksSale: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 14,
    name: "Heeng Sev",
    category: "Bhujiya",
    desc: "Aromatic hing-flavored sev with extra crunch.",
    img: HeengSev,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 15,
    name: "Navratan Mix",
    category: "Mixtures",
    desc: "Royal mix of 9 premium ingredients.",
    img: Navratan,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 16,
    name: "Khatta Meetha",
    category: "Mixtures",
    desc: "Sweet and tangy classic namkeen.",
    img: KhattaMeetha,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 17,
    name: "Besan Bhujiya",
    category: "Bhujiya",
    desc: "Traditional besan bhujia with bold spices.",
    img: BesanBhujiya,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 18,
    name: "Besan Gathiya",
    category: "Namkeen",
    desc: "Soft yet crispy besan gathiya.",
    img: BesanGathiya,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 19,
    name: "Bhakarbadi",
    category: "Snacks",
    desc: "Spicy rolled snack with traditional masala.",
    img: Bhakharbadi,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 20,
    name: "Chana Jor Garam",
    category: "Namkeen",
    desc: "Flat fried spicy chana snack.",
    img: ChanaJorGaram,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 21,
    name: "Gadbad Mixture",
    category: "Mixtures",
    desc: "Fun mix of multiple crunchy elements.",
    img: Gadbad,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 22,
    name: "Hara Matar",
    category: "Snacks",
    desc: "Crispy fried green peas.",
    img: HaraMatar,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 23,
    name: "Hara Moong Mixture",
    category: "Mixtures",
    desc: "Protein-rich green moong snack.",
    img: HaraMoongMixture,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 24,
    name: "Cashew Mixture",
    category: "Namkeen",
    desc: "Premium dalmoth enriched with cashews.",
    img: KajuDalmoth,
    isOffer: true,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 60 },
      { weight: "200g", price: 120 },
      { weight: "400g", price: 240 },
    ],
  },

  {
    id: 25,
    name: "Garlic Mixture",
    category: "Mixtures",
    desc: "Garlic-flavored spicy mixture.",
    img: LehsunMixture,
    isOffer: false,
    outOfStock: true,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 26,
    name: "Paneer Bhujiya",
    category: "Bhujiya",
    desc: "Special bhujia with paneer flavor.",
    img: PaneerBhujiya,
    isOffer: false,
    outOfStock: false,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },

  {
    id: 27,
    name: "Potato Chips",
    category: "Snacks",
    desc: "Classic crispy salted potato chips.",
    img: PotatoChips,
    isOffer: true,
    snacksSale: true,
    outOfStock: true,
    packs: [
      { weight: "100g", price: 40 },
      { weight: "200g", price: 80 },
      { weight: "400g", price: 160 },
    ],
  },
];

/* -------------------------
   FAQ DATA
------------------------- */

const FAQS = [
  {
    q: "What type of oil is used to prepare Panchalveda namkeen?",
    a: "Every batch of Panchalveda namkeen is fried in 100% pure groundnut oil — never refined or reused oil. This gives our snacks a richer, more authentic flavour and makes them a healthier choice for you and your family.",
  },
  {
    q: "Are the dry fruits and nuts used in your premium range fresh?",
    a: "Yes. Our cashews, almonds, raisins and other dry fruits are sourced in small batches and checked for freshness before being added to any mixture. This ensures every bite of our premium range tastes crunchy and full of natural flavour.",
  },
  {
    q: "How much heeng (asafoetida) do you use in your namkeen?",
    a: "We use a generous amount of premium-quality heeng — one of the key reasons our namkeen has such a distinctive aroma and taste. The heeng is blended with traditional spices using recipes perfected over generations in Farrukhabad.",
  },
  {
    q: "How should I store my Panchalveda snacks to keep them fresh?",
    a: "Store the packs in a cool, dry place away from direct sunlight. Once opened, transfer the namkeen to an airtight container and consume within 2–3 weeks for the best taste and crunch. Never refrigerate — moisture can make the snacks soft.",
  },
  {
    q: "Do you offer bulk orders for weddings, festivals and corporate gifting?",
    a: "Yes, we do. Panchalveda offers attractive bulk pricing and customisable gift hampers for weddings, festivals, corporate events and return gifts. Call us at +91-8174900977 or write to contact@panchalveda.com and our team will help you build a hamper that fits your occasion.",
  },
];

/* -------------------------
   COMPONENT
------------------------- */

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart = [], addToCart, removeFromCart } = useCart();

  const categories = [
    "All",
    "Namkeen",
    "Bhujiya",
    "Mixtures",
    "Snacks",
    "Premium",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showOnlyOffers, setShowOnlyOffers] = useState(false);

  const [modalProduct, setModalProduct] = useState(null);
  const [selectedPack, setSelectedPack] = useState(null);

  const [toast, setToast] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  /* TOAST */
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  /* PROMO */
  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === "SNACKS10") {
      setPromoApplied(true);
      showToast("SNACKS10 applied — 10% OFF selected snacks!");
    } else {
      setPromoApplied(false);
      showToast("Invalid promo code.");
    }
  };

  const isPromoEligible = (product) =>
    promoApplied && product.category === "Snacks" && product.snacksSale;

  const getDiscountedPrice = (product, price) =>
    isPromoEligible(product) ? Math.round(price * 0.9) : price;

  /* CART HIGHLIGHT */
  useEffect(() => {
    if (location.state?.productId) {
      const productId = location.state.productId;
      setTimeout(() => {
        const productElement = document.querySelector(
          `[data-product-id="${productId}"]`
        );
        if (productElement) {
          productElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          productElement.classList.add("highlight-product");
          setTimeout(() => {
            productElement.classList.remove("highlight-product");
          }, 3000);
        }
      }, 500);
    }
  }, [location]);

  /* CART CHECK */
  const isInCart = (productId, weight) =>
    cart.some((item) => item.cartId === `${productId}-${weight}`);

  /* ADD TO CART */
  const handleAddToCart = (product, pack) => {
    if (product.outOfStock) {
      showToast("This product is currently out of stock");
      return;
    }
    const finalPrice = getDiscountedPrice(product, pack.price);
    const cartItem = {
      ...product,
      cartId: `${product.id}-${pack.weight}`,
      weight: pack.weight,
      price: finalPrice,
      originalPrice: pack.price,
      promoCode: isPromoEligible(product) ? "SNACKS10" : null,
      promoDiscount: isPromoEligible(product) ? 10 : 0,
      quantity: 1,
    };
    addToCart(cartItem);
    if (isPromoEligible(product)) {
      showToast(`${product.name} added with 10% OFF (${pack.weight})`);
    } else {
      showToast(`${product.name} (${pack.weight}) added to cart`);
    }
  };

  /* TEXT SNIPPET */
  const getSnippet = (text, words = 9) =>
    text.split(" ").length <= words
      ? text
      : text.split(" ").slice(0, words).join(" ") + "…";

  /* FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (showOnlyOffers) {
      list = list.filter((p) => p.isOffer || p.snacksSale);
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
      );
    }
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "price-low")
      list.sort((a, b) => a.packs[0].price - b.packs[0].price);
    if (sortBy === "price-high")
      list.sort((a, b) => b.packs[0].price - a.packs[0].price);
    return list;
  }, [activeCategory, searchTerm, sortBy, showOnlyOffers]);

  /* OPEN PRODUCT */
  const openProduct = (product) => {
    if (product.outOfStock) {
      showToast("This product is currently out of stock");
      return;
    }
    setModalProduct(product);
    setSelectedPack(product.packs[0]);
  };

  return (
    <div className="product-page">
      {toast && (
        <div className="toast">
          <span className="toast-icon">✓</span>
          <span>{toast}</span>
        </div>
      )}

      {/* OFFER MARQUEE */}
      <div className="offer-marquee">
        <div className="marquee-track">
          <span>🔥 NEW SALE</span>
          <span>10% OFF SELECTED SNACKS</span>
          <span>
            USE CODE: <strong>SNACKS10</strong>
          </span>
          <span>🥜 MOONG DAL</span>
          <span>🥔 POTATO CHIPS</span>
          <span>LIMITED OFFER</span>
          <span>🔥 NEW SALE</span>
          <span>10% OFF SELECTED SNACKS</span>
          <span>
            USE CODE: <strong>SNACKS10</strong>
          </span>
          <span>🥜 MOONG DAL</span>
          <span>🥔 POTATO CHIPS</span>
          <span>LIMITED OFFER</span>
        </div>
      </div>

      {/* HERO */}
      <section className="product-hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="hero-ring ring-one"></div>
        <div className="hero-ring ring-two"></div>
        <div className="floating-snack snack-one">🥜</div>
        <div className="floating-snack snack-two">🌶️</div>
        <div className="floating-snack snack-three">✨</div>
        <div className="floating-snack snack-four">🥔</div>

        <div className="hero-content">
          <span className="hero-small-title fade-up">
            PANCHALVEDA AGROFOODS
          </span>

          <h1 className="fade-up delay-1">
            Taste of Bharat,
            <br />
            <span>Made With Love.</span>
          </h1>

          <p className="hero-description fade-up delay-2">
            Authentic Indian namkeen, premium mixtures
            <br />
            and crunchy snacks crafted for every occasion.
          </p>

          <div className="hero-buttons fade-up delay-3">
            <a href="#products" className="hero-btn primary">
              Explore Products
              <span>↓</span>
            </a>
            <a href="#offers" className="hero-btn secondary">
              View Offers
              <span>✦</span>
            </a>
          </div>

          <div className="hero-stats fade-up delay-4">
            <div>
              <strong>25+</strong>
              <span>Products</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Authentic Taste</span>
            </div>
            <div>
              <strong>Fresh</strong>
              <span>Every Batch</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64 C240,120 480,0 720,64 C960,128 1200,20 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* PROMO */}
      <section className="promo-section" id="offers">
        <div className="promo-card">
          <div className="promo-left">
            <span className="promo-tag">LIMITED TIME SALE</span>
            <h2>
              Crunch More.
              <span> Save More.</span>
            </h2>
            <p>
              Get <strong>10% OFF</strong> on selected snacks with our special
              code.
            </p>
            <div className="promo-code-display">
              <span>SNACKS10</span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText("SNACKS10");
                  showToast("Promo code copied!");
                }}
              >
                Copy Code
              </button>
            </div>
            <small>*Offer applies only to selected 25% of Snack products.</small>
          </div>
          <div className="promo-right">
            <div className="promo-circle">
              <strong>10%</strong>
              <span>OFF</span>
            </div>
            <div className="promo-stars">✦ ✧ ✦</div>
          </div>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="product-controls">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>
            Find Your <em>Favourite</em>
          </h2>
          <p>
            From classic bhujia to premium dry snacks, discover your perfect
            crunch.
          </p>
        </div>

        <div className="category-wrapper">
          <div className="category-title">Browse Categories</div>
          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === activeCategory ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-panel">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search your favourite snack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="clear-search"
              >
                ×
              </button>
            )}
          </div>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Sort: Popular</option>
            <option value="name">Sort: Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <label className="offer-check">
            <input
              type="checkbox"
              checked={showOnlyOffers}
              onChange={(e) => setShowOnlyOffers(e.target.checked)}
            />
            <span className="custom-checkbox"></span>
            Offers only
          </label>
        </div>

        <div className="promo-input-row">
          <div className="promo-input-label">
            <span>🎁</span>
            Have a promo code?
          </div>
          <div className="promo-input-box">
            <input
              type="text"
              placeholder="Enter code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            />
            <button onClick={applyPromo}>
              {promoApplied ? "Applied ✓" : "Apply"}
            </button>
          </div>
          {promoApplied && (
            <div className="promo-success">10% OFF active on eligible snacks</div>
          )}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">
        <div className="products-top-line">
          <span>{filteredProducts.length} products</span>
          {activeCategory !== "All" && (
            <button
              className="reset-filter"
              onClick={() => setActiveCategory("All")}
            >
              Clear category ×
            </button>
          )}
        </div>

        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <div className="no-results-card">
              <div className="no-results-icon">🔍</div>
              <h3>No snacks found</h3>
              <p>Try another search or category.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                Show All Products
              </button>
            </div>
          ) : (
            filteredProducts.map((p) => {
              const basePrice = p.packs[0].price;
              const salePrice = getDiscountedPrice(p, basePrice);
              const isOOS = p.outOfStock;

              return (
                <article
                  className={`product-card ${
                    p.snacksSale && promoApplied ? "sale-product" : ""
                  } ${isOOS ? "out-of-stock" : ""}`}
                  key={`${p.id}-${p.name}`}
                  data-product-id={p.id}
                  id={`product-${p.id}`}
                >
                  <div
                    className="product-img-wrap"
                    onClick={() => !isOOS && openProduct(p)}
                  >
                    <div className="image-glow"></div>
                    <img src={p.img} alt={p.name} />
                    {p.isOffer && !isOOS && <span className="badge">OFFER</span>}
                    {p.snacksSale && !isOOS && (
                      <span className="sale-badge">10% OFF</span>
                    )}
                    {isOOS && <span className="oos-badge">OUT OF STOCK</span>}
                    {!isOOS && (
                      <button
                        className="quick-view"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProduct(p);
                        }}
                      >
                        Quick View
                      </button>
                    )}
                  </div>

                  <div className="product-card-content">
                    <span className="product-category">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p className="desc">{getSnippet(p.desc)}</p>

                    {!isOOS && (
                      <div className="price-row">
                        {salePrice !== basePrice ? (
                          <>
                            <span className="old-price">₹{basePrice}</span>
                            <span className="price sale-price">
                              ₹{salePrice}
                            </span>
                          </>
                        ) : (
                          <span className="price">₹{basePrice}</span>
                        )}
                        <span className="price-label">
                          / {p.packs[0].weight}
                        </span>
                      </div>
                    )}

                    {isOOS ? (
                      <button className="view-product-btn oos-btn" disabled>
                        Out of Stock
                      </button>
                    ) : (
                      <button
                        className="view-product-btn"
                        onClick={() => openProduct(p)}
                      >
                        View Details
                        <span>→</span>
                      </button>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-section">
        <div className="trust-item">
          <div>🌾</div>
          <strong>Quality Ingredients</strong>
          <span>Carefully selected</span>
        </div>
        <div className="trust-item">
          <div>👨‍🍳</div>
          <strong>Authentic Recipes</strong>
          <span>Traditional flavours</span>
        </div>
        <div className="trust-item">
          <div>✨</div>
          <strong>Fresh &amp; Crunchy</strong>
          <span>Made for every bite</span>
        </div>
        <div className="trust-item">
          <div>📦</div>
          <strong>Secure Packaging</strong>
          <span>Freshness protected</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="pfaq-section">
        <div className="pfaq-header">
          <span className="pfaq-tag">HAVE QUESTIONS?</span>
          <h2 className="pfaq-title">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="pfaq-subtitle">
            Everything you need to know about our ingredients, freshness and
            offers.
          </p>
        </div>

        <div className="pfaq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`pfaq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="pfaq-question"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="pfaq-question-text">{faq.q}</span>
                  <span className="pfaq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="pfaq-answer">
                  <div className="pfaq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCT MODAL */}
      {modalProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setModalProduct(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close"
              onClick={() => setModalProduct(null)}
            >
              ×
            </button>

            <div className="modal-image-area">
              <div className="modal-image-glow"></div>
              <img src={modalProduct.img} alt={modalProduct.name} />
              {modalProduct.snacksSale && (
                <span className="modal-sale-badge">
                  10% OFF WITH SNACKS10
                </span>
              )}
            </div>

            <div className="modal-content">
              <span className="modal-category">
                {modalProduct.category}
              </span>
              <h3>{modalProduct.name}</h3>
              <p className="modal-description">{modalProduct.desc}</p>

              <div className="pack-heading">Choose Your Pack</div>
              <div className="pack-options">
                {modalProduct.packs.map((pack) => {
                  const discountedPrice = getDiscountedPrice(
                    modalProduct,
                    pack.price
                  );
                  return (
                    <button
                      key={pack.weight}
                      className={`pack-card ${
                        selectedPack?.weight === pack.weight
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => setSelectedPack(pack)}
                    >
                      <strong>{pack.weight}</strong>
                      {discountedPrice !== pack.price ? (
                        <span>
                          <del>₹{pack.price}</del> ₹{discountedPrice}
                        </span>
                      ) : (
                        <span>₹{pack.price}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedPack && (
                <div className="selected-price">
                  <span>Selected Pack</span>
                  <strong>{selectedPack.weight}</strong>
                  <div>
                    {getDiscountedPrice(
                      modalProduct,
                      selectedPack.price
                    ) !== selectedPack.price && (
                      <del>₹{selectedPack.price}</del>
                    )}
                    <strong className="final-price">
                      ₹
                      {getDiscountedPrice(
                        modalProduct,
                        selectedPack.price
                      )}
                    </strong>
                  </div>
                </div>
              )}

              {selectedPack &&
                (isInCart(modalProduct.id, selectedPack.weight) ? (
                  <div className="cart-actions-group">
                    <button
                      className="btn open"
                      onClick={() => navigate("/cart")}
                    >
                      🛍 Open Cart
                    </button>
                    <button
                      className="btn remove-pack"
                      onClick={() => {
                        removeFromCart(
                          `${modalProduct.id}-${selectedPack.weight}`
                        );
                        showToast("Product removed from cart");
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <button
                    className="modal-add-btn"
                    onClick={() =>
                      handleAddToCart(modalProduct, selectedPack)
                    }
                  >
                    🛒 Add To Cart
                    <span>→</span>
                  </button>
                ))}

              {modalProduct.snacksSale && (
                <div className="modal-promo-note">
                  🎁 Use <strong>SNACKS10</strong> for 10% OFF this selected
                  snack.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}