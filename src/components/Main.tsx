import { useTranslation } from "react-i18next"
import { useState } from 'react'

import { AboutMe } from './AboutMe'
import { DataScience } from "./DataScience"
import { Frontend } from "./Frontend"

import { List } from "../styles/lists"
import { Container } from "../styles/components/Main"

export function Main(){
    const { t } = useTranslation()
    const [ activeTab, setActiveTab ] = useState('aboutMe')

    function handleNavigationTab (tab: string) {
        setActiveTab(tab)
    }

    function renderSwitchTab() {
        switch(activeTab){
            case 'aboutMe': return <AboutMe />
            case 'frontend': return <Frontend />
            case 'dataScience': return <DataScience />
            default: return <AboutMe />
        }
    }

    return (
        <Container>
            <nav>
                <List>
                    <li className={activeTab === 'aboutMe' ? 'active' : ''} onClick={() => handleNavigationTab('aboutMe')}>
                        <h2>{t('main.tabs.aboutMe')}</h2>
                    </li>
                    <li className={activeTab === 'frontend' ? 'active' : ''} onClick={() => handleNavigationTab('frontend')}>
                        <h2>Front-End</h2>
                    </li>
                    <li className={activeTab === 'dataScience' ? 'active' : ''} onClick={() => handleNavigationTab('dataScience')}>
                        <h2>{t('main.tabs.dataScience')}</h2>
                    </li>
                </List>
            </nav>

            {renderSwitchTab()}
        </Container>
    )
}