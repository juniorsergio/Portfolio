import { useTranslation } from "react-i18next"

import { useState } from 'react'
import { AboutMe } from './AboutMe'
import { DataScience } from "./DataScience"

import '../styles/Main.css'

export function Main(){
    const { t, i18n } = useTranslation()
    const [ activeTab, setActiveTab ] = useState('aboutMe')

    function handleNavigationTab (tab: string) {
        setActiveTab(tab);
      };

    return (
        <main>
            <nav>
                <ul className='tabs'>
                    <li className={activeTab === 'aboutMe' ? 'active' : ''} onClick={() => handleNavigationTab('aboutMe')}>
                        <h3>{t('main.tabs.aboutMe')}</h3>
                    </li>
                    <li className={activeTab === 'dataScience' ? 'active' : ''} onClick={() => handleNavigationTab('dataScience')}>
                        <h3>{t('main.tabs.dataScience')}</h3>
                    </li>
                </ul>
            </nav>

            {activeTab === 'aboutMe' ? <AboutMe /> : <DataScience />}
        </main>
    )
}