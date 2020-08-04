import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(132deg, rgba(16,60,85,1) 0%, rgba(0,16,19,1) 100%);
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor:pointer;
        outline:none;
    }

    a {
        text-decoration: none;
    }
`;
