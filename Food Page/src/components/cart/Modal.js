import classes from './Modal.module.css'
import { useContext } from 'react'
import Cart from './Cart'
import { CartItems } from '../../context/Data.context'

const Backdrop = (props) => {
    const display = useContext(CartItems)
    const ModalOverlay = (props) => {
        return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }

    return (
        <>
            <div onClick={() => {
                display.display(false)
            }} className={classes.backdrop}></div>
            <ModalOverlay children={props.children}></ModalOverlay>
        </>
    )
}


export default Backdrop