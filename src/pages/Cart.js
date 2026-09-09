// // src/pages/Cart.js
// import React, { useContext, useEffect } from "react";
// import { CartContext } from "../context/CartContext";
// import "./Cart.css";

// export default function Cart() {
//   const { cart, setCart, removeFromCart, clearCart } = useContext(CartContext);

//   // ✅ Load cart from localStorage on first render
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, [setCart]);

//   // ✅ Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Increase quantity
//   const increaseQty = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   // ✅ Decrease quantity (remove if qty = 0)
//   const decreaseQty = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, qty: item.qty - 1 } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   // ✅ Calculate total
//   const totalAmount = cart.reduce((total, item) => {
//     let price = item.price;
//     if (typeof price === "string") {
//       price = Number(price.replace(/[^0-9]/g, ""));
//     }
//     return total + price * item.qty;
//   }, 0);

//   // ✅ WhatsApp checkout
//   const handleCheckout = () => {
//     const productList = cart
//       .map((item) => {
//         let price = item.price;
//         if (typeof price === "string") {
//           price = Number(price.replace(/[^0-9]/g, ""));
//         }
//         return `${item.name} x ${item.qty} = ₹${price * item.qty}`;
//       })
//       .join(", ");
//     const whatsappMessage = `Hello! I want to order: ${productList}. Total Amount: ₹${totalAmount}`;
//     const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="cart-list">
//             {cart.map((item) => (
//               <li key={item.id} className="cart-item">
//                 <span>
//                   {item.name} - ₹
//                   {typeof item.price === "string"
//                     ? item.price.replace(/[^0-9]/g, "")
//                     : item.price}
//                 </span>

//                 {/* Quantity with + and - buttons */}
//                 <div className="qty-controls">
//                   <button onClick={() => decreaseQty(item.id)}>-</button>
//                   <span>{item.qty}</span>
//                   <button onClick={() => increaseQty(item.id)}>+</button>
//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <h3 className="total-amount">Total: ₹{totalAmount}</h3>

//           <div className="cart-actions">
//             <button className="clear-btn" onClick={clearCart}>
//               Clear Cart
//             </button>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Checkout via WhatsApp
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );

// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// // import "../styles/Cart.css"; // Create/Update your CSS
// import "./Cart.css";
// import { useCart } from "../context/CartContext";



// function Cart() {
//   const { cart, removeFromCart,addToCart, updateQuantity, clearCart } = useContext(CartContext);

//   const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//  const handleCheckout = () => {
//   if (cart.length === 0) {
//     alert("Your cart is empty!");
//     return;
//   }

//   let message = "🛒 *Order Details*%0A%0A";

//   cart.forEach((item, index) => {
//     message += `${index + 1}. ${item.name} - Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}%0A`;
//   });

//   message += `%0A--------------------%0A`;
//   message += `*Total: ₹${totalAmount}*%0A%0A`;
//   message += `📍 Please confirm my order.`;

//   // WhatsApp number
//   const phoneNumber = "919560932132"; // ✅ include country code (91 for India)

//   // Open WhatsApp with encoded message
//   const url = `https://wa.me/${phoneNumber}?text=${message}`;
//   window.open(url, "_blank");
// };


//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <div className="cart-item-info">
//                   <h4>{item.name}</h4>
//                   <p>₹{item.price}</p>
//                 </div>

//                 <div className="quantity-controls">
//                   <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                 </div>

//                 <div className="cart-actions">
//                   <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h3 className="cart-total">Total: ₹{totalAmount}</h3>

//           <div className="cart-buttons">
//             <button className="clear-btn" onClick={clearCart}>
//               Clear Cart
//             </button>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import "./Cart.css";
// import emailjs from "emailjs-com";

// function Cart() {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

//   const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     let message = "🛒 *Order Details*%0A%0A";
//       cart.forEach((item, index) => {
//       message += `${index + 1}. ${item.name} (${item.weight}) - Qty: ${
//         item.quantity
//       } x ₹${item.price} = ₹${
//         item.price * item.quantity
//       }%0A`;
//     });

//     message += `%0A--------------------%0A`;
//     message += `*Total: ₹${totalAmount}*%0A%0A`;
//     message += `📍 Please confirm my order.`;

//     const phoneNumber = "919560932132"; // ✅ India with country code
//     const url = `https://wa.me/${phoneNumber}?text=${message}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="cart-container">
//       <h2 className="cart-title">🛒 Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="empty-cart">Your cart is empty</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <div className="cart-item-details">
//                   <h4>{item.name}</h4>
//                   <h5>₹{item.price}</h5>
//                   <span className="product-weight">
//                         {item.weight}
//                       </span>
//                 </div>

