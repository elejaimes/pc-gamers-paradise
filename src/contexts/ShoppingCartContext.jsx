import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const storedCart = localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};


export default ShoppingCartProvider