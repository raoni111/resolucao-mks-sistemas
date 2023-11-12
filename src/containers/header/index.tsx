import CartButton from "../../components/CartButton";
import {Header, Logo} from "./styles";

export default function HeaderStore(): React.ReactElement {
    const numberOfProducts = 0;

    return (
        <Header>
            <Logo>
                <h1>
                    MKS
                    <span>Sistemas</span>
                </h1>
            </Logo>
            <CartButton numberOfProducts={numberOfProducts} />
        </Header>
    )
}