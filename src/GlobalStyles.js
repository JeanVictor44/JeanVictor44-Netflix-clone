import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle `
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body {
        background-color:#111;
        font-family: 'Roboto', sans-serif;
    }
    img {
        width:100%;
    }
`