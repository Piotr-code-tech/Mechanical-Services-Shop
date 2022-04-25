import React from 'react';
import ServicesIntroduction from "./ServiceIntroduction/ServicesIntroduction";
import AvailableServices from "./AvailableServices/AvailableServices";
const ServicesList = () => {
    return(
        <React.Fragment>
            <ServicesIntroduction/>
            <AvailableServices/>
        </React.Fragment>
    );
}

export default ServicesList;