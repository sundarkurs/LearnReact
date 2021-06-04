import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import { AppConstatns as appConst } from "../../common/Constants";

const CartButton = (props) => {
  const [highlightButton, setHighlightButton] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartCount = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const { items } = cartCtx;

  const buttonClasses = `${classes.button} ${
    highlightButton ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setHighlightButton(true);

    const timer = setTimeout(() => {
      setHighlightButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{appConst.CART_TITLE}</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
