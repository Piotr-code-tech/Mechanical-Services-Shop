import React from "react";
export const PhoneInput = (props) => {
    const phoneInputHandler = (event) =>{
        props.savePhone(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"phone"}>Phone Number : </label>
            <input type={"tel"} id={"phone"} onChange={phoneInputHandler}/>
        </div>
    );
}