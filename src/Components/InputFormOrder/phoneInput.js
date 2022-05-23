import React from "react";
export const PhoneInput = (props) => {
    const phoneInputHandler = (event) =>{
        props.savePhone(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"phone"}>Phone Number : </label>
            <input
                value={props.phoneValue}
                type={"tel"}
                id={"phone"}
                onChange={phoneInputHandler}
                onBlur={props.onBlur}
            />
            {props.hasError && <p>Invalid phone</p>}
        </div>
    );
}