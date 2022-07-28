import styled, { createGlobalStyle } from 'styled-components'

interface ThemeProps {
    theme: {
        mainColor: string,
        mainColorLight: string,
        purple: string,
        blue: string,
        shadow: string,
        textColor: string
    }
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`
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
        color: var(--text-color);
        -webkit-font-smoothing: antialiased;

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

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    animation: fadein 3s;
`
const size = '50vmin'

export const YinYang = styled.div`   
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background: linear-gradient(black 50%, white 0);
    
    display: flex;
    align-items: center;

    animation: rotate 2s linear infinite;

    @keyframes yinyang {
        to { transform: scale(1.5) }
    }

    @keyframes rotate {
        to { transform: rotate(1turn) }
    }
    
    &:before, &:after {
        flex: 1;
        height: calc(${size}/6);
        border-radius: 50%;
        background: black;
        content: '';
        border: solid calc(${size}/6) white;

        transform-origin: 0 50%;
        transform: scale(0.5);
        animation: yinyang 1s ease-in-out infinite alternate;
    }

    &:after {
        background: white;
        border-color: black;

        transform-origin: 100% 50%;
        animation-delay: -1s;
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