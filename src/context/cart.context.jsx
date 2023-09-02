import { createContext, useState } from "react";

const addItemToCartHandler = (currentItems, itemToAdd) => {
  const itemExists = currentItems.find((item) => item.id === itemToAdd.id);
  if (!itemExists) {
    return [...currentItems, { ...itemToAdd, count: 1 }];
  }

  const filteredItems = currentItems.filter((item) => item.id !== itemToAdd.id);
  return [{ ...itemToAdd, count: itemExists.count + 1 }, ...filteredItems];
};

const decreaseItemFromCartHandler = (currentItems, itemToRemove) => {
  const targetItem = currentItems.find((i) => i.id === itemToRemove.id);
  const filteredArr = currentItems.filter((i) => i.id !== itemToRemove.id);

  if (targetItem.count !== 1) {
    return [{ ...targetItem, count: targetItem.count - 1 }, ...filteredArr];
  }

  return [...filteredArr];
};

const removeItemFromCartHandler = (currentItems, itemToRemove) => {
  const targetItem = currentItems.find((i) => i.id === itemToRemove.id);
  if (targetItem) {
    return currentItems.filter((item) => item.id !== itemToRemove.id);
  }
};

export const CartContext = createContext({
  items: [],
  setItems: () => null,
  isCartOpen: false,
  setIsCartOpen: () => null,
  addItemToCart: () => null,
  decreaseItemFromCart: () => null,
  removeItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemToCart = (itemToAdd) => {
    setItems(addItemToCartHandler(items, itemToAdd));
  };

  const decreaseItemFromCart = (itemToRemove) => {
    setItems(decreaseItemFromCartHandler(items, itemToRemove));
  };

  const removeItemFromCart = (itemToRemove) => {
    setItems(removeItemFromCartHandler(items, itemToRemove));
  };

  const value = {
    items,
    setItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
