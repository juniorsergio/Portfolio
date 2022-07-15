import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --green: #2F4F4F;
        --green-dark: #2A4141;
        --purple: #483D8B;
        --blue: #26BCFF;
    }

    * {  
        margin: 0;
    }

    body {
        background-image: linear-gradient(330deg, var(--green), black 50%, var(--green));
        background-attachment: fixed;
        background-size: 120%;

        font: 15px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        color: white;
        text-shadow: 1px 1px black;

        display: flex;
        justify-content: center;
    }

    .app {
        width: 70vw;
    }

    header, main {
        background-color: var(--green-dark);
        border: 3px solid var(--purple);
        border-radius: 50px;
        
        display: flex;
        flex-direction: column;
    }

    @media print, screen and (max-width: 1080px) {
        .app {
            width: 90vw;
        }

        header, main {
            float: none;
            position: static;
            transform: none;

            width: auto;
            min-height: auto;
            margin: 8px 0;
        }
    }

    a {
        color: var(--blue);
        text-decoration: none;

        &:hover {
            filter: brightness(0.9)
        }
    }

    img {
        max-width: 90%;
    }

`