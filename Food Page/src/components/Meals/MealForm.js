import './MealFrom.module.css'
import { useContext } from 'react'
import { CartItems } from '../../context/Data.context'
let arrItems = [];
let itemCount = 0;
const MealForm = (props) => {
    const cartItems = useContext(CartItems)
    function itemHandler(eve) {
         eve.preventDefault();
         const value = eve.target[0].value;
         itemCount = +value
         const getIndex = arrItems.findIndex((val)=> {
            return val.dishName == props.dishName
         })

         if(getIndex === -1) {
            arrItems.push({
                dishName:props.dishName,
                dishPrice:props.dishPrice,
                dishDescription:props.dishDescription,
                quantity:itemCount
            })
         }

         if(getIndex >= 0) {
            arrItems[getIndex].quantity = arrItems[getIndex].quantity + itemCount
         }

         const IndividualQuantity = arrItems.map((val)=> {
            return val.quantity
         })

         const quan = IndividualQuantity.reduce((pre,cur)=> {
            return pre + cur
         },0)

         cartItems.quantity(quan)
         cartItems.items(arrItems)
    }
    arrItems = [...cartItems.itemsData]
    return (
        <form onSubmit={itemHandler}>
            {console.log(cartItems.itemsData)}
            <label htmlFor={`mealAmount_${props.id}`}>
                Amount
            </label>
            <input defaultValue={1} id={`mealAmount_${props.id}`} type="number" min="1" max="5">

            </input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default MealForm