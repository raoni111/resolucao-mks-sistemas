import { CartProductType } from "./types/product-protocol";
import lscache from "lscache";

export default function saveCache(products: CartProductType[]): void {
    lscache.set('products', products, 60 * 5);
}