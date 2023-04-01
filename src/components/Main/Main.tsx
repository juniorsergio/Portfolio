import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { AboutMe } from '../AboutMe/AboutMe'
import { DataScience } from '../DataScience/DataScience'
import { Frontend } from '../Frontend/Frontend'

import { List } from '../../styles/lists'
import { Container } from './styles'

const currentTab = {
    aboutMe: <AboutMe />,
    frontend: <Frontend />,
    dataScience: <DataScience />
}

type TabsNames = keyof typeof currentTab

type Tabs = Record<TabsNames, string>

export function Main(){
    const { t } = useTranslation()
    const tabs: Tabs = t('main.tabs', {returnObjects: true})
    const [ activeTab, setActiveTab ] = useState<TabsNames>('aboutMe')

    return (
        <Container>
            <nav>
                <List>
                    {Object.entries(tabs).map(([key, value]) => (
                        <li
                            key={key}
                            className={activeTab === key ? 'active' : ''}
                            onClick={() => setActiveTab(key as TabsNames)}
                        >
                            <h2>{value}</h2>
                        </li>
                    ))}
                </List>
            </nav>
            {currentTab[activeTab]}
        </Container>
    )
}