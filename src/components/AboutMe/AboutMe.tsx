import { Markup } from "interweave"
import { useTranslation } from "react-i18next"

import { Container } from "./styles"

export function AboutMe(){
    const { t } = useTranslation()

    return (
        <Container>
            <article>
                <Markup noWrap content={t('main.about.text')} />

                <img
                    alt="MBTI cover image"
                    src="https://static.neris-assets.com/images/personality-types/scenes/analysts_Architect_INTJ_friendships.svg"
                />
            </article>
        </Container>
    )
}