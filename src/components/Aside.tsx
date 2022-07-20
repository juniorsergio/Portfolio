import { Envelope, FilePdf, GithubLogo, LinkedinLogo, MapPin, Moon, SunDim } from 'phosphor-react'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

import photo from '../assets/images/photo.jpg'
import enCV from '../assets/files/SergioJunior_CV_English.pdf'
import ptBRCV from '../assets/files/SergioJunior_CV.pdf'

import { List } from '../styles/lists';
import { Container } from '../styles/Aside';
import { Switch } from '../styles/switch';

interface AsideProps {
    isDarkMode: boolean,
    changeColorScheme: () => void
}

export function Aside({ isDarkMode, changeColorScheme }: AsideProps){
    const { t, i18n } = useTranslation()
    const [ isEnglish, setIsEnglish ] = useState(i18n.language === 'en')
  
    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsEnglish(lng === 'en')
    };

    return (
        <Container>
            <div className='pageSelectors'>
                <List>
                    <li className={!isEnglish ? 'active' : ''} onClick={() => handleChangeLanguage('ptBR')}>Português</li>
                    <li className={isEnglish ? 'active' : ''}  onClick={() => handleChangeLanguage('en')}>English</li>
                </List>

                <Switch>
                    <SunDim size={'2rem'} />
                        <input type="checkbox" checked={isDarkMode} onChange={changeColorScheme} />
                        <span className="slider"></span>
                    <Moon size={'2rem'} />
                </Switch>
            </div>

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
