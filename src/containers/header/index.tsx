import { useDispatch, useSelector } from "react-redux";
import CartButton from "../../components/CartButton";
import {Header, Logo} from "./styles";
import { huddleDisplayCart } from "../../fatures/displayCart";

export default function HeaderStore(): React.ReactElement {
    const cartLength = useSelector((state: any) => state.cartSlice.products.length);
    const dispatch = useDispatch();

    const huddleOnClick = () => {
        dispatch(huddleDisplayCart())
    }

    return (
        <Header>
            <Logo>
                <h1>
                    MKS
                    <span>Sistemas</span>
                </h1>
            </Logo>
            <CartButton numberOfProducts={cartLength} onClickCapture={huddleOnClick}/>
        </Header>
    )
}