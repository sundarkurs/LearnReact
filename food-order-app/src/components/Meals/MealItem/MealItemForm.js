import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isQuantityValid, setIsQuantityValid] = useState(true);

  const quantityInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredQuantity = +quantityInputRef.current.value;

    if (enteredQuantity <= 0) {
      setIsQuantityValid(false);
      return;
    }

    props.onAddToCart(enteredQuantity);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          step: "1",
          defaultValue: "1",
          min: "1",
          max: "10",
        }}
      ></Input>
      <button>Add</button>
      {!isQuantityValid && (
        <p className={classes["quantity-error"]}>Invalid Quantity.</p>
      )}
    </form>
  );
};

export default MealItemForm;
