import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

const CartIconContent = styled.div`
    ${DisplayFlex('row', 'center', 'center')}
    cursor: pointer;
    height: 4.5rem;
    width: 9rem;
    border-radius: 8px;
    background-color: var(--threaded-color);

    span {
        margin-left: 1.5rem;
        font-size: 1.8rem;
        font-weight: bolder;
    }
`

export default CartIconContent;