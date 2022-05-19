import React , {useState} from 'react';
import Header from "./Components/Layout/Header";
import ServisecList from "./Components/ServicesList/ServisecList";
import CartProvider from "./Store/CartProvider";
import OrderCart from "./Components/OrderCart/OrderCart";
import {InputFormOrder} from "./Components/InputFormOrder/InputFormOrder";

const App = () => {
    const [orderWindowIsActive, setOrderWindowIsActive] = useState(false);
    const [formWindowIsActive, setFormWindowIsActive] = useState(false);
    const openOrderWindowHandler = () => {
        setOrderWindowIsActive(true);
    }

    const closeOrderWindowHandler = () => {
        setOrderWindowIsActive(false);
    }

    const openFormWindow = () =>{
        setOrderWindowIsActive(false);
        setFormWindowIsActive(true);
    }

    return (
        <>
            <CartProvider>
                {formWindowIsActive && <InputFormOrder></InputFormOrder>}
                {orderWindowIsActive && <OrderCart onClick={closeOrderWindowHandler} onClickOrder={openFormWindow}/>}
                <Header openOrderWindow={openOrderWindowHandler}/>
                <main>
                    <ServisecList/>
                </main>
            </CartProvider>
        </>

  );
}

export default App;
