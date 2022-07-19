import { Carousel } from 'react-responsive-carousel';

import socialMediaFeed from '../assets/images/social-media-feed.png'
import personalFinance from '../assets/images/personal-finance.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "../styles/Frontend";
import { useTranslation } from 'react-i18next';

interface FrontendProject {
    id: string,
    projectLink: string,
    stacks: string[],
    description: string,
    type: string
}

export function Frontend(){
    const { t } = useTranslation()

    const projects: FrontendProject[] = t('main.frontend.projects', {returnObjects: true})
    const projectImages = [ socialMediaFeed, personalFinance ]
    const carouselSlugs = projects.map(project => project.id)
    
    function handleClickItem(index: number){
        if (projects[index].type === 'active'){       
            const link = 'https://juniorsergio.github.io/' + carouselSlugs[index]
            window.open(link, "_blank")
        }
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

                {projects.map((project, index) => (
                    <figure className={project.type} key={project.id}>
                        <img src={projectImages[index]} />
                        <figcaption>
                            {project.description}
                        </figcaption>
                    </figure>
                ))}
            </Carousel>
        </Container>
    )
}