import { useEffect, useState } from 'react';
import { CartProductType } from '../../services/types/product-protocol';
import AmountButton from '../AmountButton';
import { CartProductAmount, CartProductElement, CartProductImg, CartProductName, CartProductPrice, DecrementCartProduct } from './styles';
import formatPrice from '../../services/formatPrice';
import { useDispatch } from 'react-redux';
import { addProductAmount, decrementProduct } from '../../fatures/cart';

interface CartProductComponentsProps {
    product: CartProductType;
}

export function CartProductComponents({product}: CartProductComponentsProps): React.ReactElement {
    const [amount, setAmount] = useState(product.amount);
    const dispatch = useDispatch();

    const huddleCartDecrement = () => {
        dispatch(decrementProduct(product)); //
    }

    useEffect(() => {
        dispatch(addProductAmount({
            product,
            amount,
        }));
    }, [amount]);

    return (
        <CartProductElement>
            <DecrementCartProduct onClickCapture={huddleCartDecrement}>
                X
            </DecrementCartProduct>
            <CartProductImg>
                <img src={product.photo} alt={product.description} />
            </CartProductImg>
            <CartProductName>
                <h2 id='card-product-name'>{product.name}</h2>
            </CartProductName>
            <CartProductAmount>
                <AmountButton amount={amount} setAmount={setAmount} />
            </CartProductAmount>
            <CartProductPrice>
                <h2 id='card-product-price'>{formatPrice(Number(product.price), amount)}</h2>
            </CartProductPrice>
        </CartProductElement>
    )
}