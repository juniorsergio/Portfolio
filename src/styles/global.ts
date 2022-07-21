import styled, { createGlobalStyle } from 'styled-components'

interface Props {
    theme: {
        mainColor: string,
        mainColorLight: string,
        purple: string,
        blue: string,
        shadow: string,
        textColor: string
    }
}

export const GlobalStyle = createGlobalStyle<Props>`
    :root {
        --main-color: ${props => props.theme.mainColor};
        --main-color-light: ${props => props.theme.mainColorLight};
        --purple: ${props => props.theme.purple};
        --blue: ${props => props.theme.blue};
        --shadow: ${props => props.theme.shadow};
        --text-color: ${props => props.theme.textColor};
    }

    * {  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: linear-gradient(330deg, var(--main-color-light), var(--shadow), var(--main-color-light));
        background-attachment: fixed;

        font: 0.9rem/1.5 "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;

        color: var(--text-color);
        text-shadow: 0.5px 0px var(--shadow);

        @media (max-width: 840px) {
            font-size: 0.80rem;
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadein-scale {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    h1 {
        text-align: center;
    }
    
    a {
        color: var(--blue);
        text-decoration: none;

        &:hover {
            filter: brightness(0.8)
        }
    }
`

export const Wrapper = styled.div`
    width: 70vw;
    margin: 0 auto;

    header, main {
        background-color: var(--main-color);
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