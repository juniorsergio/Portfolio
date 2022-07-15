import { useTranslation } from "react-i18next"

export function AboutMe(){
    const { t } = useTranslation()

    return (
        <article className="aboutMe">
            <p> {t('main.about.text')} </p>
        </article>
    )
}