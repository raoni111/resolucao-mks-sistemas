import formatPrice from "./formatPrice";
import { CartProductType } from "./types/product-protocol";

export default function sumTotalOfProduct(products: CartProductType[]): string {
    let total = 0;

    products.forEach(product => {
        total += Number(product.price) * product.amount;
    });

    return formatPrice(total);
}