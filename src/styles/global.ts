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
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: linear-gradient(330deg, var(--green), black 50%, var(--green));
        background-attachment: fixed;

        font: 0.9rem/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        color: white;
        text-shadow: 1px 1px black;
    }

    .wrapper {
        width: 70vw;
        margin: 0 auto;

        header, main {
            background-color: var(--green-dark);
            border: 0.2rem solid var(--purple);
            border-radius: 3rem;
            
            display: flex;
            flex-direction: column;
        }
    }

    @media print, screen and (max-width: 1080px) {
        .wrapper {
            width: 95vw;

            header, main {
                position: relative;
                min-height: auto;
                width: auto;
                float: none;
                margin: 0.625rem;
            }
        }
    }
    
    a {
        color: var(--blue);
        text-decoration: none;

        &:hover {
            filter: brightness(0.9)
        }
    }
`