import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducerSlice";

const appStore = configureStore(
{
    //main reducer, contains slices of the reducers.
    reducer:{
        cart: cartReducer,
    }
}
);

export default appStore;