import ProductApiProtocol, { ProductsType } from "./types/product-protocol";


export class ProductApi implements ProductApiProtocol {
    async getProduct(): Promise<ProductsType> {
        return fetch(`${process.env.REACT_APP_API_URL}/products?page=1&rows=8&sortBy=id&orderBy=DESC`).then((response) => response.json());
    }
}

const productApi = new ProductApi();

export default productApi;