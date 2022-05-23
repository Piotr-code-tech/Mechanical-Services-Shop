import React from "react";
import Modal from "../UI/Modal/Modal";
import {OrderForm} from "./OrderForm";
import Styles from "./OrderForm.module.css";
export const InputFormOrder = (props) => {
    return(
        <Modal>
            <h2 className={Styles.orderHead}>Servive Form</h2>
            <OrderForm closeFormWindow={props.closeFormWindow}></OrderForm>
        </Modal>
    );
}