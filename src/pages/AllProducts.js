



// // // // src/pages/Product.js
// // // import React from "react";
// // // import "./Product.css";

// // // const products = [
// // //   {
// // //     name: "Namkeen Mix",
// // //     desc: "A perfect blend of spices and crunch for all occasions.",
// // //     weight: "500g",
// // //     price: "₹120",
// // //     img: "images/namkeen-mix.jpg",
// // //   },
// // //   {
// // //     name: "Bhujia Sev",
// // //     desc: "Crispy, golden, and full of authentic flavor.",
// // //     weight: "400g",
// // //     price: "₹90",
// // //     img: "images/bhujia-sev.jpg",
// // //   },
// // //   {
// // //     name: "Aloo Bhujia",
// // //     desc: "Potato-based crunchy snack loved by everyone.",
// // //     weight: "450g",
// // //     price: "₹100",
// // //     img: "images/aloo-bhujia.jpg",
// // //   },
// // //   {
// // //     name: "Moong Dal",
// // //     desc: "Crispy fried moong dal with a touch of salt.",
// // //     weight: "400g",
// // //     price: "₹110",
// // //     img: "images/moong-dal.jpg",
// // //   },
// // //   {
// // //     name: "Masala Peanuts",
// // //     desc: "Spicy roasted peanuts for every snack lover.",
// // //     weight: "500g",
// // //     price: "₹130",
// // //     img: "images/masala-peanuts.jpg",
// // //   },
// // //   {
// // //     name: "Chiwda Mix",
// // //     desc: "Light, crunchy, and delicious snack for tea time.",
// // //     weight: "500g",
// // //     price: "₹115",
// // //     img: "images/chiwda-mix.jpg",
// // //   },
// // //   {
// // //     name: "Navratan Mix",
// // //     desc: "A royal mix of 9 tasty ingredients.",
// // //     weight: "500g",
// // //     price: "₹125",
// // //     img: "images/navratan-mix.jpg",
// // //   },
// // //   {
// // //     name: "Khatta Meetha",
// // //     desc: "Sweet and tangy flavor packed in one snack.",
// // //     weight: "400g",
// // //     price: "₹95",
// // //     img: "images/khatta-meetha.jpg",
// // //   },
// // //   {
// // //     name: "Salted Cashews",
// // //     desc: "Premium cashews roasted and lightly salted.",
// // //     weight: "250g",
// // //     price: "₹220",
// // //     img: "images/salted-cashews.jpg",
// // //   },
// // //   {
// // //     name: "Salted Almonds",
// // //     desc: "Crunchy almonds with a hint of salt.",
// // //     weight: "250g",
// // //     price: "₹210",
// // //     img: "images/salted-almonds.jpg",
// // //   },
// // // ];

// // // const Product = () => {
// // //   const whatsappNumber = "9560932132";

// // //   const handleBuyNow = (productName) => {
// // //     const message = `Hello! I am interested in buying ${productName}. Please provide more details.`;
// // //     window.open(
// // //       `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
// // //       "_blank"
// // //     );
// // //   };

// // //   return (
// // //     <div className="all-products-container">
// // //       <h1 className="page-title" align="center">✨ Our Products ✨</h1>
// // //       <p className="page-subtitle" align="center">
// // //         <span className="highlight" >
// // //           Taste of Bharat in Every Bite – Aprakashi Foods
// // //         </span>
// // //       </p>

// // //       <div className="product-grid">
// // //         {products.map((p, index) => (
// // //           <div key={index} className="product-card">
// // //             <img src={p.img} alt={p.name} />
// // //             <div className="product-info">
// // //               <h3>{p.name}</h3>
// // //               <p className="desc">{p.desc}</p>
// // //               <p className="price">
// // //                 {p.weight} | {p.price}
// // //               </p>
// // //               <button
// // //                 className="btn-primary"
// // //                 onClick={() => handleBuyNow(p.name)}
// // //               >
// // //                 Buy Now
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Product;



// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../context/CartContext";
// // import "./Product.css";

// // /* product images */
// // import HeengSev from "./assets/HeengSev.png";
// // import BadamMixture from "./assets/BadamMixture.png";
// // import AlooBhujiya from "./assets/AlooBhujiya.png";
// // import BesanBhujiya from "./assets/BesanBhujiya.png";
// // import BesanDaana from "./assets/BesanDaana.png";
// // import BesanGathiya from "./assets/BesanGathiya.png";
// // import Bhakharbadi from "./assets/Bhakharbadi.png";
// // import CasewMaheen from "./assets/CasewMaheen.png";
// // import ChanaDal from "./assets/ChanaDal.png";
// // import ChanaJorGaram from "./assets/ChanaJorGaram.png";
// // import GadbadMixture from "./assets/GadbadMixture.png";
// // import HaraMatar from "./assets/HaraMatar.png";
// // import HaraMoongMixture from "./assets/HaraMoongMixture.png";
// // import HeengDana from "./assets/HeengDana.png";
// // import HeengMahin from "./assets/HeengMahin.png";
// // import KajuDalmoth from "./assets/KajuDalmoth.png";
// // import KhattaMeetha from "./assets/KhattaMeetha.png";
// // import LehsunMixture from "./assets/LehsunMixture.png";
// // import MoongDal from "./assets/MoongDal.png";
// // import Navratan from "./assets/Navratan.png";
// // import PaneerBhujiya from "./assets/PaneerBhujiya.png";
// // import PotatoChips from "./assets/PotatoChips.png";
// // import PunjabiTadka from "./assets/PunjabiTadka.png";
// // import SemBeej from "./assets/SemBeej.png";

// // /* product data (later → API) */

// //   // { id: 1, name: "Namkeen Mix", desc: "A perfect blend of spices and crunch.", weight: "500g", price: 120, img: pic1 },
// //   // { id: 2, name: "Bhujia Sev", desc: "Crispy, golden, authentic flavor.", weight: "400g", price: 90, img: pic2 },
// //   // { id: 3, name: "Aloo Bhujia", desc: "Potato-based crunchy snack.", weight: "450g", price: 100, img: pic3 },
// //   // { id: 4, name: "Moong Dal", desc: "Crispy fried moong dal.", weight: "400g", price: 110, img: pic4 },
// //   // { id: 5, name: "Masala Peanuts", desc: "Spicy roasted peanuts.", weight: "500g", price: 130, img: pic5 },
// //   // { id: 6, name: "Chiwda Mix", desc: "Light & crunchy tea-time snack.", weight: "500g", price: 115, img: pic6 },
// //   // { id: 7, name: "Navratan Mix", desc: "Royal mix of 9 ingredients.", weight: "500g", price: 125, img: pic7 },
// //   // { id: 8, name: "Khatta Meetha", desc: "Sweet & tangy delight.", weight: "400g", price: 95, img: pic8 },
// //   // { id: 9, name: "Salted Cashews", desc: "Premium roasted cashews.", weight: "250g", price: 220, img: pic9 },
// //   // { id: 10, name: "Salted Almonds", desc: "Crunchy salted almonds.", weight: "250g", price: 210, img: pic10 },



