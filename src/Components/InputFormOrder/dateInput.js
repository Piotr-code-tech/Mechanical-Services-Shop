import React from "react";
export const DateInput = (props) => {
    const dateInputHandler = (event) =>{
        props.saveDate(event.target.value);
    }
    return(
        <div>
            <label htmlFor={"date"}>Service date :</label>
            <input
                value={props.dateValue}
                type={"date"}
                id={"date"}
                onChange={dateInputHandler}
                onBlur={props.onBlur}
            />
            {props.hasError && <p>Invalid date</p>}
        </div>
    );
}