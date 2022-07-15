import styled from "styled-components";

export const Container = styled.main`
    float: right;

    width: 47vw;
    min-height: 95vh;

    padding: 1.25rem;
    gap: 1.25rem;
    margin: 2.5vh 0;

    @media print, screen and (max-width: 1080px) {
        float: none;
        width: auto;
        
        min-height: auto;
        margin: 0.5rem 0;
    }
`