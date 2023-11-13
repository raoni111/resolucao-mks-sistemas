import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #F9F9F9;
        --secondary-color: #0F52BA;
        --threaded-color: #FFF;
        --footer-bg-color: #EEE;
        --black-bg-p-color: #373737;
        --black-bg-s-color: #000;
        --box-shadow-color: rgba(0, 0, 0, 0.14);
        --bg-price-color: #373737;
    }

    html {
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-family: 'Montserrat';
    }

    body {
        background-color: var(--primary-color);
    }
`;

export default GlobalStyle;
