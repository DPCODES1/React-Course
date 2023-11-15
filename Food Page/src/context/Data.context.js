import React, { createContext, useState } from "react";

export const CartItems = createContext({
    items: () => { },
    Totalprice: 0,
    setprice: (val) => { },
    quantity: (val) => { },
    quantityData: 0,
    itemsData: [],
    display:()=> { },
    displayState:null
});

const Items = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [items, setItems] = useState([])
    const [displayState,setDisplayState] = useState(false)
    const [Totalprice, setPrice] = useState(0)

    function display(val) {
        setDisplayState(val)
    }

    function quantitySetter(val) {
        setQuantity(val)
    }

    function priceSetter(val) {
        setPrice(val)
    }

    function itemsAdder(val) {
        setItems(val)
    }

    return <CartItems.Provider value={{ items: itemsAdder,displayState:displayState,display:display, TotalPrice: Totalprice, setprice: priceSetter, quantity: quantitySetter, quantityData: quantity, itemsData: items } }>
       {props.children}
    </CartItems.Provider >
}

export default Items