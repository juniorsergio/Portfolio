import { Markup } from "interweave"
import { useTranslation } from "../../hooks/useTranslation"

import { Container } from "./styles"

export function AboutMe(){
    const { translation: { main } } = useTranslation()

    return (
        <Container>
            <article>
                <Markup noWrap content={main.about.text} />

                <img
                    alt="MBTI cover image"
                    src="https://static.neris-assets.com/images/personality-types/scenes/analysts_Architect_INTJ_friendships.svg"
                />
            </article>
        </Container>
    )
}