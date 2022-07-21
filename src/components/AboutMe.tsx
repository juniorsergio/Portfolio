import { useTranslation } from "react-i18next"
import { Container } from "../styles/components/AboutMe"

export function AboutMe(){
    const { t } = useTranslation()

    return (
        <Container>
            <article>
                <p>{t('main.about.text')}</p>

                <img
                    className="tabCoverImg"
                    src="https://static.neris-assets.com/images/personality-types/scenes/analysts_Architect_INTJ_strengths.svg"
                />
            </article>
        </Container>
    )
}