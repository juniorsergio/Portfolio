import styled from "styled-components";

export const Container = styled.main`
    float: right;

    width: 60%;
    min-height: 90vh;

    padding: 20px;
    gap: 20px;
    margin: 8px 0;

    @media print, screen and (max-width: 1080px) {
        float: none;
        width: auto;
        min-height: auto;
        margin: 8px 0;
    }
`