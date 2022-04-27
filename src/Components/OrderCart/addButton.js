import Styles from "./addButton.module.css";
import CartContext from "../../Store/cart-context";
import {useContext} from "react";
export const AddButton = (props) => {
    const cartCtx = useContext(CartContext);

    const addButtonHandler = () => {
        cartCtx.addItem({...props.item , amount: 1});
    }
    return(
        <button className={Styles.addButton} onClick={addButtonHandler}>+</button>
    );
}