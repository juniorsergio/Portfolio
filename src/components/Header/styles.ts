import styled from "styled-components";

export const Container = styled.header`
    animation: fadein-scale 1.5s;
    transform-origin: center top;

    float: left;
    position: fixed;
 
    width: 20vw;
    height: 90vh;
    margin: 5vh 0;
    
    justify-content: center;
    align-items: center;
    
    gap: 0.625rem;

    .pageSelectors {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        .yin, .yang {      
            width: 2rem;
            height: 2rem;

            border-radius: 50%;
            border-top: 2px solid var(--text-color);

            display: flex;
            align-items: center;

            &:before, &:after {
                border-radius: 50%;
                content: '';
            }

            &:before {
                height: 5px;
                width: 5px;
            }

            &:after {
                height: 1rem;
                width: 1rem;
                background: var(--main-color);
            }
        }

        .yin {
            transform: rotate(90deg);
            background: linear-gradient(black 50%, transparent 0);

            &:before {
                background: white;
                border: 5px solid black;
            }
        }

        .yang {
            transform: rotate(-90deg);
            background: linear-gradient(white 50%, transparent 0);

            &:before {
                background: black;
                border: 5px solid white;
            }
        }
    }
    
    img {
        margin: 1rem 0;
        height: 10rem;
        width: 10rem;
        
        border: 3px solid var(--purple);
        border-radius: 100%;
    }

    .localization, .email {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`