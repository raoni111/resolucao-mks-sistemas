import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

export const CartProductElement = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    align-items: center;
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
    border-radius: 8px;
    background-color: var(--threaded-color);
    @media (max-width: 467px) {
        grid-template-columns: 1fr 0.1fr 1fr 1.5fr;
    }
`;

export const DecrementCartProduct = styled.button`
    ${DisplayFlex("row", "center", "center")}
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border: none;
    font-size: 1.2rem;
    border-radius: 100%;
    background-color: var(--black-bg-s-color);
    color: var(--threaded-color);
`;

export const CartProductImg = styled.figure`
    width: 70px;
    img {
        width: 70px;
    }
    @media (max-width: 467px) {
        width: 60px;
        img {
            width: 60px;
        }
    }
`;

export const CartProductName = styled.div`
    margin: 0rem;
    width: 120px;
    h2 {
        text-align: start;
        font-size: 1.3rem;
        font-weight: 400;
    }
    @media (max-width: 467px) {
        width: 80px;
        h2 {
            font-size: 1rem;
        }
    }
`;

export const CartProductAmount = styled.div``;

export const CartProductPrice = styled.div`
    font-weight: 1000;
    font-style: normal;
    font-size: 1.2rem;
    @media (max-width: 467px) {
        font-size: 1rem;
    }
`;
