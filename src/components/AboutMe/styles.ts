import styled from "styled-components";

export const Container = styled.div`
    flex: auto;
    display: flex;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.25rem;

        img {
            margin: 0 auto;
            width: 90%;
            max-width: 500px;
        }
    }
`