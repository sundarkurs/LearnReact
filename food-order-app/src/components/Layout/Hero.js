import { Fragment } from "react";
import classes from "./Hero.module.css";
import mealsImage from "../../assets/meals.jpg";

const Hero = () => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of deliious food."></img>
      </div>

      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
      </section>
    </Fragment>
  );
};

export default Hero;
