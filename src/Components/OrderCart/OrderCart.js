import React, {useState, useContext} from "react";
import Styles from "./OrderCart.module.css";
import Modal from "../UI/Modal/Modal";
import {getData} from "../../LocalStorage/LocalStorage-operations";
import DeleteIcon from "../UI/DeleteIcon/DeleteIcon";
import cartContext from "../../Store/cart-context";
import {AddButton} from "./addButton";
import {DeleteButton} from "./deleteButton";
const OrderCart = (props) => {
    const [updateStorageState, setUpdateStorageState] = useState(false);
    const cartCtx = useContext(cartContext);

    const storageList = getData("cartItems");
    const cartItems = (<ul className={Styles.cartItems}>
        {storageList.map((item) => {

            const deleteItem = () => {
                setUpdateStorageState(!updateStorageState);
                cartCtx.removeItem(item.id);
            }

            return <li key={item.id} className={Styles.listElement}>
                <div className={Styles.nameAndPrice}>
                    <div className={Styles.name}>
                        {item.name}
                    </div>
                    <div className={Styles.price}>
                        <p>Price :</p>
                        {item.price}$
                    </div>
                    <div className={Styles.amount}>
                        <p>Amount :</p>
                        {item.amount}
                    </div>
                </div>
                <div className={Styles.buttons}>
                    <AddButton item={item}/>
                    <DeleteButton item={item}/>
                    <button className={Styles.deleteButton} onClick={deleteItem}><DeleteIcon/></button>
                </div>
            </li>;
        })}
    </ul>);

    return(
        <React.Fragment>
            <Modal>
                {cartItems}
                <div className={Styles.total}>
                    <span>Total amount :</span>
                    <span>{cartCtx.totalAmount}$</span>
                </div>
                <div className={Styles.actions}>
                    <button className={Styles.buttonAlt} onClick={props.onClick}>Close</button>
                    <button className={Styles.button}>Order</button>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default OrderCart;