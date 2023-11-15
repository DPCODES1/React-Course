import classes from './Checkout.module.css'
import { useState,useRef } from 'react'
function Checkout(props) {
    const [formIsValid,setFormIsValid] = useState({
        name:true,
        street:true,
        city:true,
        postal:true
    })
    const nameRef = useRef()
    const streetRef = useRef()
    const postalRef = useRef()
    const cityRef = useRef()

    const nameControlClasses = `${classes.control} ${
        formIsValid.name ? "" : classes.invalid
    } `

    const StreetControlClasses = `${classes.control} ${
        formIsValid.street ? "" : classes.invalid
    } `

    const cityControlClasses = `${classes.control} ${
        formIsValid.city ? "" : classes.invalid
    } `

    const postalControlClasses = `${classes.control} ${
        formIsValid.postal ? "" : classes.invalid
    } `

    const isEmpty = (val) => val.trim() === ""
    const confirmHandler = (eve)=> {
        eve.preventDefault();
        const name = nameRef.current.value
        const street = streetRef.current.value
        const postal = postalRef.current.value
        const city = cityRef.current.value
        const enteredNameIsValid = !isEmpty(name)
        const enteredStreetIsValid = !isEmpty(street)
        const enteredPostalIsValid = !isEmpty(postal)
        const enteredCityIsValid = !isEmpty(city)

        setFormIsValid({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            postal:enteredPostalIsValid,
            city:enteredCityIsValid
        })

        const formValidator = enteredNameIsValid && enteredCityIsValid && enteredPostalIsValid && enteredStreetIsValid
        if(!formValidator) {
            return
        }
        props.submit({
            name:name,street:street,city:city,postal:postal
        })
    }
    return (
        <form onSubmit={confirmHandler} className={classes.form}>
            <div className={nameControlClasses}>
                 <label htmlFor='name'>Your Name</label>
                 <input ref={nameRef} id='name' type='text' name='name'></input>
                 {!formIsValid.name && <p>Please Input Your Name</p>}
            </div> 
            <div className={StreetControlClasses}>
                 <label htmlFor='street'>Your Street</label>
                 <input ref={streetRef} id='street' type='text' name='street'></input>
                 {!formIsValid.street && <p>Please Input a Valid Street Name</p>}
            </div> 
            <div className={postalControlClasses}>
                 <label htmlFor='postal'>Postal Code</label>
                 <input ref={postalRef} type='text' id='postal' name='postal'></input>
                 {!formIsValid.postal && <p>Please Input a Valid postal Code</p>}
            </div> 
            <div className={cityControlClasses}>
                 <label htmlFor='city'>City</label>
                 <input ref={cityRef} id='city' name='city' type='text'></input>
                 {!formIsValid.city && <p>Please Input a Valid City Name</p>}
            </div> 
            <div className={classes.actions}>
                 <button className="btn" type='reset' onClick={props.onClose}>Cancel</button>
                 <button className={classes.submit} type='submit'>Submit</button>
            </div>
        </form>
    )
}


export default Checkout