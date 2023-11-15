import classes from './HeaderCartButton.module.css'
import { CartItems } from '../../context/Data.context'
import { useContext } from 'react'
import React from 'react'
import CartIcon from '../cart/CartIcon'
import { useEffect } from 'react'
import { useState } from 'react'
const CartButton = (props)=> {
    const [buttonisHighlighted,setButtonIsHighLighted] = useState(false)
    const cartItems = useContext(CartItems)
    const cartClasses = `${classes.button} ${buttonisHighlighted ? classes.bump : ''}`
    useEffect(()=> {
        if(cartItems.quantityData === 0) {
            return
        }
        setButtonIsHighLighted(true)
        
        const timer = setTimeout(()=> {
            setButtonIsHighLighted(false)
        },300)

        return ()=> {
            clearTimeout(timer)
        }
    },[cartItems.quantityData])
    return (
        <button className={cartClasses} onClick={()=> {cartItems.display(true)}}>
            <span className={classes.icon}>
                 <CartIcon></CartIcon>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{cartItems.quantityData}</span>
        </button>
    )
}

export default CartButton