import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { MEALS_DATA as MealsTempData } from "../../common/MealsData";
import axios from "../../context/FoodDbContext";
import Spinner from "../UI/Spinner";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  let content = "";

  if (isLoading) {
    content = <Spinner></Spinner>;
  } else if (!isLoading && meals.length <= 0) {
    content = <p>Found no meals.</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        {content}
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} item={meal}></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
