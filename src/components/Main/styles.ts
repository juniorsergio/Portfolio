import styled from "styled-components";

export const Container = styled.main`
    float: right;

    width: 60%;
    min-height: 90vh;

    padding: 20px;
    gap: 20px;
    margin: 8px 0;
    
    article {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    p {
        text-align: justify;
    }
`