import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    min-width: 80%;
  
    li {
        border: 1.5px solid var(--purple);
        
        flex: auto;
        padding: 0.5rem;

        list-style: none;
        text-align: center;
        font-weight: bold;

        cursor: pointer;
        transition: all 0.2s;
    
        &:first-child {
            padding-left: 1rem;
            border-bottom-left-radius: 50px;
            border-top-left-radius: 50px;
        }

        &:last-child {
            padding-right: 1rem;
            border-bottom-right-radius: 50px;
            border-top-right-radius: 50px;
        }

        &:hover {
            background: var(--main-color);
        }

        &.active {
            background: var(--purple);
            cursor: auto;
        }
    }
`