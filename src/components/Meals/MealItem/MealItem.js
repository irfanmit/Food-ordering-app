
import { useContext } from 'react';
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    
    const Cartctx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;


    const  onAddCartHandler = amount => {
        Cartctx.addItem({
            id: props.id,
            name: props.name,
            amount: props.amount,
            price: props.price
        })
    }

   return (
    <li className={classes.meal}>
    <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>   {props.description}  </div>
        <div className={classes.price}>   {price}   </div>
    </div>
        <div> 
            <MealItemForm onAddCart={onAddCartHandler}/>
        </div>
    </li>
   );
};

export default MealItem;