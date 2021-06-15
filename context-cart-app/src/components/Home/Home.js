import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/AuthContext/auth-context";
import CartContext from "../../store/CartContext/cart-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const cartCtx = useContext(CartContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
      <Button onClick={cartCtx.addToCart}>Add to Cart</Button>
      <Button onClick={() => cartCtx.clearCart(false)}>Clear Cart</Button>
    </Card>
  );
};

export default Home;
