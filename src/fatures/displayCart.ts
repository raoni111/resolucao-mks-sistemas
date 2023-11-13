import { createSlice } from "@reduxjs/toolkit";


const displayCartSlice = createSlice({
    name: 'displaySlice',
    initialState: {
        displayCart: false,
    },
    reducers: {
        huddleDisplayCart: (state) => {
            state.displayCart = !state.displayCart;
        },
        getDisplay: (state) => {
            return state;
        }
    },
});

export const { huddleDisplayCart, getDisplay } =  displayCartSlice.actions;

export default displayCartSlice.reducer;