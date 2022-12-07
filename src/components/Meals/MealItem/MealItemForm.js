
import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    // USE REF
    const amountInputRef = useRef();

////////////SUBMIT HANDLER//////

const submitHandler = (event) => {
        console.log("entered")
        event.preventDefault();

   const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
console.log("enteredamountNUmber "+enteredAmountNumber)

    // if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
    //     setAmountIsValid(false);
    //     return;
    // }
    props.onAddCart(enteredAmountNumber)
}
        return(
            <form className={classes.form} onSubmit = {submitHandler}>
                <Input
                ref = {amountInputRef}
                label = 'Amount' 
                input ={{
                        id: 'amount',
                        type: 'number',
                        max: '5',
                        min:'1',
                        step: '1',
                        defaultValue: '1',
                       }}
                />
                <button>+ Add</button>
                {!amountIsValid && <p>Enter valid</p>}
            </form>
        )
}

export default MealItemForm;