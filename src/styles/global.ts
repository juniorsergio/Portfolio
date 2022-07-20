import styled, { createGlobalStyle } from 'styled-components'

interface Props {
    theme: {
        mainColor: string,
        mainColorDark: string,
        purple: string,
        blue: string,
        backgroundShadow: string,
        textColor: string,
        textShadow: string
    }
}

export const GlobalStyle = createGlobalStyle<Props>`
    :root {
        --main-color: ${props => props.theme.mainColor};
        --main-color-dark: ${props => props.theme.mainColorDark};
        --purple: ${props => props.theme.purple};
        --blue: ${props => props.theme.blue};
    }

    * {  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: linear-gradient(330deg, var(--main-color), ${props => props.theme.backgroundShadow} 50%, var(--main-color));
        background-attachment: fixed;

        font: 0.9rem/1.5 "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;

        color: ${props => props.theme.textColor};
        text-shadow: 0.5px 0px ${props => props.theme.textShadow};

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

    aside, main {
        background-color: var(--main-color-dark);
        border: 3px solid var(--purple);
        border-radius: 50px;
        
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
    }

    @media (max-width: 1250px) {
        width: 90vw;

        aside {
            width: 30vw;
        }

        main {
            width: 65%;
        }
    }

    @media (max-width: 840px), (max-height: 580px) {
        width: auto;

        aside, main {
            position: relative;
            min-height: auto;
            height: auto;
            width: auto;
            float: none;
            margin: 0.625rem;
        }
    }
`