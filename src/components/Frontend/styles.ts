import styled from "styled-components";

export const Container = styled.div`
    flex: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1.25rem;

    .carousel-root {
        width: 90%;
        transition: none;

        @media (max-width: 840px), (max-height: 580px) {
            width: 100%;
        }

        .carousel-slider {
            border-radius: 15px;
        }
        
        ul.slider {
            li {
                figure {
                    background: var(--main-color-light);

                    img {                 
                        transition: all 0.2s;
                    }

                    &.disabled {  
                        cursor: not-allowed;
                        
                        img {
                            filter: brightness(0.5);
                        }
                    }

                    &.active:hover{
                        cursor: pointer;
                        
                        img {
                            filter: brightness(1.2);
                            transform: scale(1.05);
                        }
                    }

                    figcaption {
                        padding: 1rem;
                        display: grid;
                        gap: 0.625rem;
                        cursor: auto;

                        span {
                            background: var(--main-color);
                            border-radius: 15px;
                            padding: 0.4rem;
                            
                            & + span {
                                margin-left: 0.625rem;
                            }
                        }
                    }
                }
            }
        }

        .thumbs-wrapper {
            margin-bottom: 0;
        }
        
        ul.thumbs {
            display: flex;
            justify-content: center;

            li {
                border-color: transparent;
                border-radius: 15px;
                cursor: pointer;

                &:hover {
                    border-color: var(--main-color-light);
                }

                &.selected {
                    border-color: var(--purple);
                    cursor: auto;
                }
            }
        }
    }
`