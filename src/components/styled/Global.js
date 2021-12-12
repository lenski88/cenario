import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    * {
        box-sizing: border-box
    }

    body {
        background-color: ${({theme}) => theme.colors.body};
        font-family: 'Roboto', sans-serif;
        font-size: 1.15em;
        margin: 0
    }

    ul li {
        list-style-type:  none;
    }

    a {
        text-decoration: none;
    }

    p {
        opacity:.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`
export default GlobalStyle;
