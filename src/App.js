import React, {useEffect, useState} from 'react';
import Header from "./Components/Layout/Header";
import ServisecList from "./Components/ServicesList/ServisecList";
import CartProvider from "./Store/CartProvider";
import OrderCart from "./Components/OrderCart/OrderCart";
import {InputFormOrder} from "./Components/InputFormOrder/InputFormOrder";
import {useHTTP} from "./hooks/useHTTP";

const App = () => {
    const [orderWindowIsActive, setOrderWindowIsActive] = useState(false);
    const [formWindowIsActive, setFormWindowIsActive] = useState(false);
    const [services, setServices] = useState([]);

    const transformServices = (serviceObj) => {
        const loadedServices = [];
        for(const key in serviceObj){
            loadedServices.push({
                name: serviceObj[key].name,
                description: serviceObj[key].description,
                price: serviceObj[key].price
            });
        }
        setServices(loadedServices);
    };

    const {isLoading, error, sendRequest : fetchServices} = useHTTP(
        {
        url: 'https://mechanical-services-28b54-default-rtdb.europe-west1.firebasedatabase.app//Services.json',
        },
        transformServices
    );
    useEffect(()=>{
       fetchServices();
    },[]);

    const openOrderWindowHandler = () => {
        setOrderWindowIsActive(true);
    }

    const closeOrderWindowHandler = () => {
        setOrderWindowIsActive(false);
    }

    const openFormWindow = () =>{

        setFormWindowIsActive(true);
    }

    return (
        <>
            <CartProvider>
                {formWindowIsActive && <InputFormOrder closeFormWindow={setFormWindowIsActive}></InputFormOrder>}
                {orderWindowIsActive && !formWindowIsActive && <OrderCart onClick={closeOrderWindowHandler} onClickOrder={openFormWindow}/>}
                <Header openOrderWindow={openOrderWindowHandler}/>
                <main>
                    <ServisecList services={services} isLoading={isLoading}/>
                </main>
            </CartProvider>
        </>

  );
}

export default App;
