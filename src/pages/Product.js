// import React, { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Product.css";

// import HeengSev from "./assets/HeengSev.png";
// import BadamMixture from "./assets/BadamMixture.png";
// import AlooBhujiya from "./assets/AlooBhujiya.png";
// import BesanBhujiya from "./assets/BesanBhujiya.png";
// import BesanDaana from "./assets/BesanDaana.png";
// import BesanGathiya from "./assets/BesanGathiya.png";
// import Bhakharbadi from "./assets/Bhakharbadi.png";
// import CasewMaheen from "./assets/CasewMaheen.png";
// import ChanaDal from "./assets/ChanaDal.png";
// import ChanaJorGaram from "./assets/ChanaJorGaram.png";
// import GadbadMixture from "./assets/GadbadMixture.png";
// import HaraMatar from "./assets/HaraMatar.png";
// import HaraMoongMixture from "./assets/HaraMoongMixture.png";
// import HeengDana from "./assets/HeengDana.png";
// import HeengMahin from "./assets/HeengMahin.png";
// import KajuDalmoth from "./assets/KajuDalmoth.png";
// import KhattaMeetha from "./assets/KhattaMeetha.png";
// import LehsunMixture from "./assets/LehsunMixture.png";
// import MoongDal from "./assets/MoongDal.png";
// import Navratan from "./assets/Navratan.png";
// import PaneerBhujiya from "./assets/PaneerBhujiya.png";
// import PotatoChips from "./assets/PotatoChips.png";
// import PunjabiTadka from "./assets/PunjabiTadka.png";
// import SemBeej from "./assets/SemBeej.png";

// export default function Product() {
//   const navigate = useNavigate();
//   const { cart = [], addToCart } = useCart();

//   const categories = ["All", "Namkeen", "Bhujiya", "Mixtures", "Snacks"];
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("popular");
//   const [showOnlyOffers, setShowOnlyOffers] = useState(false);
//   const [modalProduct, setModalProduct] = useState(null);

//   const isInCart = (id) => cart.some((item) => item.id === id);
//   const handleAddToCart = (product) => addToCart({ ...product, qty: 1 });
//   const getSnippet = (text, words = 7) =>
//     text.split(" ").length <= words
//       ? text
//       : text.split(" ").slice(0, words).join(" ") + "…";

