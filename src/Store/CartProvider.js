import CartContext from "./cart-context";
import {useReducer} from "react";
import {saveData,getData} from "../LocalStorage/LocalStorage-operations";

const calculateTotalAmount = () => {
    const arr =getData("cartItems")??[];
    let totalAmount = 0;
    arr.forEach((element)=>{
        totalAmount = totalAmount + (element.price * element.amount);
    });
        return totalAmount;
}

const storedItems = getData("cartItems") ?? [];

const defaultCartState = {
    items: [...storedItems],
    totalAmount: calculateTotalAmount(),
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM"){
        const existingCartItemIndex = state.items.findIndex(element=> element.name === action.item.name);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems=[
                ...state.items
            ];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        saveData(updatedItems,"cartItems")
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items: getData("cartItems"),
            totalAmount: updatedTotalAmount,
        };
    }
    if(action.type === "DELETE_ITEM"){
        const downloadedStorageList = getData("cartItems");
        const updatedStorageList = downloadedStorageList.filter(
            element => {
                return element.id !== action.id;
            }
        );
        saveData(updatedStorageList,"cartItems");
        const updatedTotalAmount =  calculateTotalAmount(updatedStorageList);
        return {
            items: updatedStorageList,
            totalAmount: updatedTotalAmount,
        };
    }
    if(action.type === "DELETE_ONE_ITEM"){
        const existingCartItemIndex = state.items.findIndex(element=> element.name === action.item.name);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem.amount > 1){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };
            updatedItems=[
                ...state.items
            ];
            updatedItems[existingCartItemIndex] = updatedItem;
            saveData(updatedItems,"cartItems")
        } else {
            const downloadedStorageList = getData("cartItems");
            const updatedStorageList = downloadedStorageList.filter(
                element => {
                    return element.name !== action.item.name;
                }
            );
            saveData(updatedStorageList,"cartItems");
        }
        const updatedTotalAmount =  calculateTotalAmount(getData("cartItems"));
        return{
            items: getData("cartItems"),
            totalAmount: updatedTotalAmount,
        };
    };
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD_ITEM", item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "DELETE_ITEM", id: id});
    };

    const removeOneItemHandler = (item) => {
        dispatchCartAction({type: "DELETE_ONE_ITEM", item: item});
    };

    const  cartContext = {
        items: cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        removeOneItem: removeOneItemHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;