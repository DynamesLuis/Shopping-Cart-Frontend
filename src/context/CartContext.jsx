import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleAddTocart = (newProduct) => {
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

  const handleDeleteFromCart = (productId) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  const handleIncreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };
  const handleDecreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddTocart,
        handleDeleteFromCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
