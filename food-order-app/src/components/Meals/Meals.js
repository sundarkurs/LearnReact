import React, { Fragment } from "react";
import Hero from "../Layout/Hero";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <Hero></Hero>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
