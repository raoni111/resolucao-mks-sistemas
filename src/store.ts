import { configureStore } from "@reduxjs/toolkit";
import displayCartSlice from './fatures/displayCart';
import cartSlice from './fatures/cart';

export default configureStore({
    reducer: {
        displayCartSlice,
        cartSlice,
    }
})