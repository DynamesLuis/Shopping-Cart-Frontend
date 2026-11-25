import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addTocart = (newProduct) => {
    setCart((prev) => {
      const found = prev.find((product) => product.id === newProduct.id);

      if (found) {
        return prev.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      }

      return [...prev, { ...newProduct, quantity: 1 }];
    });
  };

  const deleteFromCart = (productId) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };
  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addTocart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
