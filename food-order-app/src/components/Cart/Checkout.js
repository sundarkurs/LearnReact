import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const nameRef = useRef();
  const cityRef = useRef();
  const mobileRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredMobile = mobileRef.current.value;

    if (
      enteredName.trim() === "" ||
      enteredCity.trim() === "" ||
      enteredMobile.trim() === ""
    ) {
      setError("Please enter all the fields.");
      return;
    }

    const contact = {
      name: enteredName,
      city: enteredCity,
      mobile: enteredMobile,
    };

    props.onCheckout(contact);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="name">Name *</label>
        <input ref={nameRef} type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City *</label>
        <input ref={cityRef} type="text" id="city"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="mobile">Mobile *</label>
        <input ref={mobileRef} type="text" id="mobile"></input>
      </div>
      <div className={classes.error}>{error}</div>
      <div className={classes.actions}>
        <button type="submit" onClick={props.onClose}>
          Close
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
