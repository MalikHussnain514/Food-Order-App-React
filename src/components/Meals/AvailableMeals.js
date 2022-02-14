import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';


const AvailableMeals = () => {

  const cartCtx = useContext(CartContext);

  console.log('rerender')

  const mealsList = cartCtx?.MealsData?.map((meal) => 
  <li key={meal.id}>
    <MealItem
      id={meal.id} 
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  </li>);

  return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
  );
};

export default AvailableMeals;