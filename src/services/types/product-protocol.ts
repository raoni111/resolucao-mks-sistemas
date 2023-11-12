
export type ProductType = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

export type ProductsType = {
    products: ProductType[];
    count: number;
}

export default interface ProductApiProtocol {
    getProduct(): Promise<ProductsType>;
} 