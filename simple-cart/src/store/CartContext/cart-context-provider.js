import React, { useContext, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./../AuthContext/auth-context";

export const CartContextProvider = (props) => {
  const [cartCount, setCartCount] = useState(0);

  const authCtx = useContext(AuthContext);

  const addToCart = () => {
    setCartCount((prevState) => {
      return prevState + 1;
    });
  };

  const clearCart = (logout) => {
    setCartCount(0);
    if (logout) {
      authCtx.onLogout();
    }
  };

  return (
    <CartContext.Provider
      value={{ count: cartCount, addToCart: addToCart, clearCart: clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
