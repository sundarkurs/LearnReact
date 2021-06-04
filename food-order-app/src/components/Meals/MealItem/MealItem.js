import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  //TODO: Improve
  const price = `$${props.item.price.toFixed(2)}`;

  const onAddToCartHandler = (quantity) => {
    const item = {
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      quantity: quantity,
    };

    cartContext.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          onAddToCart={onAddToCartHandler}
          id={props.item.id}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
