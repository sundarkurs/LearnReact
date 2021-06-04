import React, { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
import { AppConstatns as appConst } from "../../common/Constants";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{appConst.APP_TITLE}</h1>
        <CartButton onClick={props.onShowCart}></CartButton>
      </header>
    </Fragment>
  );
};

export default Header;
