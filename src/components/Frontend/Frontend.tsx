import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import { Markup } from 'interweave';

import socialMediaFeed from '../../assets/images/social-media-feed.png'
import personalFinance from '../../assets/images/personal-finance.png'

import { Container } from "./styles";

interface FrontendProject {
    id: string,
    projectLink: string,
    stacks: string[],
    title: string,
    description: string,
    type: 'active' | 'disabled'
}

export function Frontend(){
    const { t } = useTranslation()

    const projects: FrontendProject[] = t('main.frontend.projects', {returnObjects: true})
    const projectImages = [ socialMediaFeed, personalFinance ]
    
    function handleClickItem(index: number){
        if (projects[index].type === 'active'){       
            const link = 'https://juniorsergio.github.io/' + projects[index].id
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

                {projects.map((project, index) => {
                   const markupContent = project.type === 'active'
                                            ? project.description
                                            : t('main.frontend.soon')
                   
                   return (
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
                                content={markupContent}
                            />         
                        </figcaption>
                    </figure>
                )})}
            </Carousel>
        </Container>
    )
}