// // const products = [
// //   {
// //     id: 1,
// //     name: "Namkeen Mix",
// //     desc: "A perfect blend of spices and crunch.",
// //     weight: "500g",
// //     price: 120,
// //     img: GadbadMixture,
// //   },
// //   {
// //     id: 2,
// //     name: "Bhujia Sev",
// //     desc: "Crispy, golden, authentic flavor.",
// //     weight: "400g",
// //     price: 90,
// //     img: BesanBhujiya,
// //   },
// //   {
// //     id: 3,
// //     name: "Aloo Bhujia",
// //     desc: "Potato-based crunchy snack.",
// //     weight: "450g",
// //     price: 100,
// //     img: AlooBhujiya,
// //   },
// //   {
// //     id: 4,
// //     name: "Moong Dal",
// //     desc: "Crispy fried moong dal.",
// //     weight: "400g",
// //     price: 110,
// //     img: MoongDal,
// //   },
// //   {
// //     id: 5,
// //     name: "Masala Peanuts",
// //     desc: "Spicy roasted peanuts.",
// //     weight: "500g",
// //     price: 130,
// //     img: HeengDana,
// //   },
// //   {
// //     id: 6,
// //     name: "Punjabi Tadka",
// //     desc: "Light & crunchy tea-time snack.",
// //     weight: "500g",
// //     price: 115,
// //     img: PunjabiTadka,
// //   },
// //   {
// //     id: 7,
// //     name: "Navratan Mix",
// //     desc: "Royal mix of 9 premium ingredients.",
// //     weight: "500g",
// //     price: 125,
// //     img: Navratan,
// //   },
// //   {
// //     id: 8,
// //     name: "Khatta Meetha",
// //     desc: "Sweet & tangy classic namkeen.",
// //     weight: "400g",
// //     price: 95,
// //     img: KhattaMeetha,
// //   },
// //   {
// //     id: 9,
// //     name: "Sem Seeds",
// //     desc: "Premium roasted cashews with light salt.",
// //     weight: "250g",
// //     price: 220,
// //     img: SemBeej,
// //   },
// //   // {
// //   //   id: 10,
// //   //   name: "Salted Almonds",
// //   //   desc: "Crunchy roasted almonds, lightly salted.",
// //   //   weight: "250g",
// //   //   price: 210,
// //   //   img: SaltedAlmonds,
// //   // },

// //   // 🔽 Rest of products remain SAME as earlier

// //   {
// //     id: 11,
// //     name: "Heeng Sev",
// //     desc: "Aromatic hing-flavored sev with extra crunch.",
// //     weight: "400g",
// //     price: 105,
// //     img: HeengSev,
// //   },
// //   {
// //     id: 12,
// //     name: "Badam Mixture",
// //     desc: "Rich mixture loaded with crunchy almonds.",
// //     weight: "500g",
// //     price: 150,
// //     img: BadamMixture,
// //   },
// //   {
// //     id: 13,
// //     name: "Besan Bhujia",
// //     desc: "Traditional besan bhujia with bold spices.",
// //     weight: "400g",
// //     price: 95,
// //     img: BesanBhujiya,
// //   },
// //   {
// //     id: 14,
// //     name: "Besan Daana",
// //     desc: "Crunchy fried besan pearls.",
// //     weight: "400g",
// //     price: 90,
// //     img: BesanDaana,
// //   },
// //   {
// //     id: 15,
// //     name: "Besan Gathiya",
// //     desc: "Soft yet crispy besan gathiya.",
// //     weight: "500g",
// //     price: 110,
// //     img: BesanGathiya,
// //   },
// //   {
// //     id: 16,
// //     name: "Bhakarwadi",
// //     desc: "Spicy rolled snack with traditional masala.",
// //     weight: "400g",
// //     price: 120,
// //     img: Bhakharbadi,
// //   },
// //   {
// //     id: 17,
// //     name: "Kaju Maheen",
// //     desc: "Thin sev blended with premium cashews.",
// //     weight: "500g",
// //     price: 160,
// //     img: CasewMaheen,
// //   },
// //   {
// //     id: 18,
// //     name: "Chana Dal",
// //     desc: "Crunchy roasted chana dal.",
// //     weight: "400g",
// //     price: 100,
// //     img: ChanaDal,
// //   },
// //   {
// //     id: 19,
// //     name: "Chana Jor Garam",
// //     desc: "Flat fried spicy chana snack.",
// //     weight: "400g",
// //     price: 95,
// //     img: ChanaJorGaram,
// //   },
// //   {
// //     id: 20,
// //     name: "Gadbad Mixture",
// //     desc: "Fun mix of multiple crunchy elements.",
// //     weight: "500g",
// //     price: 130,
// //     img: GadbadMixture,
// //   },
// //   {
// //     id: 21,
// //     name: "Hara Matar",
// //     desc: "Crispy fried green peas.",
// //     weight: "400g",
// //     price: 90,
// //     img: HaraMatar,
// //   },
// //   {
// //     id: 22,
// //     name: "Hara Moong Mixture",
// //     desc: "Protein-rich green moong snack.",
// //     weight: "500g",
// //     price: 115,
// //     img: HaraMoongMixture,
// //   },
// //   {
// //     id: 23,
// //     name: "Heeng Dana",
// //     desc: "Hing flavored crunchy dana.",
// //     weight: "400g",
// //     price: 95,
// //     img: HeengDana,
// //   },
// //   {
// //     id: 24,
// //     name: "Heeng Maheen",
// //     desc: "Fine sev with strong hing aroma.",
// //     weight: "400g",
// //     price: 100,
// //     img: HeengMahin,
// //   },
// //   {
// //     id: 25,
// //     name: "Kaju Dalmoth",
// //     desc: "Premium dalmoth enriched with cashews.",
// //     weight: "500g",
// //     price: 170,
// //     img: KajuDalmoth,
// //   },
// //   {
// //     id: 26,
// //     name: "Lehsun Mixture",
// //     desc: "Garlic-flavored spicy mixture.",
// //     weight: "500g",
// //     price: 120,
// //     img: LehsunMixture,
// //   },
// //   {
// //     id: 27,
// //     name: "Paneer Bhujia",
// //     desc: "Special bhujia with paneer flavor.",
// //     weight: "400g",
// //     price: 140,
// //     img: PaneerBhujiya,
// //   },
// //   {
// //     id: 28,
// //     name: "Potato Chips",
// //     desc: "Classic crispy salted potato chips.",
// //     weight: "300g",
// //     price: 80,
// //     img: PotatoChips,
// //   },
// // ];



