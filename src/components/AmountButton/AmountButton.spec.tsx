import { render, screen } from "@testing-library/react";
import AmountButton from "./index";

describe('[Components] AmountButton Testing', () => {

    it('amount show in the button', () => {
        render(<AmountButton amount={1} setAmount={() => {}} />);

        expect(screen.getByText('1')).toBeTruthy();
    });
});