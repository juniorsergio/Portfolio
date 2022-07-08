import { Markup } from 'interweave'
import { Link } from 'phosphor-react'
import { useTranslation } from "react-i18next"

import tesouro_direto from '../assets/images/tesouro_direto.png'
import credit_risk from '../assets/images/credit_risk.png'
import breaking_bad from '../assets/images/breaking_bad.png'

import '../styles/DataScience.css'

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
    const { t, i18n } = useTranslation()

    const projectImages = [ tesouro_direto, credit_risk, breaking_bad ]
    const projects: Project[] = t('main.projects', {returnObjects: true})

    return (
        <div className='dataScience'>
            {projects.map((project: Project, i: number) => (
                <article id={project.id}>
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

                    <figure className="projectImage">
                        <img src={projectImages[i]} alt={project.id} />
                        <figcaption> {project.figcaption} </figcaption>
                    </figure>
                </article>
            ))}
        </div>
    )
}