// // const Product = () => {
// //   const navigate = useNavigate();
// //   const { cart, addToCart } = useCart();
// //   const [activeProduct, setActiveProduct] = useState(null);

// //   const isInCart = (id) => cart.some((item) => item.id === id);

// //   return (
// //     <div className="all-products-container">
// //       <h1 className="page-title">✨ Our Products ✨</h1>
// //       <p className="page-subtitle">
// //         Taste of Bharat in Every Bite – <b>Aprakashi Foods</b>
// //       </p>

// //       <div className="product-grid">
// //         {products.map((p) => (
// //           <div key={p.id} className="product-card">
// //             <img src={p.img} alt={p.name} />

// //             <div className="product-info">
// //               <h3>{p.name}</h3>
// //               <p className="desc">{p.desc}</p>
// //               <p className="price">
// //                 ₹{p.price} • {p.weight}
// //               </p>

// //               <div className="product-actions">
// //                 {isInCart(p.id) ? (
// //                   <button
// //                     className="btn-cart open-cart"
// //                     onClick={() => navigate("/cart")}
// //                   >
// //                     🛍 Open Cart
// //                   </button>
// //                 ) : (
// //                   <button
// //                     className="btn-cart"
// //                     onClick={() => addToCart({ ...p, qty: 1 })}
// //                   >
// //                     🛒 Add to Cart
// //                   </button>
// //                 )}

// //                 <button
// //                   className="btn-outline small"
// //                   onClick={() => setActiveProduct(p)}
// //                 >
// //                   View More
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* QUICK VIEW MODAL */}
// //       {activeProduct && (
// //         <div className="modal-backdrop" onClick={() => setActiveProduct(null)}>
// //           <div className="modal" onClick={(e) => e.stopPropagation()}>
// //             <button className="modal-close" onClick={() => setActiveProduct(null)}>
// //               ×
// //             </button>

