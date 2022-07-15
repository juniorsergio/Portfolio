import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    article + article {
        border-top: 2px solid var(--purple);
        padding-top: 1rem;
    }

    figure {
        background: var(--green);
        margin: 0 auto;
        
        padding: 1rem 1.5rem;
        border-radius: 50px;

        img {
            max-width: 95%;
        }

        figcaption {
            text-align: center;
        }
    }
`