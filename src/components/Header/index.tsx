import { Envelope, FilePdf, GithubLogo, LinkedinLogo, MapPin } from 'phosphor-react'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

import photo from '../../assets/images/photo.jpg'
import enCV from '../../assets/files/SergioJunior_CV_English.pdf'
import ptBRCV from '../../assets/files/SergioJunior_CV.pdf'

import '../../styles/Header.css'
import { List } from '../../styles/lists';

export function Header(){
    const { t, i18n } = useTranslation()
    const [ isEnglish, setIsEnglish ] = useState(i18n.language === 'en')
  
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsEnglish(lng === 'en')
    };

    return (
        <header>
            <h1> Sergio Junior </h1>

            <h1> {t('header.title')} </h1>

            <img src={photo} alt="Profile picture" className='profilePicture' />

            <List>
                <li className={!isEnglish ? 'active' : ''} onClick={() => changeLanguage('ptBR')}>Português</li>
                <li className={isEnglish ? 'active' : ''}  onClick={() => changeLanguage('en')}>English</li>
            </List>

            <div className='social'>
                <a href={isEnglish ? enCV : ptBRCV} title='Curriculum'> <FilePdf size={40} /> </a>
                <a href={t('header.linkedin')} title='LinkedIn'> <LinkedinLogo size={40} /></a>
                <a href="https://github.com/juniorsergio/" title='GitHub'> <GithubLogo size={40} /> </a>
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
