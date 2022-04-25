import React, {useRef, useState} from "react";
import Styles from "./ServiceItemForm.module.css"
const ServiceItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10){
            setAmountIsValid(false);
            return;
        }
    props.onAddToCard(enteredAmountNumber);
    }

    return(
        <form className={Styles.form} onSubmit={submitHandler}>
            <div className={Styles.amountContainer}>
                <label  className={Styles.formLabel}>Amount :</label>
                <input ref={amountInputRef} className={Styles.formInput} type={"number"} min='1' max='10' step='1'/>
            </div>
            <div>
                <button type={"submit"} className={Styles.formButton}>+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
            </div>
        </form>
    );
}

export default ServiceItemForm;