//   const filteredProducts = useMemo(() => {
//     const products = [
//       { id: 1, name: "Namkeen Mix", category: "Mixtures", desc: "A perfect blend of spices and crunch.", weight: "400g", price: 120, img: GadbadMixture, isOffer: true },
//       { id: 2, name: "Bhujiya Sev", category: "Bhujiya", desc: "Crispy, golden, authentic flavor.", weight: "400g", price: 90, img: BesanBhujiya, isOffer: false },
//       { id: 3, name: "Aloo Bhujiya", category: "Bhujiya", desc: "Potato-based crunchy snack.", weight: "450g", price: 100, img: AlooBhujiya, isOffer: false },
//       { id: 4, name: "Moong Dal", category: "Snacks", desc: "Crispy fried moong dal.", weight: "400g", price: 110, img: MoongDal, isOffer: false },
//       { id: 5, name: "Masala Peanuts", category: "Snacks", desc: "Spicy roasted peanuts.", weight: "400g", price: 130, img: HeengDana, isOffer: true },
//       { id: 6, name: "Punjabi Tadka", category: "Namkeen", desc: "Light & crunchy tea-time snack.", weight: "400g", price: 115, img: PunjabiTadka, isOffer: false },
//       { id: 7, name: "Navratan Mix", category: "Mixtures", desc: "Royal mix of 9 premium ingredients.", weight: "400g", price: 125, img: Navratan, isOffer: false },
//       { id: 8, name: "Khatta Meetha", category: "Mixtures", desc: "Sweet & tangy classic namkeen.", weight: "400g", price: 95, img: KhattaMeetha, isOffer: false },
//       { id: 9, name: "Sem Seeds", category: "Namkeen", desc: "Premium roasted cashews with light salt.", weight: "200g", price: 220, img: SemBeej, isOffer: false },
//       { id: 11, name: "Heeng Sev", category: "Bhujiya", desc: "Aromatic hing-flavored sev with extra crunch.", weight: "400g", price: 105, img: HeengSev, isOffer: false },
//       { id: 12, name: "Badam Mixture", category: "Mixtures", desc: "Rich mixture loaded with crunchy almonds.", weight: "400g", price: 150, img: BadamMixture, isOffer: false },
//       { id: 13, name: "Besan Bhujiya", category: "Bhujiya", desc: "Traditional besan bhujia with bold spices.", weight: "400g", price: 95, img: BesanBhujiya, isOffer: false },
//       { id: 14, name: "Besan Daana", category: "Snacks", desc: "Crunchy fried besan pearls.", weight: "400g", price: 90, img: BesanDaana, isOffer: false },
//       { id: 15, name: "Besan Gathiya", category: "Namkeen", desc: "Soft yet crispy besan gathiya.", weight: "400g", price: 110, img: BesanGathiya, isOffer: false },
//       { id: 16, name: "Bhakarbadi", category: "Snacks", desc: "Spicy rolled snack with traditional masala.", weight: "400g", price: 120, img: Bhakharbadi, isOffer: false },
//       { id: 17, name: "Kaju Maheen", category: "Namkeen", desc: "Thin sev blended with premium cashews.", weight: "400g", price: 160, img: CasewMaheen, isOffer: true },
//       { id: 18, name: "Chana Dal", category: "Snacks", desc: "Crunchy roasted chana dal.", weight: "400g", price: 100, img: ChanaDal, isOffer: false },
//       { id: 19, name: "Chana Jor Garam", category: "Namkeen", desc: "Flat fried spicy chana snack.", weight: "400g", price: 95, img: ChanaJorGaram, isOffer: false },
//       { id: 20, name: "Gadbad Mixture", category: "Mixtures", desc: "Fun mix of multiple crunchy elements.", weight: "400g", price: 130, img: GadbadMixture, isOffer: false },
//       { id: 21, name: "Hara Matar", category: "Snacks", desc: "Crispy fried green peas.", weight: "400g", price: 90, img: HaraMatar, isOffer: true },
//       { id: 22, name: "Hara Moong Mixture", category: "Mixtures", desc: "Protein-rich green moong snack.", weight: "400g", price: 115, img: HaraMoongMixture, isOffer: false },
//       { id: 23, name: "Heeng Dana", category: "Snacks", desc: "Hing flavored crunchy dana.", weight: "400g", price: 95, img: HeengDana, isOffer: false },
//       { id: 24, name: "Heeng Maheen", category: "Namkeen", desc: "Fine sev with strong hing aroma.", weight: "400g", price: 100, img: HeengMahin, isOffer: false },
//       { id: 25, name: "Kaju Dalmoth", category: "Namkeen", desc: "Premium dalmoth enriched with cashews.", weight: "400g", price: 170, img: KajuDalmoth, isOffer: true },
//       { id: 26, name: "Lehsun Mixture", category: "Mixtures", desc: "Garlic-flavored spicy mixture.", weight: "400g", price: 120, img: LehsunMixture, isOffer: false },
//       { id: 27, name: "Paneer Bhujiya", category: "Bhujiya", desc: "Special bhujia with paneer flavor.", weight: "400g", price: 140, img: PaneerBhujiya, isOffer: false },
//       { id: 28, name: "Potato Chips", category: "Snacks", desc: "Classic crispy salted potato chips.", weight: "300g", price: 80, img: PotatoChips, isOffer: true },
//     ];

//     let list = [...products];
//     if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
//     if (showOnlyOffers) list = list.filter((p) => p.isOffer);
//     if (searchTerm.trim()) {
//       const q = searchTerm.toLowerCase();
//       list = list.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
//     }
//     if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
//     if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
//     if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
//     return list;
//   }, [activeCategory, searchTerm, sortBy, showOnlyOffers]);

