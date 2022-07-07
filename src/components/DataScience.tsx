import { Markup } from 'interweave'
import { Link } from 'phosphor-react'
import { useTranslation } from "react-i18next"

import tesouro_direto from '../assets/images/tesouro_direto.png'
import credit_risk from '../assets/images/credit_risk.png'
import breaking_bad from '../assets/images/breaking_bad.png'

import '../styles/DataScience.css'
import '../styles/App.css'

export function DataScience(){
    const { t, i18n } = useTranslation()

    return (
        <div className='dataScience'>
            <article>
                <h2>
                    <a href="https://github.com/juniorsergio/Prediction-Projects/tree/master/Tesouro%20Direto">
                        <Link /> {t('main.projects.time_series.title')}
                    </a>
                </h2>
                
                <h3>
                    <a href="http://dx.doi.org/10.21528/CBIC2021-11">
                        <Link /> {t('main.projects.time_series.subtitle')}
                    </a>
                </h3>

                <p>
                    {t('main.projects.time_series.text')}
                </p>

                <figure className="projectImage">
                    <img src={tesouro_direto} alt="Tesouro Direto prediction" />
                    <figcaption> {t('main.projects.time_series.figcaption')} </figcaption>
                </figure>
            </article>

            <hr />

            <article>
                <h2>
                    <a href="https://github.com/juniorsergio/Classification-Projects/blob/master/Credit%20Risk/credit_risk_prediction.ipynb">
                        <Link /> {t('main.projects.credit_risk.title')}
                    </a>
                </h2>

                <p>
                    {t('main.projects.credit_risk.text')}
                </p>

                <figure className="projectImage">
                    <img src={credit_risk} alt="credit risk" />
                    <figcaption> {t('main.projects.credit_risk.figcaption')} </figcaption>
                </figure>
            </article>

            <hr />
            
            <article>
                <h2>
                    <a href="https://github.com/juniorsergio/DataExploration/blob/master/Breaking%20Bad%20-%20Rating%20analysis/breaking-bad-imdb-rating-analysis-by-writer.ipynb">
                        <Link /> {t('main.projects.breaking_bad.title')}
                    </a>
                </h2>

                <p>
                    <Markup content={t('main.projects.breaking_bad.text')} />
                </p>

                <figure className="projectImage">
                    <img src={breaking_bad} alt="breaking bad" />
                    <figcaption> {t('main.projects.breaking_bad.figcaption')} </figcaption>
                </figure>
            </article>
        </div>
    )
}