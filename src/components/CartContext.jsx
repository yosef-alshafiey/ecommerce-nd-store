import React, { createContext, useContext, useState, useEffect } from "react";

// @ts-ignore
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // استعادة السلة من localStorage إذا كانت موجودة
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // تحديث السلة في localStorage عند حدوث أي تغيير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity, image) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const existingProduct = updatedCart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        updatedCart.push({ ...product, quantity, image });
      }

      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};
