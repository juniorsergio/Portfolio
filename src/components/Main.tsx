import { useTranslation } from "react-i18next"
import { useState } from 'react'

import { AboutMe } from './AboutMe'
import { DataScience } from "./DataScience"
import { Frontend } from "./Frontend"

import { List } from "../styles/lists"
import { Container } from "../styles/components/Main"

type Tabs = {
    [key: string]: string
};

export function Main(){
    const { t } = useTranslation()
    const tabs: Tabs = t('main.tabs', {returnObjects: true})
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
                    {Object.keys(tabs).map((key) => (
                        <li
                            key={key}
                            className={activeTab === key ? 'active' : ''}
                            onClick={() => handleNavigationTab(key)}
                        >
                            <h2>{tabs[key]}</h2>
                        </li>
                    ))}
                </List>
            </nav>

            {renderSwitchTab()}
        </Container>
    )
}