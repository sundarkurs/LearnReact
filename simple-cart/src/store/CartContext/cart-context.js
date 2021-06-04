import React from "react";

const CartContext = React.createContext({
  count: 0,
  addToCart: () => {},
  clearCart: (logout = false) => {},
});

export default CartContext;
