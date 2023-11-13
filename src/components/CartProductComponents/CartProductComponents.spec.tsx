import { render, screen, fireEvent } from "@testing-library/react";
import { CartProductComponents } from ".";
import { CartProductType } from "../../services/types/product-protocol";
import { Provider } from "react-redux";
import store from "../../store";

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

describe('[Components] CartProductComponents', () => {
    it('product name is being shown', () => {
        render(
            <Provider store={store}>
                <CartProductComponents product={testProduct} />
            </Provider>
        );

        expect(screen.getByText(testProduct.name)).toBeTruthy();
    });
    it('product price is being shown', () => {

        render(
            <Provider store={store}>
                <CartProductComponents product={testProduct} />
            </Provider>
        );

        expect(screen.getByText(`R$ ${testProduct.price}`)).toBeTruthy();
    });
    it('increment test', () => {
        render(
            <Provider store={store}>
                <CartProductComponents product={testProduct} />
            </Provider>
        );

        const button = screen.getByTestId('amount-button-increment');
        const amountElement = screen.getByTestId('amount-content');

        fireEvent.click(button);

        expect(amountElement.textContent).toBe('2');

    });
})