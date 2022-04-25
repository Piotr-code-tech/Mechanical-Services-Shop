import React from "react";
import serviceImage from "../../Images/genuine-volvo-service.jpg"
import Styles from "./Header.module.css";
import CartButton from "../UI/CartButton/CartButton";

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={Styles.header}>
                <h1>Mechanical Services</h1>
                <CartButton onClick={props.openOrderWindow}/>
            </header>
            <div className={Styles["main-image"]}>
                <img src={serviceImage} alt={"Truck Service"}/>
            </div>
        </React.Fragment>
    );
}

export default Header;