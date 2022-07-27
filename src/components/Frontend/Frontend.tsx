import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import { Markup } from 'interweave';

import { frontendImages } from '../../assets/images'

import { Container } from "./styles";

interface FrontendProject {
    id: string,
    stacks: string[],
    title: string,
    description: string,
    type: 'active' | 'disabled'
}

export function Frontend(){
    const { t } = useTranslation()
    const projects: FrontendProject[] = t('main.frontend.projects', {returnObjects: true})
    
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
            <Markup tagName='p' content={t('main.frontend.opening')} />

            <Carousel
                swipeable
                emulateTouch
                infiniteLoop
                onClickItem={handleClickItem}
                onChange={setElementHeight}
                showIndicators={false}
                showStatus={false}        
            >

                {projects.map((project) => {
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

                            <img src={frontendImages[project.id as keyof typeof frontendImages]} />

                            <figcaption>
                                <h2>{project.title}</h2>
                                <Markup tagName='p' content={markupContent} />
                            </figcaption>
                        </figure>
                    )
                })}
            </Carousel>
        </Container>
    )
}