import React , {useState} from 'react';
import Header from "./Components/Layout/Header";
import ServisecList from "./Components/ServicesList/ServisecList";
import CartProvider from "./Store/CartProvider";
import OrderCart from "./Components/OrderCart/OrderCart";

const App = () => {
    const [orderWindowIsActive, setOrderWindowIsActive] = useState(false);

    const openOrderWindowHandler = () => {
        setOrderWindowIsActive(true);
    }

    const closeOrderWindowHandler = () => {
        setOrderWindowIsActive(false);
    }

    return (
        <React.Fragment>
            <CartProvider>
                {orderWindowIsActive && <OrderCart onClick={closeOrderWindowHandler}/>}
                <Header openOrderWindow={openOrderWindowHandler}/>
                <main>
                    <ServisecList/>
                </main>
            </CartProvider>
        </React.Fragment>

  );
}

export default App;
