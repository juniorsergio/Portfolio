import { Markup } from 'interweave'
import { Link as LinkIcon } from 'phosphor-react'
import { useTranslation } from "react-i18next"

import { dataScienceImages } from '../../assets/images'

import { Container } from './styles'

interface DataScienceProjects {
    id: string,
    title: string,
    projectLink: string,
    subtitle: string,
    subtitleLink: string,
    text: string,
    figcaption: string
}

export function DataScience(){
    const { t } = useTranslation()

    const projectImages = dataScienceImages
    const projects: DataScienceProjects[] = t('main.dataScience', {returnObjects: true})

    return (
        <Container>
            {projects.map((project) => (
                <article key={project.id}>
                    <h2>
                        <a href={project.projectLink}>
                            <LinkIcon /> {project.title}
                        </a>
                    </h2>
                    
                    <h3 hidden={!project.subtitle}>
                        <a href={project.subtitleLink}>
                            <LinkIcon /> {project.subtitle}
                        </a>
                    </h3>

                    <Markup tagName='p' content={project.text} />

                    <figure>
                        <img src={projectImages[project.id as keyof typeof projectImages]} alt={project.id} />
                        <figcaption> {project.figcaption} </figcaption>
                    </figure>
                </article>
            ))}
        </Container>
    )
}