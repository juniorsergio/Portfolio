import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    min-width: 80%;
  
    li {
        border: 0.1rem solid var(--purple);
        
        flex: auto;
        padding: 0.5rem;

        list-style: none;
        text-align: center;
        font-weight: bold;

        cursor: pointer;
        transition: all 0.2s;
    
        &:first-child {
            border-bottom-left-radius: 3rem;
            border-top-left-radius: 3rem;
        }

        &:last-child {
            border-bottom-right-radius: 3rem;
            border-top-right-radius: 3rem;
        }

        &:hover {
            background: var(--green);
        }

        &.active {
            background: var(--purple);
            cursor: auto;
        }
    }
`