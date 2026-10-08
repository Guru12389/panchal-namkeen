// // src/pages/Cart.js
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css";
// import { FaTrashAlt, FaWhatsapp, FaShoppingBag, FaPlus, FaMinus, FaRupeeSign, FaArrowRight } from "react-icons/fa";
// import { MdRemoveShoppingCart } from "react-icons/md";

// // Import all product images
// import HeengSev from "./assets/HeengSev.png";
// import BadamMixture from "./assets/BadamMixture.png";
// import AlooBhujiya from "./assets/AlooBhujiya.png";
// import BesanBhujiya from "./assets/BesanBhujiya.png";
// import BesanDaana from "./assets/BesanDaana.png";
// import BesanGathiya from "./assets/BesanGathiya.png";
// import Bhakharbadi from "./assets/Bhakharbadi.png";
// import ShahiMixture from "./assets/ShahiMixture.png";
// import ChanaDal from "./assets/ChanaDal.png";
// import ChanaJorGaram from "./assets/ChanaJorGaram.png";
// import Gadbad from "./assets/Gadbad.png";
// import HaraMatar from "./assets/HaraMatar.png";
// import HaraMoongMixture from "./assets/HaraMoongMixture.png";
// import HeengDana from "./assets/HeengDana.png";
// import HeengMahin from "./assets/HeengMahin.png";
// import KajuDalmoth from "./assets/KajuDalmoth.png";
// import KhattaMeetha from "./assets/KhattaMeetha.png";
// import LehsunMixture from "./assets/LehsunMixture.png";
// import MoongDal from "./assets/MoongDal.png";
// import MasoorDal from "./assets/masoordal.png";
// import Navratan from "./assets/Navratan.png";
// import PaneerBhujiya from "./assets/PaneerBhujiya.png";
// import PotatoChips from "./assets/PotatoChips.png";
// import GarlicSev from "./assets/Garlic Sev.png";
// import SemBeej from "./assets/SemBeej.png";
// import MasalaCasew from "./assets/MasalaCasew.png";

// // Map product names/IDs to images
// const productImages = {
//   'Heeng Sev': HeengSev,
//   'Badam Mixture': BadamMixture,
//   'Aloo Bhujiya': AlooBhujiya,
//   'Besan Bhujiya': BesanBhujiya,
//   'Besan Daana': BesanDaana,
//   'Besan Gathiya': BesanGathiya,
//   'Bhakarbadi': Bhakharbadi,
//   'Shahi Mixture': ShahiMixture,
//   'Chana Dal': ChanaDal,
//   'Chana Jor Garam': ChanaJorGaram,
//   'Gadbad Mixture': Gadbad,
//   'Hara Matar': HaraMatar,
//   'Hara Moong Mixture': HaraMoongMixture,
//   'Heeng Dana': HeengDana,
//   'Heeng Maheen': HeengMahin,
//   'Kaju Mixture': KajuDalmoth,
//   'Khatta Meetha': KhattaMeetha,
//   'Lehsun Mixture': LehsunMixture,
//   'Moong Dal': MoongDal,
//   'Navratan Mix': Navratan,
//   'Paneer Bhujiya': PaneerBhujiya,
//   'Potato Chips': PotatoChips,
//   'Masoor Dal': MasoorDal,
//   'Sem Seeds': SemBeej,
//   'Masala Casew': MasalaCasew,
//   'Garlic Sev': GarlicSev,
//   'Bhujiya Sev': BesanBhujiya,
//   'Casew & Badam Mixture': BadamMixture,
//   'Masala Peanuts': HeengDana,
// };

// // Fallback image
// const FALLBACK_IMAGE = 'https://via.placeholder.com/80x80/f5ede2/333?text=🍿';

// // Shipping configuration
// const FREE_SHIPPING_THRESHOLD = 500;
// const SHIPPING_CHARGE = 99;

// function Cart() {
//   const navigate = useNavigate();
//   const {
//     cart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//   } = useContext(CartContext);

