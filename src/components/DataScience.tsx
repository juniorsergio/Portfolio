import { Markup } from 'interweave'
import { Link } from 'phosphor-react'
import { useTranslation } from "react-i18next"

import tesouro_direto from '../assets/images/tesouro_direto.png'
import credit_risk from '../assets/images/credit_risk.png'
import breaking_bad from '../assets/images/breaking_bad.png'

import { Container } from '../styles/DataScience'

interface Project {
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

    const projectImages = [ tesouro_direto, credit_risk, breaking_bad ]
    const projects: Project[] = t('main.dataScience', {returnObjects: true})

    return (
        <Container>
            {projects.map((project, i) => (
                <article key={project.id}>
                    <h2>
                        <a href={project.projectLink}>
                            <Link /> {project.title}
                        </a>
                    </h2>
                    
                    <h3 hidden={!project.subtitle}>
                        <a href={project.subtitleLink}>
                            <Link /> {project.subtitle}
                        </a>
                    </h3>

                    <p>
                        <Markup content={project.text} />                        
                    </p>

                    <figure>
                        <img src={projectImages[i]} alt={project.id} />
                        <figcaption> {project.figcaption} </figcaption>
                    </figure>
                </article>
            ))}
        </Container>
    )
}