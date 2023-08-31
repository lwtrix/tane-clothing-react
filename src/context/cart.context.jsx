import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  setItems: () => null,
  isCartOpen: false,
  setIsCartOpen: () => null
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { items, setItems, isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
