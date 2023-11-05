import { FaRegFilePdf, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { BiMap, BiEnvelope } from 'react-icons/bi'

import photo from 'assets/images/photo.jpg'
import enCV from 'assets/files/SergioJunior_CV_English.pdf'
import ptBRCV from 'assets/files/SergioJunior_CV.pdf'

import { List } from 'styles/lists';
import { Container } from './styles';
import { Switch } from './switch';
import { useTranslation } from 'hooks/useTranslation'

interface HeaderProps {
    isDarkMode: boolean,
    changeColorScheme: () => void
}

export function Header({ isDarkMode, changeColorScheme }: HeaderProps){
    const { translation: { header }, language, setLanguage } = useTranslation()
    const isEnglish = (language === 'en')

    return (
        <Container>
            <div className='pageSelectors'>
                <List>
                    <li className={!isEnglish ? 'active' : ''} onClick={() => setLanguage('pt-BR')}>Português</li>
                    <li className={isEnglish ? 'active' : ''}  onClick={() => setLanguage('en')}>English</li>
                </List>

                <Switch>
                    <div className={`yang ${isDarkMode && 'active'}`}></div>
                    <input type="checkbox" checked={isDarkMode} onChange={changeColorScheme} />
                    <span className="slider"></span>
                    <div className={`yin ${!isDarkMode && 'active'}`}></div>
                </Switch>
            </div>

            <img src={photo} alt="Profile picture" />
            <h2> Sergio Junior </h2>
            <h2> {header.title} </h2>

            <div className='social'>
                <a href={isEnglish ? enCV : ptBRCV} title='Curriculum'> <FaRegFilePdf size={24} /> </a>
                <a href={header.linkedin} title='LinkedIn'> <FaLinkedin size={24} /></a>
                <a href="https://github.com/juniorsergio/" title='GitHub'> <FaGithub size={24} /> </a>
            </div>

            <div className='localization'>
                <BiMap size={20} />
                {header.localization}
            </div>

            <div className='email'>                   
                <BiEnvelope size={20} />
                <a href='mailto:sergio.junior55@hotmail.com'>
                    sergio.junior55@hotmail.com
                </a>
            </div>
        </Container>
    )
}
