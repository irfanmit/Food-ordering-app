
import {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const {items} = cartCtx

    // const totalAmount = `$$cartCtx.totalAmount.toFixed(2)`;
    const totalPrice = items.reduce((curNumber, item) => {
      return curNumber + item.price * item.amount;
  }, 0)
  
    const hasItems = cartCtx.items.length;

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
      
      cartCtx.addItem({...item, amount: 1});  
    }

    const cartItems = (
       
    <ul className={classes['cart-items']}>
  {cartCtx.items.map((item) => 
    (<CartItem 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove = {cartItemRemoveHandler.bind(null, item.id)}
        onAdd =  {cartItemAddHandler.bind(null, item)}
       />
))}
</ul>
)
    return (
    <Modal onClosed = {props.hideCart}>
         {cartItems}
         <div className={classes.total}>
            <span>Total</span>
            <span>{totalPrice}</span>
            
         </div>

         <div className={classes.actions}>
          <button className={classes['button--alt']} onClick = {props.hideCart}>Close</button>    
          {hasItems && <button className={classes.button}> Order </button>}
         </div>
    </Modal>

    );
};

export default Cart;