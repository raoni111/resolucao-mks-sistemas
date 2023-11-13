import styled, { css } from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

export const CartElement = styled.aside<{ $displayElement?: boolean }>`
    ${DisplayFlex("column", "start", "auto")}
    position: fixed;
    right: 0px;
    z-index: 3;
    width: 480px;
    height: 100vh;
    opacity: 1;
    background-color: var(--secondary-color);
    box-shadow: -5px 0px 6px 0px var(--box-shadow-color);
    transition: all 0.2s ease-in-out;

    ${(props) => {
        if (!props.$displayElement) {
            return css`
                right: -480px;
                opacity: 0;
            `;
        }
    }}

    @media (max-width: 467px) {
        width: 100%;
    }
`;

export const CartMain = styled.div``;

export const CartHeader = styled.header`
    ${DisplayFlex("row", "space-between", "center")}
    margin-top: 3.6rem;
    padding: 0rem 4rem;
    color: var(--threaded-color);
    h1 {
        font-size: 2.7rem;
        width: 180px;
    }
    @media (max-width: 467px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const ButtonCloseCart = styled.button`
    cursor: pointer;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    font-size: 1.8rem;
    border: none;
    border-radius: 100%;
    background-color: var(--black-bg-s-color);
    color: var(--threaded-color);
`;

export const ProductContainer = styled.section`
    overflow-y: auto;
    width: 100%;
    height: ${window.innerHeight * 0.5}px;
    padding: 0rem 4rem;
    margin-top: 7rem;
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--threaded-color);
        border-radius: 20px;
    }
    @media (max-width: 467px) {
        padding: 0rem 2rem;
    }
`;

export const CartFooter = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
`;

export const TotalOfPurchase = styled.section`
    ${DisplayFlex("row", "space-between", "center")}
    padding: 0rem 4rem;
    margin-bottom: 3rem;
    h2 {
        font-size: 2.8rem;
        color: var(--threaded-color);
    }
    @media (max-width: 467px) {
        h2 {
            font-size: 2rem;
        }
    }
`;

export const CartBuyButton = styled.button`
    cursor: pointer;
    width: 100%;
    border: none;
    font-size: 2.8rem;
    padding: 2rem 0rem;
    background-color: var(--black-bg-s-color);
    color: var(--threaded-color);
    @media (max-width: 467px) {
        font-size: 2rem;
    }
`;
