import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import axios from "../../context/FoodDbContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const handleOrder = () => {
    setIsCheckout(true);
  };

  const handleCheckout = (contact) => {
    console.log(contact);

    const order = {
      meals: cartCtx.items,
      contact: contact,
    };

    axios
      .post("/meal-orders.json", order)
      .then((response) => {
        console.log("Order placed");
      })
      .catch((error) => {
        console.log("Error occurred while placing the order.");
      });
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Price</span>
        <span>{`$${cartCtx.totalPrice.toFixed(2)}`}</span>
      </div>

      {isCheckout && (
        <Checkout
          onClose={props.onClose}
          onCheckout={handleCheckout}
        ></Checkout>
      )}

      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button className={classes.button} onClick={handleOrder}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
