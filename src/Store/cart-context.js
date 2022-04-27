import React from 'react';

const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    removeOneItem: (item) => {}
});

export default cartContext;