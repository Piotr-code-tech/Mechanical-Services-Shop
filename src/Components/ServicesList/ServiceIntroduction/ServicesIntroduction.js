import React from 'react';
import Styles from "./ServicesIntroduction.module.css";

const ServicesIntroduction = () => {
    return(
        <div className={Styles.introductionContainer}>
            <div>
                <p>Choose which services are you intrested in and next We will contact you as soon as it would be possiblle to present the repair schedule</p>
                <p>If you have some questions write to as email service@service.com</p>
            </div>
        </div>
    );
}

export default ServicesIntroduction;