import { styled } from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

const Main = styled.main`
    ${DisplayFlex("column", "space-between", "center")}
    overflow-y: auto;
    width: 100%;
    height: 100vh;
    padding: 0px;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        width: 7px;
        background-color: var(--black-bg-p-color);
        border-radius: 20px;
    }
`;

export { Main };
