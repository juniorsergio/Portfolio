import { useTranslation } from "react-i18next"
import { Container } from "../styles/AboutMe"

export function AboutMe(){
    const { t } = useTranslation()

    return (
        <Container>
            <article>
                <p> {t('main.about.text')} </p>

                <figure className="tabCoverImg">
                    <img
                        src="https://static.neris-assets.com/images/personality-types/scenes/analysts_Architect_INTJ_strengths.svg"
                    />
                </figure>
            </article>
        </Container>
    )
}