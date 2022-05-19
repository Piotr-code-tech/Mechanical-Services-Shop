import React from "react";

export const NameInput = (props) => {
    const nameInputHandler = (event) =>{
        props.saveName(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"name"}>Name : </label>
            <input type={"text"} id={"name"} onChange={nameInputHandler}/>
        </div>
    );
}