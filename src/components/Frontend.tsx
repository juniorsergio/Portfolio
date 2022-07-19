import { Carousel } from 'react-responsive-carousel';

import socialMediaFeed from '../assets/images/social-media-feed.png'
import personalFinance from '../assets/images/personal-finance.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "../styles/Frontend";
import { useTranslation } from 'react-i18next';

export function Frontend(){
    const { t, i18n } = useTranslation()
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
                    return `${currentItem} ${t('main.frontend.of')} ${total}`
                }}              
            >
                <figure className='active'>
                    <img src={socialMediaFeed} />
                    <figcaption>
                        Social Media Feed
                    </figcaption>
                </figure>

                <div>
                    <figure className='soon'>
                        <img src={personalFinance} />
                        <figcaption>
                            {t('main.frontend.soon')}
                        </figcaption>
                    </figure>
                </div>
            </Carousel>
        </Container>
    )
}