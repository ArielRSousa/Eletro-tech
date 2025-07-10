import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {object} CartItem
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {number} quantity

/**
 * @typedef {object} CartContextType
 * @property {CartItem[]} items
 * @property {(item: CartItem) => void} addToCart
 * @property {(id: number) => void} removeFromCart
 * @property {(id: number, quantity: number) => void} updateQuantity
 * @property {() => number} getCartTotal
 * @property {() => number} getCartCount
 * @property {() => void} clearCart
 */

/**
 * @type {import("react").Context<CartContextType | undefined>}
 */
const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (newItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
        );
      }

      return [...currentItems, newItem];
    });
  };

  const removeFromCart = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}