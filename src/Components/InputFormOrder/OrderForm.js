import React, {useContext} from "react";
import {NameInput} from "./nameInput";
import {SurnameInput} from "./surnameInput";
import {PhoneInput} from "./phoneInput";
import {DateInput} from "./dateInput";
import {OrderButton} from "./orderButton";
import {ReturnButton} from "./returnButton";
import Styles from "./OrderForm.module.css";
import cartContext from "../../Store/cart-context";
import {useInput} from "../../hooks/useInput";

export const OrderForm = (props) => {
    const ctx = useContext(cartContext);
    const {
        value: userName,
        hasError: nameInputHasError,
        valueChangeHandler: setUserName,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== "");

    const {
        value: userSurname,
        hasError: surnameInputHasError,
        valueChangeHandler: setUserSurname,
        inputBlurHandler: surnameBlurHandler
    } = useInput(value => value.trim() !== "");

    const phoneRegex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/g);
    const {
        value: userPhone,
        hasError: phoneInputHasError,
        valueChangeHandler: setUserPhone,
        inputBlurHandler: phoneBlurHandler
    } = useInput(value => value.match(phoneRegex));

    const dateRegex = new RegExp(/^\d{4}\-?(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/);
    const {
        value: userDate,
        hasError: dateInputHasError,
        valueChangeHandler: setUserDate,
        inputBlurHandler: dateBlurHandler
    } = useInput(value => value.match(dateRegex));

    const orderButtonHandler = (event) => {
        props.closeFormWindow(false);
        resetNameInput();
        ctx.removeAllItem();
    }

    const dataAreValid = dateInputHasError||phoneInputHasError||surnameInputHasError||nameInputHasError
        ? false
        : true;

    return(
        <>
            <form className={Styles.orderForm}>
                <NameInput
                    nameValue={userName}
                    saveName={setUserName}
                    onBlur={nameBlurHandler}
                    hasError={nameInputHasError}
                />
                <SurnameInput
                    surnameValue={userSurname}
                    saveSurname={setUserSurname}
                    onBlur={surnameBlurHandler}
                    hasError={surnameInputHasError}
                />
                <PhoneInput
                    phoneValue={userPhone}
                    savePhone={setUserPhone}
                    onBlur={phoneBlurHandler}
                    hasError={phoneInputHasError}
                />
                <DateInput
                    dateValue={userDate}
                    saveDate={setUserDate}
                    onBlur={dateBlurHandler}
                    hasError={dateInputHasError}
                />
            </form>
            <div className={Styles.actions} onSubmit={orderButtonHandler}>
                <OrderButton className={Styles.button} onClick={orderButtonHandler} disable={dataAreValid}/>
                <ReturnButton className={Styles.button} closeFormWindow={props.closeFormWindow}/>
            </div>
        </>
    );
}