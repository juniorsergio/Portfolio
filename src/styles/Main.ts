import styled from "styled-components";

export const Container = styled.main`
    animation: fadein-scale 2s;

    & > div {     
        animation: fadein 1s;
    }

    float: right;

    width: 70%;
    min-height: 95vh;

    gap: 1.25rem;
    margin: 2.5vh 0;
    
    article {
        display: grid;
        gap: 0.625rem;
    }

    p {
        text-align: justify;
    }
`