import styled from "styled-components";

export const Container = styled.header`
    float: left;
    position: fixed;   
 
    width: 20vw;
    height: 90vh;
    margin: 5vh 0;
    
    justify-content: center;
    align-items: center;
    
    gap: 0.625rem;
    padding: 0.625rem;
    
    img {
        height: 12.5rem;
        width: 12.5rem;
        
        border: 3px solid var(--purple);
        border-radius: 100%;
    }

    .localization, .email {
        display: flex;
        align-items: center;
    }
`