// //             <div className="modal-body">
// //               <img src={activeProduct.img} alt={activeProduct.name} />
// //               <div className="modal-info">
// //                 <h3>{activeProduct.name}</h3>
// //                 <p className="price">
// //                   ₹{activeProduct.price} • {activeProduct.weight}
// //                 </p>
// //                 <p>{activeProduct.desc}</p>

// //                 <div className="modal-actions">
// //                   {isInCart(activeProduct.id) ? (
// //                     <button
// //                       className="btn-cart open-cart"
// //                       onClick={() => navigate("/cart")}
// //                     >
// //                       🛍 Open Cart
// //                     </button>
// //                   ) : (
// //                     <button
// //                       className="btn-cart"
// //                       onClick={() => addToCart({ ...activeProduct, qty: 1 })}
// //                     >
// //                       🛒 Add to Cart
// //                     </button>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Product;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AllProducts.css";
// import { FiShoppingCart, FiArrowRight } from "react-icons/fi";
// import { useLocation } from 'react-router-dom';

// import pic1 from "./assets/HeengSev.png";
// import pic2 from "./assets/BadamMixture.png";
// import pic3 from "./assets/AlooBhujiya.png";
// import pic4 from "./assets/BesanBhujiya.png";

// const products = [
//   { id: 1, name: "Heeng Sev", image: pic1 },
//   { id: 2, name: "Badam Mixture", image: pic2 },
//   { id: 3, name: "Aloo Bhujiya", image: pic3 },
//   { id: 4, name: "Besan Bhujiya", image: pic4 },
// ];

// export default function AllProducts() {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
// const location = useLocation();
//   const handleAddToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const isInCart = (id) => cartItems.some((item) => item.id === id);
// // Add this effect to scroll to product when coming from cart
// useEffect(() => {
//   // Check if we came from cart with a product ID
//   if (location.state?.productId) {
//     const productId = location.state.productId;
//     // Find the product in the DOM and scroll to it
//     setTimeout(() => {
//       const productElement = document.querySelector(`[data-product-id="${productId}"]`);
//       if (productElement) {
//         productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         // Highlight the product
//         productElement.classList.add('highlight-product');
//         setTimeout(() => {
//           productElement.classList.remove('highlight-product');
//         }, 3000);
//       }
//     }, 500);
//   }
// }, [location]);

// // Add this to your product card
// // In the product grid mapping:
// <div 
//   className="product-card" 
//   key={p.id}
//   data-product-id={p.id}
//   id={`product-${p.id}`}
// ></div>
//   return (
//     <section className="products-page">
//       {/* 🔶 BANNER */}
//       <div className="products-banner">
//         <h1>Our Products</h1>
//         <p>
//           Taste of Bharat in Every Bite – <b>Aprakashi Foods</b>
//         </p>
//       </div>

//       {/* 🟨 GRID */}
//       <div className="products-grid">
//         {products.map((item) => (
//           <div className="product-card" key={item.id}>
//             <div className="image-box">
//               <img src={item.image} alt={item.name} />
//             </div>

//             <h3 className="product-name">{item.name}</h3>

//             <div className="btn-group">
//               {!isInCart(item.id) ? (
//                 <button
//                   className="btn btn-cart orange"
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   <FiShoppingCart className="btn-icon" />
//                   Add to Cart
//                 </button>
//               ) : (
//                 <button
//                   className="btn btn-cart green"
//                   onClick={() => navigate("/cart")}
//                 >
//                   <FiArrowRight className="btn-icon" />
//                   Open Cart
//                 </button>
//               )}

//               <button
//                 className="btn btn-outline"
//                 onClick={() => navigate(`/products/${item.id}`)}
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ⭐ CENTER CTA (ABOVE FOOTER) */}
//       <div className="all-products-cta">
//         <button
//           className="all-products-btn"
//           onClick={() => navigate("/products")}
//         >
//           Explore More Products →
//         </button>
//       </div>
//     </section>
//   );
// }
