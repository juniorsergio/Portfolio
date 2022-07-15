import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    figure {
        background: var(--green);

        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 0.625rem;
        gap: 0.625rem;
        border-radius: 3rem;

        img {
            max-width: 95%;
        }
    }
`