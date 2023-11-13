import { render, screen } from "@testing-library/react";
import CartButton from ".";

describe('[Components] CartButton Testing', () => {
    render(<CartButton numberOfProducts={3} onClickCapture={() => {}} />);
    it('number of products being scheduled', () => {
        expect(screen.getByText('3')).toBeTruthy();
    });

    it('testing onClick', () => {
        const huddleOnClick = (text: string) => {
            expect(text).toBe('test');
        }

        render(<CartButton numberOfProducts={3} onClickCapture={() => {
            huddleOnClick('test');
        }} />);
        const element = screen.getByText('3');

        element.click();


    })
});