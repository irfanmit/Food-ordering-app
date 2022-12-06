

import react from "react";

const cartContext  = react.createContext({
// anime sucks nolan great
    items: [],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {},
});

export default cartContext;