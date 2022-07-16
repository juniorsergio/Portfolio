import styled from "styled-components";

export const Container = styled.main`
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

    .tabCoverImg {
        display: flex;
        justify-content: center;

        img {
            width: 90%;
            max-width: 500px;
        }
    }
`