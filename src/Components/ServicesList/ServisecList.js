import React from 'react';
import ServicesIntroduction from "./ServiceIntroduction/ServicesIntroduction";
import AvailableServices from "./AvailableServices/AvailableServices";
const ServicesList = (props) => {
    return(
        <React.Fragment>
            <ServicesIntroduction/>
            <AvailableServices services={props.services} isLoading={props.isLoading}/>
        </React.Fragment>
    );
}

export default ServicesList;