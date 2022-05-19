import React from "react";

export const SurnameInput = (props) => {
    const surnameInputHandler = (event) =>{
        props.saveSurname(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"surname"}>Surname : </label>
            <input type={"text"} id={"surname"} onChange={surnameInputHandler}/>
        </div>
    );
}