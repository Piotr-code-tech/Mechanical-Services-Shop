import React from "react";

export const ReturnButton = (props) => {
    const returnHandler = () => {
        props.closeFormWindow(false);
    }
    return(
        <button onClick={returnHandler}>Return</button>
    );
}