//   // Subtotal (items only)
//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   // Shipping logic: free if subtotal >= 500, otherwise ₹99
//   const shippingCharge = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_CHARGE;

//   // Final total including shipping
//   const totalAmount = subtotal + shippingCharge;

//   // Get product image with fallback
//   const getProductImage = (item) => {
//     if (item.image) return item.image;
//     const image = productImages[item.name];
//     return image || FALLBACK_IMAGE;
//   };

//   // Handle product click - navigate to product page with the product ID
//   const handleProductClick = (item) => {
//     navigate(`/product`, { state: { productId: item.id, productName: item.name } });
//   };

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     let message = "🛒 *PanchalVeda Namkeen - Order Details*%0A%0A";

//     cart.forEach((item, index) => {
//       message += `${index + 1}. ${item.name} (${item.weight}) - Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}%0A`;
//     });

//     message += `%0A--------------------%0A`;
//     message += `*Subtotal: ₹${subtotal}*%0A`;
//     message += `*Shipping: ${shippingCharge === 0 ? "FREE" : `₹${shippingCharge}`}*%0A`;
//     message += `*Total Items: ${totalItems}*%0A`;
//     message += `*Total Amount: ₹${totalAmount}*%0A%0A`;
//     message += `📍 Please confirm my order. Thank you! 🙏`;

//     const phoneNumber = "918174900977";
//     const url = `https://wa.me/${phoneNumber}?text=${message}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="cart-page">
//       <div className="cart-container">
//         {/* Header */}
//         <div className="cart-header">
//           <div className="cart-header-left">
//             <div className="cart-icon-wrapper">
//               <FaShoppingBag className="cart-icon" />
//               <span className="cart-badge">{totalItems}</span>
//             </div>
//             <div>
//               <h2 className="cart-title">My Cart</h2>
//               <span className="cart-subtitle">Secure Checkout</span>
//             </div>
//           </div>
//           {cart.length > 0 && (
//             <button className="clear-all-btn" onClick={clearCart}>
//               <MdRemoveShoppingCart /> Clear All
//             </button>
//           )}
//         </div>

//         {/* Empty State */}
//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <div className="empty-cart-icon">🛒</div>
//             <h3>Your cart is empty</h3>
//             <p>Looks like you haven't added any items yet.</p>
//             <p className="empty-sub">Start shopping to fill your cart with delicious namkeen!</p>
//             <button
//               className="empty-shop-btn"
//               onClick={() => navigate('/product')}
//             >
//               Start Shopping <FaArrowRight />
//             </button>
//           </div>
//         ) : (
//           <>
//             {/* Cart Items */}
//             <div className="cart-items">
//               {cart.map((item) => (
//                 <div key={item.cartId} className="cart-item">
//                   {/* Product Image - Clickable */}
//                   <div
//                     className="cart-item-image-wrapper"
//                     onClick={() => handleProductClick(item)}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter') handleProductClick(item);
//                     }}
//                   >
//                     <img
//                       src={getProductImage(item)}
//                       alt={item.name}
//                       className="cart-item-image"
//                       loading="lazy"
//                       onError={(e) => {
//                         e.target.src = FALLBACK_IMAGE;
//                       }}
//                     />
//                     <span className="product-hover-label">View</span>
//                   </div>

