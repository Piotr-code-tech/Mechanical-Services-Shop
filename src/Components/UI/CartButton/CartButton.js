import React, {useContext} from 'react';
import CartIcon from "../CartIcon/CartIcon";
import Styles from "../CartButton/CartButton.module.css";
import CartContext from "../../../Store/cart-context";

const CartButton = (props) => {
    const cardCtx = useContext(CartContext);

     const totalNumberOfServices = cardCtx.items.reduce((currentNumber, item)=> {
        return currentNumber + item.amount
    },0)

    const openOrderWindow = () => {
        props.onClick();
    }
    return(
            <button className={Styles.button} onClick={openOrderWindow}>
                <span className={Styles.icon}><CartIcon/></span>
                <span>Cart</span>
                <span className={Styles.badge}>{totalNumberOfServices}</span>
            </button>
    );
}

export default CartButton;