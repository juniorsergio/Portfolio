import { Envelope, FilePdf, GithubLogo, LinkedinLogo, MapPin } from 'phosphor-react'
import { useTranslation } from "react-i18next";

import '../styles/Header.css'

export function Sideinfo(){
    const { t, i18n } = useTranslation()
    const isEnglish = (i18n.language == 'en')
  
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    };

    return (
        <header>
            <h1>
                Sergio Junior
            </h1>

            <h1>
                Data Science Portfolio
            </h1>

            <img src="src/assets/images/photo.jpg" alt="Photo" className='profilePicture' />

            <div>
                <button onClick={() => changeLanguage('ptBR')} className='languageSelector' disabled={!isEnglish}>Português</button>
                <button onClick={() => changeLanguage('en')} className='languageSelector' disabled={isEnglish}>English</button>
            </div>

            <div className='social'>
                <a href={t('header.curriculum')}> <FilePdf size={40} /> </a>
                <a href={t('header.linkedin')}> <LinkedinLogo size={40} /></a>
                <a href="https://github.com/juniorsergio/"> <GithubLogo size={40} /> </a>
            </div>

            <div className='localization'>
                <MapPin size={20} />
                {t('header.localization')}
            </div>

            <div className='email'>                   
                <Envelope size={20} />
                <a href='mailto:sergio.junior55@hotmail.com'>
                    sergio.junior55@hotmail.com
                </a>
            </div>
        </header>
    )
}
