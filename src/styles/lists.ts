import styled from "styled-components";

export const List = styled.ul`
    width: auto;
    margin: 0 auto;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid var(--purple);
    border-radius: 15px;
  
    li {
        flex: auto;
        padding: 8px;

        list-style: none;
        text-align: center;
        font-weight: bold;

        cursor: pointer;
        transition: all 0.7s;
    

        &:first-child {
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;
        }

        &:last-child {
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
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