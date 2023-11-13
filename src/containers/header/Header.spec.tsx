import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import HeaderStore from "./index";

describe('[Container] HeaderStore Testing', () => {
    it('open button click testing', () => {

        render(
            <Provider store={store}>
                <HeaderStore/>
            </Provider>
        );

        const button = screen.getByTestId('open-cart-button');

        fireEvent.click(button);

        expect(store.getState().displayCartSlice.displayCart).toBe(true);
    });
});