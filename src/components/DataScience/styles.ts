import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    figure {
        background: var(--green);
        margin: 0 auto;
        
        padding: 1rem 1.5rem;
        border-radius: 3rem;

        img {
            max-width: 95%;
        }

        figcaption {
            text-align: center;
        }
    }
`