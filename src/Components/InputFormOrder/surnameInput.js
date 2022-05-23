import React from "react";

export const SurnameInput = (props) => {
    const surnameInputHandler = (event) =>{
        props.saveSurname(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"surname"}>Surname : </label>
            <input
                value={props.surnameValue}
                type={"text"}
                id={"surname"}
                onChange={surnameInputHandler}
                onBlur={props.onBlur}
            />
            {props.hasError && <p>Invalid Surname</p>}
        </div>
    );
}