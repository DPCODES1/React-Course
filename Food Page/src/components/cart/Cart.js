import Backdrop from "./Modal"
import classes from "./Cart.module.css"
import Checkout from "./Checkout"
import { useContext } from "react"
import { CartItems } from "../../context/Data.context"
import { useState } from "react"
function Cart() {
    const ctx = useContext(CartItems)
    const [issubmit,SetisSubmit] = useState(false)
    const [isCheckout,setIsCheckOut] = useState(false)
    const [didSubmit,setDidSubmit] = useState(false)
    let Total = 0;
    const individualPrices = ctx.itemsData.map((val, idx, arr) => {
        return val.dishPrice * val.quantity
    })
    for (const prices of individualPrices) {
        Total = Total + prices
    }
    ctx.setprice(Total)
    const data = ctx.itemsData.map((items) => {
        return Boolean(items.quantity) && <li className={classes.cartList}>
            <h3>{items.dishName}</h3>
            <div className={classes.priceQuantityContainer}>
                <span>Rs {items.dishPrice}</span>
                <p>x {items.quantity}</p>
            </div>
            <hr></hr>
        </li>
    })
    function orderHandler() {
        setIsCheckOut(true)
    }

    async function submitOrderHandler(userData) {
        SetisSubmit(true)
        await fetch("https://foodpage-7b794-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{
            method:'post',
            body:JSON.stringify({userData:userData,orderedItems:ctx.itemsData}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        ctx.items([])
        ctx.quantity(0)
        SetisSubmit(false)
        setDidSubmit(true)
        setIsCheckOut(false)
    }
    const cartItems = <ul className={classes["cart-items"]}>{data}</ul>
    const cartModalContent = <>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{Total.toFixed(2)} Rs</span>
        </div>
        {!isCheckout && <div className={classes.actions}>
            <button onClick={()=> {ctx.display(false)}} className={classes["button--alt"]}>
                Close
            </button>
            <button className={classes.button} onClick={orderHandler}>Order</button>
        </div>}
        {isCheckout && <Checkout submit={submitOrderHandler} onClose={()=> {ctx.display(false)}}></Checkout>}
    </>
    return (
        <>
            <Backdrop>
                {!didSubmit && !issubmit && cartModalContent}
                {issubmit && <p>Sending Over Data...</p>} 
                {!issubmit && didSubmit && <p>Successfully placed the order</p>}
            </Backdrop>
        </>
    )
}
// && works like if the first one is true it will render the second one,if the first one is false it will execute the first false condition result
export default Cart