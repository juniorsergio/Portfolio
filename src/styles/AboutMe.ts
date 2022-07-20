import styled from "styled-components";

export const Container = styled.div`
    flex: auto;
    display: flex;

    article {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 1.25rem;

        .tabCoverImg {
            margin: 0 auto;
            width: 90%;
            max-width: 500px;
        }
    }
`