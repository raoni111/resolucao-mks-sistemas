import styled, { css } from "styled-components";
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
`;

export const ProductNameContent = styled.div`
    ${DisplayFlex('row', 'space-between', 'center')}

`;

export const ProductDescriptionContent = styled.div`
    margin-top: 0.5rem;

`;

export const ButtonContent = styled.div`
    width: 100%;
    color: var(--threaded-color);
`;

export const EmptyElement = styled.div<{$width: string, $height: string, $circle?: boolean}>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    background-color: #7F7F7F;
    margin-top: 1rem;

    ${(props) => {
        if (props.$circle) {
            return css`
                border-radius: 8px;
            `
        }
    }}

    animation: EmptyElement 1s ease-in-out infinite;

    @keyframes EmptyElement {
        0% {
            background-color: #C2C1C1;
            transform: scale(1);
        }
        50% {
            transform: scale(0.98);
            background-color: #CCCBCB;
        }
        100% {
            background-color: #C2C1C1;
            transform: scale(1);
        }
    }
`;