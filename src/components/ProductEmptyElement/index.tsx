import { ButtonContent, EmptyElement, ImgContent, Product, ProductDescriptionContent, ProductInformation, ProductNameContent } from "./styles";

export default function ProductEmptyElement(): React.ReactElement {
    return (
        <Product>
            <ProductInformation>
                <ImgContent>
                    <EmptyElement $height="140px" $width="200px" $circle />
                </ImgContent>
                <ProductNameContent>
                <EmptyElement $height="30px" $width="200px" $circle />
                </ProductNameContent>
                <ProductDescriptionContent>
                <EmptyElement $height="50px" $width="200px" $circle />
                </ProductDescriptionContent>
            </ProductInformation>
            <ButtonContent>
            </ButtonContent>
        </Product>
    )
}