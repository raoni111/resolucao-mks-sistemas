import { createSlice } from "@reduxjs/toolkit";
import { CartProductType, ProductType } from "../services/types/product-protocol";
import saveCache from "../services/saveCache";
import lscache from "lscache";

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

const returnProductCache = () => {
    const productCache = lscache.get('products') as CartProductType[];
    if (productCache) {
        return productCache;
    }

    return [];
}


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        products: returnProductCache(),
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

            saveCache(state.products);
        },
        decrementProduct: (state, action: ActionType) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
            saveCache(state.products);
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
            });

            saveCache(state.products);
        }
    }
});

export const {incrementProduct, decrementProduct, addProductAmount} = cartSlice.actions;

export default cartSlice.reducer;