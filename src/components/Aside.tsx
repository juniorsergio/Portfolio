import { Envelope, FilePdf, GithubLogo, LinkedinLogo, MapPin } from 'phosphor-react'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

import photo from '../assets/images/photo.jpg'
import enCV from '../assets/files/SergioJunior_CV_English.pdf'
import ptBRCV from '../assets/files/SergioJunior_CV.pdf'

import { List } from '../styles/lists';
import { Container } from '../styles/Header';

export function Aside(){
    const { t, i18n } = useTranslation()
    const [ isEnglish, setIsEnglish ] = useState(i18n.language === 'en')
  
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsEnglish(lng === 'en')
    };

    return (
        <Container>
            <List>
                <li className={!isEnglish ? 'active' : ''} onClick={() => changeLanguage('ptBR')}>Português</li>
                <li className={isEnglish ? 'active' : ''}  onClick={() => changeLanguage('en')}>English</li>
            </List>

            <img src={photo} alt="Profile picture" />
            <h1> Sergio Junior </h1>
            <h1> {t('header.title')} </h1>

            <div className='social'>
                <a href={isEnglish ? enCV : ptBRCV} title='Curriculum'> <FilePdf size={'2.5rem'} /> </a>
                <a href={t('header.linkedin')} title='LinkedIn'> <LinkedinLogo size={'2.5rem'} /></a>
                <a href="https://github.com/juniorsergio/" title='GitHub'> <GithubLogo size={'2.5rem'} /> </a>
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
        </Container>
    )
}
