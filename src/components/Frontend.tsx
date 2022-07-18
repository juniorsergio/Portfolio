import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "../styles/Frontend";

export function Frontend(){
    return (
        <Container>
            <Carousel
                swipeable
                emulateTouch
                infiniteLoop
                showIndicators={false}
                statusFormatter={(currentItem, total) => {
                    return `${currentItem} de ${total}`
                }}              
            >
                <a href="https://juniorsergio.github.io/social-media-feed">
                    <figure>
                        <img
                            src="src/assets/images/social-media-feed.png"
                        />
                        <figcaption>
                            Social Media Feed
                        </figcaption>
                    </figure>
                </a>

                <figure>
                    <img
                        src="src/assets/images/personal-finance.png"
                    />
                    <figcaption>
                        Personal Finance
                    </figcaption>
                </figure>
            </Carousel>
        </Container>
    )
}