import { Provider } from "react-redux";
import { ProductType } from "../../services/types/product-protocol";
import ProductElement from ".";
import { render, screen } from "@testing-library/react";
import store from "../../store";

const testProduct: ProductType = {
    id: 1,
    name: 'testName',
    brand: 'testeBrand',
    description: 'testeDescription',
    photo: 'testePhoto',
    price: '100',
    createdAt: 'testeCreatedAt',
    updatedAt: 'testeUpdatedAt',
}

describe('[Components] ProductElement Testing', () => {
    it('product name is being shown', () => {
        render(
            <Provider store={store}>
                <ProductElement product={testProduct} />
            </Provider>
        );

        expect(screen.getByText(testProduct.name)).toBeTruthy();
    });
    it('product price is being shown', () => {
        render(
            <Provider store={store}>
                <ProductElement product={testProduct} />
            </Provider>
        );

        expect(screen.getByText(`R$ ${testProduct.price}`)).toBeTruthy();
    });
    it('product description is being shown', () => {

        render(
            <Provider store={store}>
                <ProductElement product={testProduct} />
            </Provider>
        );

        expect(screen.getByText(testProduct.description)).toBeTruthy();
    });
});