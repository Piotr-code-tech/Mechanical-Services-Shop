import {useState} from "react";

export const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && enteredValueTouched;

    const valueChangeHandler = (value) => {
        setEnteredValue(value);
    }
    const inputBlurHandler = () => {
        setEnteredValueTouched(true);
    }
    const reset = () =>{
        setEnteredValue("");
        setEnteredValueTouched(false);
    };

    return{
        value : enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        inputBlurHandler: inputBlurHandler,
        reset: reset
    };
}