import { useTranslation } from "react-i18next"
import { useState } from 'react'

import { AboutMe } from '../AboutMe/AboutMe'
import { DataScience } from "../DataScience/DataScience"
import { Frontend } from "../Frontend/Frontend"

import { List } from "../../styles/lists"
import { Container } from "./styles"

type Tabs = {
    [key: string]: string
}

const currentTab = {
    'aboutMe': <AboutMe />,
    'frontend': <Frontend />,
    'dataScience': <DataScience />
}

export function Main(){
    const { t } = useTranslation()
    const tabs: Tabs = t('main.tabs', {returnObjects: true})
    const [ activeTab, setActiveTab ] = useState('aboutMe')

    function handleNavigationTab (tab: string) {
        setActiveTab(tab)
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
            
            {currentTab[activeTab as keyof typeof currentTab]}
        </Container>
    )
}