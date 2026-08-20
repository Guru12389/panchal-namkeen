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



import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message =
      "🛒 *Order Details*%0A%0A";

    cart.forEach((item, index) => {

      message += `${index + 1}. ${
        item.name
      } (${item.weight}) - Qty: ${  
        item.quantity
      } x ₹${item.price} = ₹${
        item.price * item.quantity
      }%0A`;

    });

    message += `%0A--------------------%0A`;

    message += `*Total: ₹${totalAmount}*%0A%0A`;

    message += `📍 Please confirm my order.`;

    const phoneNumber = "919560932132";

    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="cart-container">

      <h2 className="cart-title">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty
        </p>

      ) : (

        <>
          <div className="cart-items">

            {cart.map((item) => (

              <div
                key={item.cartId}
                className="cart-item"
              >

                <div className="cart-item-details">

                  <h4>{item.name}</h4>

                  <h5>
                    ₹{item.price}
                  </h5>

                  <span className="product-weight">
                    {item.weight}
                  </span>

                </div>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.cartId,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.cartId,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item.cartId
                    )
                  }
                >
                  ❌ Remove
                </button>

              </div>
            ))}
          </div>

          <div className="cart-summary">

            <h3>
              Total:
              <span>
                ₹{totalAmount}
              </span>
            </h3>

            <div className="cart-actions">

              <button
                className="clear-btn"
                onClick={clearCart}
              >
                🗑 Clear Cart
              </button>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                ✅ Checkout
              </button>

            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;