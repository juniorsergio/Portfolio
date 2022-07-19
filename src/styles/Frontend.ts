import styled from "styled-components";

export const Container = styled.div`
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel-root {
        width: 90%;

        a {
            color: white;
        }

        button.control-arrow, .slider-wrapper {
            border-radius: 14px;
        }

        ul.slider {
            li {
                figure {
                    background: var(--green);
                    transition: filter 0.2s;

                    &.soon {       
                        img {
                            filter: brightness(0.7);
                        }
                    }

                    &.active:hover {
                        cursor: pointer; 

                        img {
                            filter: brightness(0.9);
                        }
                    }

                    figcaption {
                        padding: 1rem;
                    }
                }
            }
        }
        
        ul.thumbs {
            display: flex;
            justify-content: center;

            li {
                border-color: transparent;
                cursor: pointer;

                &:hover {
                    border-color: var(--green);
                }

                &.selected {
                    border-color: var(--purple);
                    cursor: auto;
                }
            }
        }
    }
`