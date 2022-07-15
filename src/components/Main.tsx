import { useTranslation } from "react-i18next"

import { MouseEventHandler, useState } from 'react'
import { AboutMe } from './AboutMe'
import { DataScience } from "./DataScience"

import '../styles/Main.css'

export function Main(){
    const { t } = useTranslation()
    const [ activeTab, setActiveTab ] = useState('aboutMe')

    function handleNavigationTab (tab: string) {
        setActiveTab(tab)
    }

    function renderSwitchTab() {
        switch(activeTab){
            case 'aboutMe': return <AboutMe />
            case 'dataScience': return <DataScience />
            default: return <AboutMe />
        }
    }

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

            {renderSwitchTab()}
        </main>
    )
}