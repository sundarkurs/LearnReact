import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { MEALS_DATA as MealsTempData } from "../../common/MealsData";

const AvailableMeals = () => {
  const mealsList = MealsTempData;

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList.map((meal) => (
            <MealItem key={meal.id} item={meal}></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
