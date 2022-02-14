import React, {Fragment, useState, useContext, useEffect} from 'react';

import mealsImage from '../../assets/meals.jpg';

import classes from './Header.module.css'

import HeaderCartButton from './HeaderCartButton';

import Modal from '../UI/Modal';

import CartContext from '../../store/cart-context';

import {nanoid} from "nanoid";

const Header = props => {

  const cartCtx = useContext(CartContext);
  // console.log(cartCtx.MealsData);

  const [formIsShown, setFormIsShown] = useState(false);

  const [data, setData] = useState({
    name:'',
    description: '',
    price: ''
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');

    const fieldValue = e.target.value;

    const newFormData = {...data}
    newFormData[fieldName] = fieldValue;
    // console.log(newFormData);
    setData(newFormData)
    
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    cartCtx.MealsData.push({...data, id: nanoid()});
    console.log(cartCtx.MealsData);
    setFormIsShown(false);
    console.log('re render com')
  }

  

  const handleAddMeals = () => {
   
    setFormIsShown(true);
    
  }

  const handleClose = () => {
    setFormIsShown(false);
  }

  

  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
            <button className={classes.button} onClick={handleAddMeals}>Add Meals</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />
        </div>

        {formIsShown && <Modal onClose={handleClose}> 
        <form className={classes.form} onSubmit={handleAddFormSubmit} >
          <label htmlFor="name">Name</label>
          <input type='text' placeholder='text' name="name" onChange={handleAddFormChange} />
          <label htmlFor="name">Description</label>
          <input type='text' placeholder='text' name="description" onChange={handleAddFormChange} />
          <label htmlFor="name">Price</label>
          <input type='text' placeholder='text' name="price" onChange={handleAddFormChange} />
          
          <button type='submit' className={classes.button}>Add Item</button>

        </form>
        </Modal>}

    </Fragment>
  )
}

export default Header