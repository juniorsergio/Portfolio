import { Carousel } from 'react-responsive-carousel';

import socialMediaFeed from '../assets/images/social-media-feed.png'
import personalFinance from '../assets/images/personal-finance.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "../styles/Frontend";

export function Frontend(){
    const carouselSlugs = ['social-media-feed']
    
    function handleClickItem(index: number){
        if (!carouselSlugs[index]) return
        
        const link = 'https://juniorsergio.github.io/' + carouselSlugs[index]
        window.open(link, "_blank")
    }
    
    return (
        <Container>
            <Carousel
                swipeable
                emulateTouch
                infiniteLoop
                onClickItem={handleClickItem}
                showIndicators={false}
                statusFormatter={(currentItem, total) => {
                    return `${currentItem} de ${total}`
                }}              
            >
                <figure className='active'>
                    <img src={socialMediaFeed} />
                    <figcaption>
                        Social Media Feed
                    </figcaption>
                </figure>

                <figure>
                    <img src={personalFinance} />
                    <figcaption>
                        Personal Finance
                    </figcaption>
                </figure>
            </Carousel>
        </Container>
    )
}