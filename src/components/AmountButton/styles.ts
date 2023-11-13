import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

export const AmountButtonElement = styled.div`
    width: 55px;
    h1 {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }
`;

export const AmountButtonsContainer = styled.div`
    ${DisplayFlex('row', 'space-evenly', 'center')}
    height: 19px;
    padding: 0rem 0.3rem;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    h2 {
        padding: 0rem 0.5rem;
        font-size: 1rem;
        border-left: 1px solid #BFBFBF;
        border-right: 1px solid #BFBFBF;
    }
    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
    }
`;