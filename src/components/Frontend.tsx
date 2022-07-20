import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

import socialMediaFeed from '../assets/images/social-media-feed.png'
import personalFinance from '../assets/images/personal-finance.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "../styles/Frontend";
import { Markup } from 'interweave';

interface FrontendProject {
    id: string,
    projectLink: string,
    stacks: string[],
    title: string,
    description: string,
    type: string
}

export function Frontend(){
    const { t } = useTranslation()

    const projects: FrontendProject[] = t('main.frontend.projects', {returnObjects: true})
    const carouselSlugs = projects.map(project => project.id)
    const projectImages = [ socialMediaFeed, personalFinance ]
    
    function handleClickItem(index: number){
        if (projects[index].type === 'active'){       
            const link = 'https://juniorsergio.github.io/' + carouselSlugs[index]
            window.open(link, "_blank")
        }
    }

    function setElementHeight (index: number){
        const selected = document.getElementById(projects[index].id)
        const height = selected?.offsetHeight

        if (height){
            const carousel = (document.getElementsByClassName('carousel-slider') as HTMLCollectionOf<HTMLElement>)
            carousel[0].style.height = height.toString() + 'px'
        }
    }
    
    return (
        <Container>
            <p>
                <Markup content={t('main.frontend.opening')} />
            </p>

            <Carousel
                swipeable
                emulateTouch
                infiniteLoop
                onClickItem={handleClickItem}
                onChange={setElementHeight}
                showIndicators={false}
                showStatus={false}        
            >

                {projects.map((project, index) => (
                    <figure id={project.id} className={project.type} key={project.id}>
                        <figcaption>
                            <div>
                                {project.stacks.map((stack) => (
                                    <span key={stack}>{stack}</span>
                                ))}
                            </div>
                        </figcaption>

                        <img src={projectImages[index]} />

                        <figcaption>
                            <h2>{project.title}</h2>

                            <Markup
                                tagName='p'
                                content={project.type === 'active'
                                            ? project.description
                                            : t('main.frontend.soon')}
                            />         
                        </figcaption>
                    </figure>
                ))}
            </Carousel>
        </Container>
    )
}