//                   {/* Product Details */}
//                   <div className="cart-item-details">
//                     <div
//                       className="product-name-wrapper"
//                       onClick={() => handleProductClick(item)}
//                       role="button"
//                       tabIndex={0}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Enter') handleProductClick(item);
//                       }}
//                     >
//                       <h4 className="product-name">{item.name}</h4>
//                     </div>
//                     <div className="item-meta">
//                       <span className="item-weight">{item.weight}</span>
//                       <span className="item-price">
//                         <FaRupeeSign className="rupee-icon" />
//                         {item.price}
//                       </span>
//                       <span className="item-subtotal">
//                         ₹{item.price * item.quantity}
//                       </span>
//                     </div>
//                     <div className="item-actions">
//                       <div className="quantity-controls">
//                         <button
//                           className="qty-btn qty-minus"
//                           onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
//                           disabled={item.quantity <= 1}
//                         >
//                           <FaMinus />
//                         </button>
//                         <span className="qty-number">{item.quantity}</span>
//                         <button
//                           className="qty-btn qty-plus"
//                           onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
//                         >
//                           <FaPlus />
//                         </button>
//                       </div>
//                       <button
//                         className="remove-btn"
//                         onClick={() => removeFromCart(item.cartId)}
//                       >
//                         <FaTrashAlt /> Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Price Summary */}
//             <div className="cart-summary">
//               <div className="summary-header">
//                 <h3>Price Details</h3>
//                 <span>({totalItems} items)</span>
//               </div>

//               <div className="summary-body">
//                 <div className="summary-row">
//                   <span>Total MRP</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="summary-row discount">
//                   <span>Discount</span>
//                   <span className="discount-amount">-₹0</span>
//                 </div>
//                 <div className="summary-row">
//                   <span>Delivery Charges</span>
//                   <span className={shippingCharge === 0 ? "free-shipping" : ""}>
//                     {shippingCharge === 0 ? "FREE" : `₹${shippingCharge}`}
//                   </span>
//                 </div>
//                 <div className="summary-divider"></div>
//                 <div className="summary-row total">
//                   <span>Total Amount</span>
//                   <span className="total-price">₹{totalAmount}</span>
//                 </div>
//                 <div className="savings-note">
//                   {shippingCharge === 0 ? (
//                     <span>🎉 You saved ₹{SHIPPING_CHARGE} on shipping!</span>
//                   ) : (
//                     <span>Add ₹{FREE_SHIPPING_THRESHOLD - subtotal} more for FREE shipping</span>
//                   )}
//                 </div>
//               </div>

//               <div className="cart-actions">
//                 <button className="checkout-btn" onClick={handleCheckout}>
//                   <FaWhatsapp /> Place Order via WhatsApp
//                 </button>
//               </div>

//               <div className="trust-badges">
//                 <span className="trust-badge">
//                   <span className="badge-icon">🔒</span> Secure Checkout
//                 </span>
//                 <span className="trust-badge">
//                   <span className="badge-icon">✅</span> 100% Authentic
//                 </span>
//                 <span className="trust-badge">
//                   <span className="badge-icon">🚚</span> Free Delivery
//                 </span>
//                 <span className="trust-badge">
//                   <span className="badge-icon">🔄</span> Easy Returns
//                 </span>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;



// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Cart.css";
import {
  FaTrashAlt,
  FaWhatsapp,
  FaShoppingBag,
  FaPlus,
  FaMinus,
  FaRupeeSign,
  FaArrowRight,
} from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

// Import all product images
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

const productImages = {
  "Heeng Sev": HeengSev,
  "Badam Mixture": BadamMixture,
  "Aloo Bhujiya": AlooBhujiya,
  "Besan Bhujiya": BesanBhujiya,
  "Besan Daana": BesanDaana,
  "Besan Gathiya": BesanGathiya,
  Bhakarbadi: Bhakharbadi,
  "Shahi Mixture": ShahiMixture,
  "Chana Dal": ChanaDal,
  "Chana Jor Garam": ChanaJorGaram,
  "Gadbad Mixture": Gadbad,
  "Hara Matar": HaraMatar,
  "Hara Moong Mixture": HaraMoongMixture,
  "Heeng Dana": HeengDana,
  "Heeng Maheen": HeengMahin,
  "Kaju Mixture": KajuDalmoth,
  "Khatta Meetha": KhattaMeetha,
  "Lehsun Mixture": LehsunMixture,
  "Moong Dal": MoongDal,
  "Navratan Mix": Navratan,
  "Paneer Bhujiya": PaneerBhujiya,
  "Potato Chips": PotatoChips,
  "Masoor Dal": MasoorDal,
  "Sem Seeds": SemBeej,
  "Masala Casew": MasalaCasew,
  "Garlic Sev": GarlicSev,
  "Bhujiya Sev": BesanBhujiya,
  "Casew & Badam Mixture": BadamMixture,
  "Masala Peanuts": HeengDana,
};