//                 <div className="quantity-controls">
//                   <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                 </div>

//                 <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
//                   ❌ Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="cart-summary">
//             <h3>Total: <span>₹{totalAmount}</span></h3>
//             <div className="cart-actions">
//               <button className="clear-btn" onClick={clearCart}>🗑 Clear Cart</button>
//               <button className="checkout-btn" onClick={handleCheckout}>✅ Checkout</button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;



// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import "./Cart.css";

// function Cart() {

//   const {
//     cart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//   } = useContext(CartContext);

//   const totalAmount = cart.reduce(
//     (acc, item) =>
//       acc + item.price * item.quantity,
//     0
//   );

//   const handleCheckout = () => {

//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     let message =
//       "🛒 *Order Details*%0A%0A";

//     cart.forEach((item, index) => {

//       message += `${index + 1}. ${
//         item.name
//       } (${item.weight}) - Qty: ${  
//         item.quantity
//       } x ₹${item.price} = ₹${
//         item.price * item.quantity
//       }%0A`;

//     });

//     message += `%0A--------------------%0A`;

//     message += `*Total: ₹${totalAmount}*%0A%0A`;

//     message += `📍 Please confirm my order.`;

//     const phoneNumber = "918174900977";

//     const url = `https://wa.me/${phoneNumber}?text=${message}`;

//     window.open(url, "_blank");
//   };

//   return (
//     <div className="cart-container">

//       <h2 className="cart-title">
//         🛒 Your Cart
//       </h2>

//       {cart.length === 0 ? (

//         <p className="empty-cart">
//           Your cart is empty
//         </p>

//       ) : (

//         <>
//           <div className="cart-items">

//             {cart.map((item) => (

//               <div
//                 key={item.cartId}
//                 className="cart-item"
//               >

//                 <div className="cart-item-details">

//                   <h4>{item.name}</h4>

//                   <h5>
//                     ₹{item.price}
//                   </h5>

//                   <span className="product-weight">
//                     {item.weight}
//                   </span>

//                 </div>

//                 <div className="quantity-controls">

//                   <button
//                     onClick={() =>
//                       updateQuantity(
//                         item.cartId,
//                         item.quantity - 1
//                       )
//                     }
//                   >
//                     -
//                   </button>

//                   <span>
//                     {item.quantity}
//                   </span>

//                   <button
//                     onClick={() =>
//                       updateQuantity(
//                         item.cartId,
//                         item.quantity + 1
//                       )
//                     }
//                   >
//                     +
//                   </button>

//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() =>
//                     removeFromCart(
//                       item.cartId
//                     )
//                   }
//                 >
//                   ❌ Remove
//                 </button>

//               </div>
//             ))}
//           </div>

//           <div className="cart-summary">

//             <h3>
//               Total:
//               <span>
//                 ₹{totalAmount}
//               </span>
//             </h3>

//             <div className="cart-actions">

//               <button
//                 className="clear-btn"
//                 onClick={clearCart}
//               >
//                 🗑 Clear Cart
//               </button>

//               <button
//                 className="checkout-btn"
//                 onClick={handleCheckout}
//               >
//                 ✅ Checkout
//               </button>

//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { FaTrashAlt, FaWhatsapp, FaShoppingBag, FaPlus, FaMinus, FaRupeeSign, FaArrowRight } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

// Import all product images
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

// Map product names/IDs to images
const productImages = {
  'Heeng Sev': HeengSev,
  'Badam Mixture': BadamMixture,
  'Aloo Bhujiya': AlooBhujiya,
  'Besan Bhujiya': BesanBhujiya,
  'Besan Daana': BesanDaana,
  'Besan Gathiya': BesanGathiya,
  'Bhakarbadi': Bhakharbadi,
  'Kaju Maheen': CasewMaheen,
  'Chana Dal': ChanaDal,
  'Chana Jor Garam': ChanaJorGaram,
  'Gadbad Mixture': GadbadMixture,
  'Hara Matar': HaraMatar,
  'Hara Moong Mixture': HaraMoongMixture,
  'Heeng Dana': HeengDana,
  'Heeng Maheen': HeengMahin,
  'Kaju Mixture': KajuDalmoth,
  'Khatta Meetha': KhattaMeetha,
  'Lehsun Mixture': LehsunMixture,
  'Moong Dal': MoongDal,
  'Navratan Mix': Navratan,
  'Paneer Bhujiya': PaneerBhujiya,
  'Potato Chips': PotatoChips,
  'Punjabi Tadka': PunjabiTadka,
  'Sem Seeds': SemBeej,
  'Masala Casew': MasalaCasew,
  'Namkeen Mix': GadbadMixture,
  'Bhujiya Sev': BesanBhujiya,
  'Casew & Badam Mixture': BadamMixture,
  'Masala Peanuts': HeengDana,
};

