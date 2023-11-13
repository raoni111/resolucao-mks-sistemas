// import { useQuery } from "react-query";
import ProductElement from "../../components/ProductElement";
import Section, { ProductContent } from "./styles";
import productApi from "../../services/ProductApi";
import { useQuery } from "react-query";
import ProductEmptyElement from "../../components/ProductEmptyElement";

export default function ProductSection(): React.ReactElement {
    const query = useQuery('product-query', productApi.getProduct);

    if (query.isLoading) {
        return (
            <Section>
            <ProductContent>
                <ProductEmptyElement />
                <ProductEmptyElement />
                <ProductEmptyElement />
                <ProductEmptyElement />
                <ProductEmptyElement />
                <ProductEmptyElement />
                <ProductEmptyElement />
                <ProductEmptyElement />
            </ProductContent>
        </Section>
        )
    }

    return (
        <Section>
            <ProductContent>
                {query.data?.products.map(product => {
                    return <ProductElement product={product} />
                })}
            </ProductContent>
        </Section>
    )
}