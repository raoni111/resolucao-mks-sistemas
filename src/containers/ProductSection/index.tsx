// import { useQuery } from "react-query";
import ProductElement from "../../components/ProductElement";
import Section, { ProductContent } from "./styles";
import productApi from "../../services/ProductApi";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function ProductSection(): React.ReactElement {
    const query = useQuery('product-query', productApi.getProduct);

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