//   return (
//     <div className="product-page">
//       <section className="product-hero clean">
//         <h1>Our Products</h1>
//         <p>Taste of Bharat in Every Bite • Aprakashi Foods</p>
//       </section>

//       <section className="product-controls">
//         <div className="categories">
//           {categories.map((cat) => (
//             <button key={cat} className={cat === activeCategory ? "active" : ""} onClick={() => setActiveCategory(cat)}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="filters">
//           <input type="search" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//             <option value="popular">Popular</option>
//             <option value="price-asc">Price: Low → High</option>
//             <option value="price-desc">Price: High → Low</option>
//             <option value="name">Name</option>
//           </select>
//           <label className="offer-check">
//             <input type="checkbox" checked={showOnlyOffers} onChange={(e) => setShowOnlyOffers(e.target.checked)} />
//             Offers only
//           </label>
//         </div>
//       </section>

//       <section className="product-grid">
//         {filteredProducts.length === 0 ? (
//           <p className="no-results">No products found.</p>
//         ) : (
//           filteredProducts.map((p) => (
//             <div className="product-card" key={p.id}>
//               <div className="product-img-wrap" onClick={() => setModalProduct(p)}>
//                 <img src={p.img} alt={p.name} />
//                 {p.isOffer && <span className="badge">Offer</span>}
//               </div>
//               <h3>{p.name}</h3>
//               <p className="price">₹{p.price} • {p.weight}</p>
//               <p className="desc">{getSnippet(p.desc)}</p>

//               <div className="actions">
//                 {isInCart(p.id) ? (
//                   <button className="btn open" onClick={() => navigate("/cart")}>🛍 Open Cart</button>
//                 ) : (
//                   <button className="btn add" onClick={() => handleAddToCart(p)}>🛒 Add to Cart</button>
//                 )}
//                 <button className="btn outline" onClick={() => setModalProduct(p)}>View Details</button>
//               </div>
//             </div>
//           ))
//         )}
//       </section>

//       {modalProduct && (
//         <div className="modal-backdrop" onClick={() => setModalProduct(null)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <button className="close" onClick={() => setModalProduct(null)}>×</button>
//             <img src={modalProduct.img} alt={modalProduct.name} />
//             <h3>{modalProduct.name}</h3>
//             <p>₹{modalProduct.price} • {modalProduct.weight}</p>
//             <p>{modalProduct.desc}</p>
//             {isInCart(modalProduct.id) ? (
//               <button className="btn open" onClick={() => navigate("/cart")}>Open Cart</button>
//             ) : (
//               <button className="btn add" onClick={() => { handleAddToCart(modalProduct); setModalProduct(null); }}>Add to Cart</button>
//             )}
//             {/* <button className="btn view-all" onClick={() => navigate("/all-products")}>View All Products →</button> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Product.css";

