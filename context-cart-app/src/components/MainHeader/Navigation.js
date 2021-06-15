import React, { useContext } from "react";

import AuthContext from "../../store/AuthContext/auth-context";
import CartContext from "../../store/CartContext/cart-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <span className={classes.count}>{cartCtx.count}</span>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
