import { useDispatch, useSelector } from "react-redux";
import { ButtonCloseCart, CartBuyButton, CartElement, CartFooter, CartHeader, CartMain, ProductContainer, TotalOfPurchase } from "./styles";
import { huddleDisplayCart } from "../../fatures/displayCart";
import { CartProductType } from "../../services/types/product-protocol";
import { CartProductComponents } from "../../components/CartProductComponents";
import sumTotalOfProduct from "../../services/sumTotalOfProduct";

export default function Cart(): React.ReactElement {
    const displayCart = useSelector((state: any) => state.displayCartSlice.displayCart)
    const cart = useSelector((state: any) => state.cartSlice.products) as CartProductType[];
    const dispatch = useDispatch();

    const huddleClick = () => {
        dispatch(huddleDisplayCart());
    }

    return (
        <CartElement $displayElement={displayCart}>
            <CartMain>
                <CartHeader>
                    <h1>Carrinho de compras</h1>
                    <ButtonCloseCart data-testid='cart-close-button' onClickCapture={huddleClick}>X</ButtonCloseCart>
                </CartHeader>
                <ProductContainer>
                    {cart.map(product => {
                        return <CartProductComponents product={product} />
                    })}
                </ProductContainer>
            </CartMain>
            <CartFooter>
                <TotalOfPurchase>
                    <h2>Total</h2>
                    <h2>{sumTotalOfProduct(cart)}</h2>
                </TotalOfPurchase>
                <CartBuyButton>
                    Finalizar Compra
                </CartBuyButton>
            </CartFooter>
        </CartElement>
    );
}