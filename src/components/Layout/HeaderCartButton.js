
import { useContext, useEffect, useState } from "react";
import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from "../../store/cart-context";
 

const HeaderCartButton = (props) => {

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

     const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump: ''}`;

    useEffect(() => {
        if(items.length===0){
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [items]);

    return(
        <button className={btnClasses} onClick = {props.onclick}>
            <span className={classes.icon}>
            <CartIcon/>
            </span>
            <span className={classes.icon}>
                Your Cart
            </span>
            <span className={classes.badge}>
            {numberOfCartItems}
            {console.log(numberOfCartItems)}
            </span>
        </button>
    )
}

export default HeaderCartButton;