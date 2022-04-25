import React from 'react';
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";

const Backdrop = () => {
    return(
        <div className={Styles.backdrop}></div>
    );
}

const ModalOverlay = (props) => {

    return(<div className={Styles.modal}>
        <div>{props.children}</div>
    </div>
    );
}

const modalPortal = document.getElementById("overlays");

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>,modalPortal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,modalPortal)}
        </React.Fragment>
    );
}

export default Modal;