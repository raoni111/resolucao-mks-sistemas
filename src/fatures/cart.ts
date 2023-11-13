import { createSlice } from "@reduxjs/toolkit";
import { CartProductType, ProductType } from "../services/types/product-protocol";

type ActionType = {
    payload: ProductType,
    type: string,
}

type ActionProductAmount = {
    type: string,
    payload: {
        product: ProductType,
        amount: number,
    }
}


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        products: [] as CartProductType[],
    },
    reducers: {
        incrementProduct: (state, action: ActionType) => {
            const exists = state.products.find(product => product.id === action.payload.id);

            if (exists) {
                return;
            }

            state.products.push({
                ...action.payload,
                amount: 1,
            });
        },
        decrementProduct: (state, action: ActionType) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        addProductAmount: (state, action: ActionProductAmount) => {
            state.products = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    return {
                        ...product,
                        amount: action.payload.amount,
                    }
                }
                return product;
            })
        }
    }
});

export const {incrementProduct, decrementProduct, addProductAmount} = cartSlice.actions;

export default cartSlice.reducer;