import styled from "styled-components";

export const Switch = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    input {
        display: none;

        &:checked + .slider {
            background-color: var(--purple);

            &:before {
                transform: translateX(1.5rem);
            }
        }
    }

    .yang, .yin {
        transition: transform 0.2s;
    }

    &:hover {
        .yang.active {
            transform: rotate(-180deg);
        }

        .yin.active {
            transform: rotate(0deg);
        }
    }

    .slider {
        width: 3rem;
        height: 1.5rem;

        position: relative;
        cursor: pointer;
        
        background-color: var(--purple);
        border-radius: 50px;

        &:before {
            position: absolute;
            content: "";

            height: 1rem;
            width: 1rem;
            left: 0.25rem;
            bottom: 0.25rem;
            
            background-color: white;
            transition: all 0.2s;
            border-radius: 50%;
        }
    }
`