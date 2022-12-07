import { useReducer } from "react";
import CartContext from "./cart-context";



const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer =  (state, action) => {

    if (action.type === 'ADD'){
        console.log("action.item.amount " + action.item.amount)
        console.log("action.item " + action.item)
         const updatedItems = state.items.concat(action.item)
         const updatedTotalAmount = state.totalAmount + action.item.amount;
         const totalPrice = items.reduce((curNumber, item) => {
            return curNumber + item.amount;
        }, 0)
         console.log("updatedToalamount " + updatedTotalAmount)

        // const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        // const existingCartItem = state.items[existingCartItemIndex];
        
        // let updatedItems;

        // if(existingCartItem){
        //    const updatedItem = {
        //         ...existingCartItem,
        //         amount: existingCartItem.amount + action.item.amount
        //     };
        //     updatedItems = [...state.items];
        //     updatedItems[existingCartItemIndex] = updatedItem;
        // } else{
        //     //const updatedItems = state.items.concat(action.item);
        // } 
        return {
            totalPrice: totalPrice,
            items: updatedItems,
            totalAmount: updatedTotalAmount 
        };
        
    }
    return defaultCartState;
}
//    if(action.type==='REMOVE'){
//     const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

//     const existingCartItem = state.items[existingCartItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingCartItem.price;
//     let updatedItems;
//     if(existingCartItem.amount===1){
//         updatedItems = state.items.filter(item => item.id !== action.id);
//     } else{
//         const updatedItem  ={...existingCartItem, amount: existingCartItem.amount -1 }
//         updatedItems = [...state.items];
//         updatedItems[existingCartItemIndex] = updatedItem;
//     }
//     return {
//         items: updatedItems,
//         totalAmount: updatedTotalAmount 
//     };
//    }
    

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    
    const addItemHandler = (item) => {
        console.log("price of item "+item.amount)
        dispatchCartAction({type: 'ADD', item: item}); 
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id}); 
    }
const cartContext = {
    totalPrice: totalPrice,
    items: cartState.items,
    totalAmount : cartState.totalAmount,
    addItem : addItemHandler,
    removeItem : removeItemHandler 
}

    return (
    <CartContext.Provider value ={cartContext}>{props.children}</CartContext.Provider>
)
}

export default CartProvider;