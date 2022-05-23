import React from "react";

export const OrderButton = (props) => {
    return(
        <button
            type={"submit"}
            onClick={props.onClick}
            disabled={!props.disable}
        >
            Order
        </button>
    );
}