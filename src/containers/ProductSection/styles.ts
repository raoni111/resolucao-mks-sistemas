import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";

const Section = styled.section`
    ${DisplayFlex('row', 'center', 'start')}
    height: 90vh;
    background-color: var(--primary-color);
`;

export const ProductContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(218px, 230px));
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    width: 75%;
    gap: 22px;

`

export default Section;