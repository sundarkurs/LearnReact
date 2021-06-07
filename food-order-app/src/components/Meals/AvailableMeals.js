import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { MEALS_DATA as MealsTempData } from "../../common/MealsData";
import axios from "../../context/FoodDbContext";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("/meals.json")
      .then((response) => {
        console.log("Meals retrieved.");
        const mealsList = [];
        for (const key in response.data) {
          mealsList.push({
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
          });
        }
        setMeals(mealsList);
      })
      .catch((error) => {});
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.length <= 0 && <p>Found no meals.</p>}

          {meals.map((meal) => (
            <MealItem key={meal.id} item={meal}></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
