import { useTranslation } from "react-i18next"

import '../styles/Main.css'
import { useState } from 'react'
import { AboutMe } from './AboutMe'
import { DataScience } from "./DataScience"

export function Main(){
    const { t, i18n } = useTranslation()
    const [ activeTab, setActiveTab ] = useState('aboutMe')

    function handleAboutMe () {
        setActiveTab("aboutMe");
      };
    
      function handleDataScience() {
        setActiveTab("dataScience");
      };

    return (
        <main>
            <nav>
                <ul className='tabs'>
                    <li className={activeTab === 'aboutMe' ? 'activeTab' : ''} onClick={handleAboutMe}>
                        <h3>{t('main.tabs.aboutMe')}</h3>
                    </li>
                    <li className={activeTab === 'dataScience' ? 'activeTab' : ''} onClick={handleDataScience}>
                        <h3>{t('main.tabs.dataScience')}</h3>
                    </li>
                </ul>
            </nav>

            {activeTab === 'aboutMe' ? <AboutMe /> : <DataScience />}
        </main>
    )
}