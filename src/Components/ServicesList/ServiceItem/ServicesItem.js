import React, {useContext} from 'react';
import Styles from './ServiceItem.module.css'
import ServiceItemForm from "../ServiceItemForm/ServiceItemForm";
import CartContext from "../../../Store/cart-context";
import { v4 as uuidv4 } from 'uuid';

const ServicesItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCardHandler = (amount) => {
        cartCtx.addItem({
            id: uuidv4(),
            name: props.serviceElement.name,
            amount: amount,
            price: props.serviceElement.price
        });
    }

    return(
        <li className={Styles.listElement}>
            <div>
                <h1>{props.serviceElement.name}</h1>
                <p><em>{props.serviceElement.description}</em></p>
                <p className={Styles.price}>${props.serviceElement.price}</p>
            </div>
            <div>
                <ServiceItemForm onAddToCard={addToCardHandler}/>
            </div>
        </li>
    );
}

export default ServicesItem;