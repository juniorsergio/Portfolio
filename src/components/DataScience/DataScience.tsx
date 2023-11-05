import { Markup } from 'interweave'

import { BiLink } from 'react-icons/bi'
import { Container } from './styles'
import { useState, useEffect } from 'react'
import { useTranslation } from 'hooks/useTranslation'
import { DataScienceProject } from 'interfaces/Projects'

export function DataScience(){
    const { translation: { main: { dataScience } } } = useTranslation()
    const [projects, setProjects] = useState<DataScienceProject[]>(dataScience)
    
    useEffect(() => {
        const promises = projects.map(async (project) => {
            let image = await import(`../../assets/images/${project.id}.png`)
            project.image = image.default
            return project
        })
        Promise.all(promises).then(p => setProjects(p))
    }, [])

    return (
        <Container>
            {projects.map((project) => (
                <article key={project.id}>
                    <h2>
                        <a href={project.projectLink}>
                            <BiLink /> {project.title}
                        </a>
                    </h2>
                    <h3 hidden={!project.subtitle}>
                        <a href={project.subtitleLink}>
                            <BiLink /> {project.subtitle}
                        </a>
                    </h3>
                    <Markup tagName='p' content={project.text} />
                    <figure>
                        <img src={project.image} alt={project.id} />
                        <figcaption> {project.figcaption} </figcaption>
                    </figure>
                </article>
            ))}
        </Container>
    )
}