import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

const Section = styled.section`
    ${DisplayFlex("row", "center", "start")}
    width: 100%;
`;

export const ProductContent = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(218px, 230px));
    justify-content: center;
    align-items: center;
    width: 75%;
    margin-top: 15vh;
    gap: 22px;
`;

export default Section;
