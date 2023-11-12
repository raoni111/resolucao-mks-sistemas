import axios from "axios";
import ProductApiProtocol, { ProductsType } from "./types/product-protocol";
import env from "react-dotenv";


class ProductApi implements ProductApiProtocol {
    async getProduct(): Promise<ProductsType> {
        return fetch(`${env.API_URL}/products?page=1&rows=8&sortBy=name&orderBy=DESC`).then((response) => response.json());
    }
}

const productApi = new ProductApi();

export default productApi;