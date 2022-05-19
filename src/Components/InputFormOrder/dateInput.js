import React from "react";
export const DateInput = (props) => {
    const dateInputHandler = (event) =>{
        props.saveDate(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"date"}>Service date :</label>
            <input type={"date"} id={"date"} onChange={dateInputHandler}/>
        </div>
    );
}