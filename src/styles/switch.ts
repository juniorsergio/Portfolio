import styled from "styled-components";

export const Switch = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    input {
        display:none;

        &:checked + .slider {
            background-color: var(--purple);
        }

        &:focus + .slider {
            box-shadow: 0 0 1px var(--purple);
        }

        &:checked + .slider:before {
            transform: translateX(1.5rem);
        }
    }

    .slider {
        width: 3rem;
        height: 1.5rem;

        position: relative;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--purple);
        transition: 0.2s;

        border-radius: 50px;

        &:before {
            position: absolute;
            content: "";
            height: 1rem;
            width: 1rem;
            left: 0.25rem;
            bottom: 0.25rem;
            background-color: white;
            transition: 0.2s;
            border-radius: 50%;
        }
    }
`