import Style from "./deleteButton.module.css";
import CartContext from "../../Store/cart-context";
import {useContext} from "react";

export const DeleteButton = (props) => {
    const cartCtx = useContext(CartContext);

    const deleteButtonHandler = () => {
        cartCtx.removeOneItem(props.item);
    }
    return(
        <button className={Style.removeButton} onClick={deleteButtonHandler}>-</button>
    );
}