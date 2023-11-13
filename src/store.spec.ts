import { configureStore } from "@reduxjs/toolkit";
import displayCartSlice from './fatures/displayCart';
import cartSlice, { addProductAmount, decrementProduct, incrementProduct } from './fatures/cart';
import { CartProductType } from "./services/types/product-protocol";

const testProduct: CartProductType = {
    id: 1,
    name: 'testName',
    brand: 'testeBrand',
    description: 'testeDescription',
    photo: 'testePhoto',
    price: '100',
    amount: 1,
    createdAt: 'testeCreatedAt',
    updatedAt: 'testeUpdatedAt',
}

describe('[Store/Fature]', () => {
    const store = configureStore({
        reducer: {
            displayCartSlice,
            cartSlice,
        }
    });

    it('cart increment', () => {
        store.dispatch(incrementProduct(testProduct));

        expect(store.getState().cartSlice.products.length).toBe(1);
    });
    it('cart decrement', () => {
        store.dispatch(incrementProduct({
            ...testProduct,
            id: 1,
        }));
        store.dispatch(incrementProduct({
            ...testProduct,
            id: 2,
        }));
        store.dispatch(decrementProduct({
            ...testProduct,
            id: 1,
        }));

        expect(store.getState().cartSlice.products.length).toBe(1);
    });
    it('cart add amount', () => {
        store.dispatch(incrementProduct({
            ...testProduct,
            id: 2,
        }));
        store.dispatch(addProductAmount({
            amount: 20,
            product: {
                ...testProduct,
                id: 2,
            }
        }));

        expect(store.getState().cartSlice.products[0].amount).toBe(20);
    });
});