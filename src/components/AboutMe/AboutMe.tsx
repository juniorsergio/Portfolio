import { useTranslation } from "@app/hooks/useTranslation"
import { Container } from "./styles"

export function AboutMe(){
    const { translation: { main } } = useTranslation()

    return (
        <Container>
            <article>
                {main.about.text.map(text => <p>{text}</p>)}
                <img
                    alt="MBTI cover image"
                    src="https://static.neris-assets.com/images/personality-types/scenes/analysts_Architect_INTJ_friendships.svg"
                />
            </article>
        </Container>
    )
}