const FALLBACK_IMAGE =
  "https://via.placeholder.com/80x80/f5ede2/333?text=🍿";

const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_CHARGE = 99;

function Cart() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const shippingCharge =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_CHARGE;

  const totalAmount = subtotal + shippingCharge;

  const getProductImage = (item) => {
    if (item.image) return item.image;
    const image = productImages[item.name];
    return image || FALLBACK_IMAGE;
  };

  const handleProductClick = (item) => {
    navigate(`/product`, {
      state: { productId: item.id, productName: item.name },
    });
  };

  // WhatsApp order (kept as an option)
  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = "🛒 *PanchalVeda Namkeen - Order Details*%0A%0A";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.weight}) - Qty: ${
        item.quantity
      } x ₹${item.price} = ₹${item.price * item.quantity}%0A`;
    });

    message += `%0A--------------------%0A`;
    message += `*Subtotal: ₹${subtotal}*%0A`;
    message += `*Shipping: ${
      shippingCharge === 0 ? "FREE" : `₹${shippingCharge}`
    }*%0A`;
    message += `*Total Items: ${totalItems}*%0A`;
    message += `*Total Amount: ₹${totalAmount}*%0A%0A`;
    message += `📍 Please confirm my order. Thank you! 🙏`;

    const phoneNumber = "918174900977";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  // Online checkout (primary)
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!user) {
      alert("Please login or register to place your order online.");
      navigate("/login", { state: { redirectTo: "/checkout" } });
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
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

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any items yet.</p>
            <p className="empty-sub">
              Start shopping to fill your cart with delicious namkeen!
            </p>
            <button
              className="empty-shop-btn"
              onClick={() => navigate("/product")}
            >
              Start Shopping <FaArrowRight />
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <div
                    className="cart-item-image-wrapper"
                    onClick={() => handleProductClick(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleProductClick(item);
                    }}
                  >
                    <img
                      src={getProductImage(item)}
                      alt={item.name}
                      className="cart-item-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = FALLBACK_IMAGE;
                      }}
                    />
                    <span className="product-hover-label">View</span>
                  </div>

                  <div className="cart-item-details">
                    <div
                      className="product-name-wrapper"
                      onClick={() => handleProductClick(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleProductClick(item);
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
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button
                          className="qty-btn qty-plus"
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity + 1)
                          }
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

            <div className="cart-summary">
              <div className="summary-header">
                <h3>Price Details</h3>
                <span>({totalItems} items)</span>
              </div>

              <div className="summary-body">
                <div className="summary-row">
                  <span>Total MRP</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="summary-row discount">
                  <span>Discount</span>
                  <span className="discount-amount">-₹0</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Charges</span>
                  <span
                    className={shippingCharge === 0 ? "free-shipping" : ""}
                  >
                    {shippingCharge === 0
                      ? "FREE"
                      : `₹${shippingCharge}`}
                  </span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total Amount</span>
                  <span className="total-price">₹{totalAmount}</span>
                </div>
                <div className="savings-note">
                  {shippingCharge === 0 ? (
                    <span>🎉 You saved ₹{SHIPPING_CHARGE} on shipping!</span>
                  ) : (
                    <span>
                      Add ₹{FREE_SHIPPING_THRESHOLD - subtotal} more for FREE
                      shipping
                    </span>
                  )}
                </div>
              </div>

              <div className="cart-actions">
                <button
                  className="checkout-btn primary"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout <FaArrowRight />
                </button>
                <button
                  className="checkout-btn whatsapp"
                  onClick={handleWhatsAppOrder}
                >
                  <FaWhatsapp /> Order via WhatsApp
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