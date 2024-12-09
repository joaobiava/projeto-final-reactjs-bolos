import React, { createContext, useContext, useState } from "react";

// Criando o contexto
const CartContext = createContext();

// Provedor de contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Estado inicial do carrinho (pode ser um array vazio)

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Adiciona o item ao carrinho
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id)); // Remove item do carrinho
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acessar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};