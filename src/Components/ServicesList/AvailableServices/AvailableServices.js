import ServicesItem from "../ServiceItem/ServicesItem";
import React from 'react';
import Styles from "./AvailableServices.module.css"
import { v4 as uuidv4 } from 'uuid';

const DUMMY_SERVICES = [
    {
        name: "Oil change",
        description: "Changing engine oil and filters",
        price: 150
    },
    {
        name: "Repair tyres",
        description: "Changing tyres, repairing tyres",
        price: 75
    },
    {
        name: "Repair brakes",
        description: "Reapir of the break system, change of brake pads",
        price: 180
    },
    {
        name: "Computer diagnostic",
        description: "Conecting into on-board computer and looking for errors",
        price: 50
    },
    {
        name: "Washing car",
        description: "Hand washing the car",
        price: 20
    },
];

const AvailableServices = () =>{
    const ServicesList = DUMMY_SERVICES.map(service => {
        const id_key = uuidv4();
        return (<ServicesItem key={id_key} serviceElement={service}/>);
    });
    return(
        <div className={Styles.servicesContainer}>
            <ul>
                {ServicesList}
            </ul>
        </div>
    );
};

export default AvailableServices;