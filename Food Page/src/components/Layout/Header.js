import React,{useContext} from 'react'
import  ReactDOM  from 'react-dom'
import img from '../../assets/meals.jpg'
import styles from './Header.module.css'
import CartButton from './CartButton'
import Cart from '../cart/Cart'
import { CartItems } from '../../context/Data.context'

const Header = props => {
    const display = useContext(CartItems)
    return (
        <React.Fragment>
            {display.displayState && ReactDOM.createPortal(<Cart></Cart>,document.getElementById("backdrop"))}
            <header className={styles.header}>
               <h1>React Meals</h1>
               <CartButton></CartButton>
            </header>
            <div className={styles["main-image"]}>
                <img src={img}></img>
            </div>
        </React.Fragment>
    )
}

export default Header