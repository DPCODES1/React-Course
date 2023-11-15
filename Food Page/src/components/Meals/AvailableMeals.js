import classes from './AvailabelMeals.module.css'
import Card from '../Ui/Card'
import MealForm from './MealForm'
import { useEffect } from 'react'
import { useState } from 'react'
// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: "Idly",
//         description: "Super Soft and Healthy",
//         price: 5.00
//     },
//     {
//         id: 'm2',
//         name: "Dosa",
//         description: "Super Crisp and Healthy",
//         price: 20.00
//     },
//     {
//         id: 'm2',
//         name: "Biriyani",
//         description: "Super juicy and Tasty",
//         price: 120.00
//     }
// ]

const AvailableMeals = () => {
    const [meals,setMeals] =  useState([])
    useEffect(()=> {
        async function fetchData() {
            const fetchedData =  await fetch("https://foodpage-7b794-default-rtdb.asia-southeast1.firebasedatabase.app/food.json")
            const data = await fetchedData.json()
            setMeals(data)
        }
        fetchData()
    },[])
    return <section className={classes.meals}>
        <ul>
            {meals.map((val) => {
                return (
                    <>
                        <Card>
                            <li>
                                <div>
                                    <h2>{val.name}</h2>
                                    <p>{val.description}</p>
                                    <b>{`${val.price} Rs`}</b>
                                </div>
                                <div className='formContainer'>
                                    <MealForm dishName={val.name} dishPrice={val.price.toFixed(2)} dishDescription={val.description}  id={val.id}></MealForm>
                                </div>
                            </li>
                        </Card>
                    </>

                )
            })}
        </ul>
    </section >
}

export default AvailableMeals