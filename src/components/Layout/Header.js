import { Fragment } from 'react';
import img from '../../assets/food.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'; 

const Header = (props) => {
    return (
    <Fragment>
    <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onclick = {props.onShowCart}/>
    </header>
    <div className={classes['main-image']} onClick = {props.hideCartHandler}>
        <img src={img}  alt ="food pic" />
    </div>
    </Fragment>
    )
}

export default Header;