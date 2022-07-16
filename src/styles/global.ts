import styled, { createGlobalStyle } from 'styled-components'

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

        font: 0.9rem/1.5 "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;

        color: white;
        text-shadow: 1px 1px black;

        @media (max-width: 840px) {
            font-size: 0.80rem;
        }
    }

    h1 {
        text-align: center;
    }
    
    a {
        color: var(--blue);
        text-decoration: none;

        &:hover {
            filter: brightness(0.9)
        }
    }
`

export const Wrapper = styled.div`
    width: 70vw;
    margin: 0 auto;

    header, main {
        background-color: var(--green-dark);
        border: 3px solid var(--purple);
        border-radius: 50px;
        
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
    }

    @media (max-width: 1250px) {
        width: 90vw;

        header {
            width: 30vw;
        }

        main {
            width: 65%;
        }
    }

    @media (max-width: 840px), (max-height: 580px) {
        width: auto;

        header, main {
            position: relative;
            min-height: auto;
            height: auto;
            width: auto;
            float: none;
            margin: 0.625rem;
        }
    }
`