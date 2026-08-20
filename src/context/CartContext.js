import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const CartContext =
  createContext();

export const useCart = () =>
  useContext(CartContext);

export const CartProvider = ({
  children,
}) => {

  const [cart, setCart] =
    useState(() => {

      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {

    setCart((prevCart) => {

      // VERY IMPORTANT
      // compare using cartId

      const existingItem =
        prevCart.find(
          (item) =>
            item.cartId ===
            product.cartId
        );

      // same pack already exists
      if (existingItem) {

        return prevCart.map(
          (item) =>

            item.cartId ===
            product.cartId

              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }

              : item
        );
      }

      // different pack
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // =========================
  // REMOVE ITEM
  // =========================

  const removeFromCart = (
    cartId
  ) => {

    setCart((prevCart) =>

      prevCart.filter(
        (item) =>
          item.cartId !== cartId
      )
    );
  };

  // =========================
  // UPDATE QUANTITY
  // =========================

  const updateQuantity = (
    cartId,
    quantity
  ) => {

    if (quantity <= 0) {

      removeFromCart(cartId);

      return;
    }

    setCart((prevCart) =>

      prevCart.map((item) =>

        item.cartId === cartId

          ? {
              ...item,
              quantity,
            }

          : item
      )
    );
  };

  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    setCart([]);
  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};