import ServicesItem from "../ServiceItem/ServicesItem";
import React from 'react';
import Styles from "./AvailableServices.module.css"
import { v4 as uuidv4 } from 'uuid';

const AvailableServices = (props) =>{
    const ServicesList = props.services.map(service => {
        const id_key = uuidv4();
        return (<ServicesItem key={id_key} serviceElement={service}/>);
    });
    return(
        <div className={Styles.servicesContainer}>
            {props.isLoading === true
                ? <p className={Styles.alert}>Services are uploading ...</p>
                : <ul>{ServicesList}</ul>
            }
        </div>
    );
};

export default AvailableServices;