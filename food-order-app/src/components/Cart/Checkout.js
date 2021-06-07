import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      name: "sundar",
      city: "bangalore",
      mobile: "9972032425",
    };

    props.onCheckout(contact);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="name">City</label>
        <input type="text" id="city"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Mobile</label>
        <input type="text" id="mobile"></input>
      </div>
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
