import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import CartContext from "../../store/cart-context";

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);

  const mealsList = cartCtx?.MealsData?.map((meal) => (
    
    <div key={meal.id}>
      <MealItem
        id={meal.id}
        // key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </div>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <div>{mealsList}</div>
      </Card>
    </section>
  );
};

export default AvailableMeals;
