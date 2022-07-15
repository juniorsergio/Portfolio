import styled from "styled-components";

export const Container = styled.header`
    float: left;
    position: fixed;   

    width: 20%;
    height: 90vh;
    
    justify-content: center;
    align-items: center;
    
    gap: 10px;
    padding: 8px;
    
    top: 50%;
    transform: translate(0, -50%);

    @media print, screen and (max-width: 1080px) {
        float: none;
        position: static;
        transform: none;

        width: auto;
        margin: 8px 0;
    }

    img {
        height: 200px;
        width: 200px;
        
        border: 3px solid var(--purple);
        border-radius: 100%;
    }

    .localization, .email {
        display: flex;
        align-items: center;
    }
`