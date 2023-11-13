import formatPrice from "./formatPrice";

describe('[Services] formatPrice testing', () => {
    it ('testing formatPrice', () => {
        const priceFormatted = formatPrice(100);

        expect(priceFormatted).toBeTruthy();
    });
});