import HeengSev from "./assets/HeengSev.png";
import BadamMixture from "./assets/BadamMixture.png";
import AlooBhujiya from "./assets/AlooBhujiya.png";
import BesanBhujiya from "./assets/BesanBhujiya.png";
import BesanDaana from "./assets/BesanDaana.png";
import BesanGathiya from "./assets/BesanGathiya.png";
import Bhakharbadi from "./assets/Bhakharbadi.png";
import CasewMaheen from "./assets/CasewMaheen.png";
import ChanaDal from "./assets/ChanaDal.png";
import ChanaJorGaram from "./assets/ChanaJorGaram.png";
import GadbadMixture from "./assets/GadbadMixture.png";
import HaraMatar from "./assets/HaraMatar.png";
import HaraMoongMixture from "./assets/HaraMoongMixture.png";
import HeengDana from "./assets/HeengDana.png";
import HeengMahin from "./assets/HeengMahin.png";
import KajuDalmoth from "./assets/KajuDalmoth.png";
import KhattaMeetha from "./assets/KhattaMeetha.png";
import LehsunMixture from "./assets/LehsunMixture.png";
import MoongDal from "./assets/MoongDal.png";
import Navratan from "./assets/Navratan.png";
import PaneerBhujiya from "./assets/PaneerBhujiya.png";
import PotatoChips from "./assets/PotatoChips.png";
import PunjabiTadka from "./assets/PunjabiTadka.png";
import SemBeej from "./assets/SemBeej.png";
import MasalaCasew from "./assets/MasalaCasew.png";
export default function Product() {

  const navigate = useNavigate();

 const {
  cart = [],
  addToCart,
  removeFromCart,
} = useCart();

  const categories = [
    "All",
    "Namkeen",
    "Bhujiya",
    "Mixtures",
    "Snacks",
    "Premium",
  ];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [sortBy, setSortBy] =
    useState("popular");

  const [showOnlyOffers, setShowOnlyOffers] =
    useState(false);

  const [modalProduct, setModalProduct] =
    useState(null);

  const [selectedPack, setSelectedPack] =
    useState(null);

  const [toast, setToast] =
    useState("");

  const showToast = (message) => {

    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  // IMPORTANT FIX
  const isInCart = (productId, weight) => {

    const cartId =
      `${productId}-${weight}`;

    return cart.some(
      (item) =>
        item.cartId === cartId
    );
  };

  // IMPORTANT FIX
  const handleAddToCart = (
    product,
    pack
  ) => {

    const cartItem = {

      ...product,

      cartId:
        `${product.id}-${pack.weight}`,

      weight: pack.weight,

      price: pack.price,

      quantity: 1,
    };

    addToCart(cartItem);

    showToast(
      `${product.name} (${pack.weight}) added to cart`
    );
  };

  const getSnippet = (
    text,
    words = 7
  ) =>
    text.split(" ").length <= words
      ? text
      : text
          .split(" ")
          .slice(0, words)
          .join(" ") + "…";

  const filteredProducts = useMemo(() => {

    const products = [

      {
  id: 1,
  name: "Namkeen Mix",
  category: "Mixtures",
  desc:
    "A perfect blend of spices and crunch.",
  img: GadbadMixture,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 2,
  name: "Bhujiya Sev",
  category: "Bhujiya",
  desc:
    "Crispy, golden, authentic flavor.",
  img: BesanBhujiya,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 3,
  name: "Aloo Bhujiya",
  category: "Bhujiya",
  desc:
    "Potato-based crunchy snack.",
  img: AlooBhujiya,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 4,
  name: "Moong Dal",
  category: "Snacks",
  desc:
    "Crispy fried moong dal.",
  img: MoongDal,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 5,
  name: "Masala Peanuts",
  category: "Snacks",
  desc:
    "Spicy roasted peanuts.",
  img: HeengDana,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 6,
  name: "Punjabi Tadka",
  category: "Namkeen",
  desc:
    "Light & crunchy tea-time snack.",
  img: PunjabiTadka,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 7,
  name: "Heeng Sev",
  category: "Bhujiya",
  desc:
    "Aromatic hing-flavored sev with extra crunch.",
  img: HeengSev,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 9,
  name: "Navratan Mix",
  category: "Mixtures",
  desc: "Royal mix of 9 premium ingredients.",
  img: Navratan,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 10,
  name: "Khatta Meetha",
  category: "Mixtures",
  desc: "Sweet & tangy classic namkeen.",
  img: KhattaMeetha,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 11,
  name: "Sem Seeds",
  category: "Premium",
  desc: "Premium roasted cashews with light salt.",
  img: SemBeej,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 140,
    },
    {
      weight: "200g",
      price: 280,
    },
    {
      weight: "400g",
      price: 560,
    },
  ],
},

{
  id: 12,
  name: "Besan Bhujiya",
  category: "Bhujiya",
  desc: "Traditional besan bhujia with bold spices.",
  img: BesanBhujiya,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 13,
  name: "Besan Daana",
  category: "Snacks",
  desc: "Crunchy fried besan pearls.",
  img: BesanDaana,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 14,
  name: "Besan Gathiya",
  category: "Namkeen",
  desc: "Soft yet crispy besan gathiya.",
  img: BesanGathiya,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 15,
  name: "Bhakarbadi",
  category: "Snacks",
  desc: "Spicy rolled snack with traditional masala.",
  img: Bhakharbadi,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 16,
  name: "Kaju Maheen",
  category: "Namkeen",
  desc: "Thin sev blended with premium cashews.",
  img: CasewMaheen,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 17,
  name: "Chana Dal",
  category: "Snacks",
  desc: "Crunchy roasted chana dal.",
  img: ChanaDal,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 18,
  name: "Chana Jor Garam",
  category: "Namkeen",
  desc: "Flat fried spicy chana snack.",
  img: ChanaJorGaram,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 19,
  name: "Gadbad Mixture",
  category: "Mixtures",
  desc: "Fun mix of multiple crunchy elements.",
  img: GadbadMixture,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 20,
  name: "Hara Matar",
  category: "Snacks",
  desc: "Crispy fried green peas.",
  img: HaraMatar,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 21,
  name: "Hara Moong Mixture",
  category: "Mixtures",
  desc: "Protein-rich green moong snack.",
  img: HaraMoongMixture,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 22,
  name: "Heeng Dana",
  category: "Snacks",
  desc: "Hing flavored crunchy dana.",
  img: HeengDana,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 23,
  name: "Heeng Maheen",
  category: "Namkeen",
  desc: "Fine sev with strong hing aroma.",
  img: HeengMahin,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 24,
  name: "Kaju Mixture",
  category: "Namkeen",
  desc: "Premium dalmoth enriched with cashews.",
  img: KajuDalmoth,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 60,
    },
    {
      weight: "200g",
      price: 120,
    },
    {
      weight: "400g",
      price: 240,
    },
  ],
},

{
  id: 25,
  name: "Lehsun Mixture",
  category: "Mixtures",
  desc: "Garlic-flavored spicy mixture.",
  img: LehsunMixture,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 26,
  name: "Paneer Bhujiya",
  category: "Bhujiya",
  desc: "Special bhujia with paneer flavor.",
  img: PaneerBhujiya,
  isOffer: false,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},

{
  id: 27,
  name: "Potato Chips",
  category: "Snacks",
  desc: "Classic crispy salted potato chips.",
  img: PotatoChips,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 40,
    },
    {
      weight: "200g",
      price: 80,
    },
    {
      weight: "400g",
      price: 160,
    },
  ],
},
{
  id: 28,
  name: "Masala Casew",
  category: "Premium",
  desc: "Classic crispy salted potato chips.",
  img: MasalaCasew,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 160,
    },
    {
      weight: "200g",
      price: 320,
    },
    {
      weight: "400g",
      price: 640,
    },
  ],
},
{
  id: 8,
  name: "Casew & Badam Mixture",
  category: "Premium",
  desc:
    "Rich mixture loaded with crunchy almonds.",
  img: BadamMixture,
  isOffer: true,

  packs: [
    {
      weight: "100g",
      price: 80,
    },
    {
      weight: "200g",
      price: 160,
    },
    {
      weight: "400g",
      price: 320,
    },
  ],
},
    ];
    let list = [...products];

    if (activeCategory !== "All") {

      list = list.filter(
        (p) =>
          p.category ===
          activeCategory
      );
    }

    if (showOnlyOffers) {

      list = list.filter(
        (p) => p.isOffer
      );
    }

    if (searchTerm.trim()) {

      const q =
        searchTerm.toLowerCase();

      list = list.filter(
        (p) =>
          p.name
            .toLowerCase()
            .includes(q) ||

          p.desc
            .toLowerCase()
            .includes(q)
      );
    }

    if (sortBy === "name") {

      list.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return list;

  }, [
    activeCategory,
    searchTerm,
    sortBy,
    showOnlyOffers,
  ]);

  return (

    <div className="product-page">

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      <section className="product-hero clean">

        <h1 className="fade-up delay-1">
          Our Products
        </h1>

        <p className="fade-up delay-2">
          Taste of Bharat in Every Bite
          • Aprakashi Foods
        </p>

      </section>

      <section className="product-controls">

        <div className="categories">

          {categories.map((cat) => (

            <button
              key={cat}
              className={
                cat === activeCategory
                  ? "active"
                  : ""
              }

              onClick={() =>
                setActiveCategory(cat)
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="filters">

          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}

            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
          />

          <select
            value={sortBy}

            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
          >

            <option value="popular">
              Popular
            </option>

            <option value="name">
              Name
            </option>

          </select>

          <label className="offer-check">

            <input
              type="checkbox"

              checked={
                showOnlyOffers
              }

              onChange={(e) =>
                setShowOnlyOffers(
                  e.target.checked
                )
              }
            />

            Offers only

          </label>
        </div>
      </section>

      <section className="product-grid">

        {filteredProducts.map((p) => (

          <div
            className="product-card"
            key={p.id}
          >

            <div
              className="product-img-wrap"

              onClick={() => {

                setModalProduct(p);

                setSelectedPack(
                  p.packs[0]
                );
              }}
            >

              <img
                src={p.img}
                alt={p.name}
              />

              {p.isOffer && (
                <span className="badge">
                  Offer
                </span>
              )}

            </div>

            <h3>{p.name}</h3>

            <p className="price">

              Starting From ₹
              {p.packs[0].price}

            </p>

            <p className="desc">
              {getSnippet(p.desc)}
            </p>

            <div className="actions">

              <button
                className="btn outline"

                onClick={() => {

                  setModalProduct(p);

                  setSelectedPack(
                    p.packs[0]
                  );
                }}
              >
                View Details
              </button>

            </div>
          </div>
        ))}
      </section>

      {modalProduct && (

        <div
          className="modal-backdrop"

          onClick={() =>
            setModalProduct(null)
          }
        >

          <div
            className="modal"

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"

              onClick={() =>
                setModalProduct(null)
              }
            >
              ×
            </button>

            <img
              src={modalProduct.img}
              alt={modalProduct.name}
            />

            <h3>
              {modalProduct.name}
            </h3>

            <p>
              {modalProduct.desc}
            </p>

            <div className="pack-options">

              {modalProduct.packs.map(
                (pack, index) => (

                  <div
                    key={index}

                    className={`pack-card ${
                      selectedPack?.weight ===
                      pack.weight
                        ? "selected"
                        : ""
                    }`}

                    onClick={() =>
                      setSelectedPack(pack)
                    }
                  >

                    <h4>
                      {pack.weight}
                    </h4>

                    <p>
                      ₹{pack.price}
                    </p>

                  </div>
                )
              )}
            </div>

            {selectedPack && (

              <>
                <div className="selected-price">

                  Selected:

                  <strong>

                    {" "}
                    {selectedPack.weight}

                    {" — "}

                    ₹
                    {selectedPack.price}

                  </strong>

                </div>

                {isInCart(
  modalProduct.id,
  selectedPack.weight
) ? (

  <div className="cart-actions-group">

    <button
      className="btn open"
      onClick={() =>
        navigate("/cart")
      }
    >
      🛍 Open Cart
    </button>

    <button
      className="btn remove-pack"
      onClick={() => {

        const cartId =
          `${modalProduct.id}-${selectedPack.weight}`;

        removeFromCart(cartId);
      }}
    >
      ❌ Remove
    </button>

  </div>

) : (

  <button
    className="btn add"
    onClick={() =>
      handleAddToCart(
        modalProduct,
        selectedPack
      )
    }
  >
    🛒 Add To Cart
  </button>

)}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}