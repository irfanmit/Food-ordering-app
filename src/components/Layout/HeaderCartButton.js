
import { useContext, useEffect, useState } from "react";
import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from "../../store/cart-context";
 
// let numberOfCartItems=0;
const HeaderCartButton = (props) => {
    

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const {totalAmount} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + totalAmount;
    }, 0)
    // useEffect(() => {
    //     console.log("totalamounmt "+ totalAmount)
    //     if(items.length===1){
    //         numberOfCartItems= totalAmount
    //     }
    //     numberOfCartItems= totalAmount+1
    //     console.log("numberOfCartItems "+ numberOfCartItems)
    // }, [items])
    

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
            {console.log("numberOfCartItems2 "+ numberOfCartItems)}
            </span>
        </button>
    )
}

export default HeaderCartButton;