// Fallback image
const FALLBACK_IMAGE = 'https://via.placeholder.com/80x80/f5ede2/333?text=🍿';

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Get product image with fallback
  const getProductImage = (item) => {
    // If item has image property, use it
    if (item.image) return item.image;
    // Otherwise try to match by name
    const image = productImages[item.name];
    return image || FALLBACK_IMAGE;
  };

  // Handle product click - navigate to product page with the product ID
  const handleProductClick = (item) => {
    // Navigate to product page and pass the product ID
    // The product page can use this to show the specific product
    navigate(`/product`, { state: { productId: item.id, productName: item.name } });
    
    // Alternative: If you have a product detail route with ID param
    // navigate(`/product/${item.id}`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = "🛒 *PanchalVeda Namkeen - Order Details*%0A%0A";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.weight}) - Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}%0A`;
    });

    message += `%0A--------------------%0A`;
    message += `*Total Items: ${totalItems}*%0A`;
    message += `*Total Amount: ₹${totalAmount}*%0A%0A`;
    message += `📍 Please confirm my order. Thank you! 🙏`;

    const phoneNumber = "918174900977";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-left">
            <div className="cart-icon-wrapper">
              <FaShoppingBag className="cart-icon" />
              <span className="cart-badge">{totalItems}</span>
            </div>
            <div>
              <h2 className="cart-title">My Cart</h2>
              <span className="cart-subtitle">Secure Checkout</span>
            </div>
          </div>
          {cart.length > 0 && (
            <button className="clear-all-btn" onClick={clearCart}>
              <MdRemoveShoppingCart /> Clear All
            </button>
          )}
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any items yet.</p>
            <p className="empty-sub">Start shopping to fill your cart with delicious namkeen!</p>
            <button 
              className="empty-shop-btn"
              onClick={() => navigate('/product')}
            >
              Start Shopping <FaArrowRight />
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  {/* Product Image - Clickable */}
                  <div 
                    className="cart-item-image-wrapper"
                    onClick={() => handleProductClick(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleProductClick(item);
                    }}
                  >
                    <img 
                      src={getProductImage(item)} 
                      alt={item.name}
                      className="cart-item-image"
                      loading="lazy"
                      onError={(e) => {
                        // If image fails to load, use fallback
                        e.target.src = FALLBACK_IMAGE;
                      }}
                    />
                    <span className="product-hover-label">View</span>
                  </div>

                  {/* Product Details */}
                  <div className="cart-item-details">
                    <div 
                      className="product-name-wrapper"
                      onClick={() => handleProductClick(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleProductClick(item);
                      }}
                    >
                      <h4 className="product-name">{item.name}</h4>
                    </div>
                    <div className="item-meta">
                      <span className="item-weight">{item.weight}</span>
                      <span className="item-price">
                        <FaRupeeSign className="rupee-icon" />
                        {item.price}
                      </span>
                      <span className="item-subtotal">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                    <div className="item-actions">
                      <div className="quantity-controls">
                        <button 
                          className="qty-btn qty-minus"
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button 
                          className="qty-btn qty-plus"
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        <FaTrashAlt /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="cart-summary">
              <div className="summary-header">
                <h3>Price Details</h3>
                <span>({totalItems} items)</span>
              </div>

              <div className="summary-body">
                <div className="summary-row">
                  <span>Total MRP</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="summary-row discount">
                  <span>Discount</span>
                  <span className="discount-amount">-₹0</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Charges</span>
                  <span className="free-shipping">FREE</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total Amount</span>
                  <span className="total-price">₹{totalAmount}</span>
                </div>
                <div className="savings-note">
                  <span>🎉 You saved ₹0 on this order</span>
                </div>
              </div>

              <div className="cart-actions">
                <button className="checkout-btn" onClick={handleCheckout}>
                  <FaWhatsapp /> Place Order via WhatsApp
                </button>
              </div>

              <div className="trust-badges">
                <span className="trust-badge">
                  <span className="badge-icon">🔒</span> Secure Checkout
                </span>
                <span className="trust-badge">
                  <span className="badge-icon">✅</span> 100% Authentic
                </span>
                <span className="trust-badge">
                  <span className="badge-icon">🚚</span> Free Delivery
                </span>
                <span className="trust-badge">
                  <span className="badge-icon">🔄</span> Easy Returns
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;