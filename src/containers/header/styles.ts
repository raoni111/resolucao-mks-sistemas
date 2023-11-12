import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

export const Header = styled.header`
    ${DisplayFlex('row', 'space-between', 'center')}
    background-color: var(--secondary-color);
    padding: 2rem;
`;

export const Logo = styled.div`
    h1 {
        color: var(--threaded-color);
        font-size: 4rem;
    }
    h1 span {
        font-size: 2rem;
        font-weight: 300;
        margin-left: 0.5rem;
    }
`;