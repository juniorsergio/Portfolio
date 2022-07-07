import { useTranslation } from "react-i18next"

import '../styles/App.css'

export function AboutMe(){
    const { t, i18n } = useTranslation()

    return (
        <article className="aboutMe">
            <p> {t('main.about.text')} </p>
        </article>
    )
}