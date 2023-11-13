import productApi from "./ProductApi";

describe('[Services] PRoductApi', () => {
    it('method getProduct testing', async () => {
        await productApi.getProduct().then((response) => {
            expect(response.count).toBe(8);
        });
    });

});