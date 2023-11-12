import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

export const Product = styled.article`
    ${DisplayFlex('column', 'space-between', 'center')}
    overflow: hidden;
    height: 285px;
    background-color: var(--threaded-color);
    box-shadow: 0px 2px 8px 0px var(--box-shadow-color);
    border-radius: 8px;
`;



export const ProductInformation = styled.div`
    padding: 1.5rem;
    padding-top: 0px;
`;

export const ImgContent = styled.figure`
    ${DisplayFlex('row', 'center', 'center')}
    width: 100%;
    height: 129px;
    img {
        width: 48%;
    }
`;

export const ProductNameContent = styled.div`
    ${DisplayFlex('row', 'space-between', 'center')}
    h2 {
        ${DisplayFlex('row', 'start', 'center')}
        width: 124px;
        height: 38px;
        font-size: 1.5rem;
    }
    span {
        font-size: 1.5rem;
        background-color: var(--bg-price-color);
        color: var(--threaded-color);
        padding: 0.4rem;
        border-radius: 5px;
        font-weight: 700;
    }
`;

export const ProductDescriptionContent = styled.div`
    margin-top: 0.5rem;
    p {
        font-size: 1rem;
    }
`;

export const ButtonContent = styled.div`
    width: 100%;
    color: var(--threaded-color);
    .buy-button {
        ${DisplayFlex('row', 'center', 'center')}
        cursor: pointer;
        width: 100%;
        border: none;
        font-size: 1.4rem;
        padding: 0.5rem 0.5rem;
        background-color: var(--secondary-color);
        color: var(--threaded-color);
        span {
            margin-left: 1rem;
        }
    }
`;