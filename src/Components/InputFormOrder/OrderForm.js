import React, {useState} from "react";
import {NameInput} from "./nameInput";
import {SurnameInput} from "./surnameInput";
import {PhoneInput} from "./phoneInput";
import {DateInput} from "./dateInput";
import {OrderButton} from "./orderButton";
import {ReturnButton} from "./returnButton";
import Styles from "./OrderForm.module.css";

export const OrderForm = () => {
    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDate,setUserDate] = useState("");

    const getUserName = (name) => {
        setUserName(name);
    }
    const getUserSurname = (surname) => {
        setUserSurname(surname);
    }
    const getUserPhone = (phone) => {
        setUserPhone(phone);
    }
    const getUserDate = (date) => {
        setUserDate(date);
    }
    const orderButtonHandler = (event) => {
        event.preventDefault();
        console.log(userName);
        console.log(userSurname);
        console.log(userPhone);
        console.log(userDate);
    }
    return(
        <>
            <form className={Styles.orderForm}>
                <NameInput saveName={getUserName}/>
                <SurnameInput saveSurname={getUserSurname}/>
                <PhoneInput savePhone={getUserPhone}/>
                <DateInput saveDate={getUserDate}/>
            </form>
            <div className={Styles.actions} onSubmit={orderButtonHandler}>
                <OrderButton className={Styles.button} onClick={orderButtonHandler}/>
                <ReturnButton className={Styles.button}/>
            </div>
        </>
    );
}