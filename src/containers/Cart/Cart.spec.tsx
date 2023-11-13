import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import Cart from ".";
import store from "../../store";

describe('[Container] Header', () => {
    it('open cart testing', () => {

        render(
            <Provider store={store}>
                <Cart/>
            </Provider>
        );

        const button = screen.getByTestId('cart-close-button');

        fireEvent.click(button);

        expect(store.getState().displayCartSlice.displayCart).toBe(true);
    });
});