import { useState } from 'react'

import { AboutMe } from '../AboutMe/AboutMe'
import { DataScience } from '../DataScience/DataScience'
import { Frontend } from '../Frontend/Frontend'

import { List } from 'styles/lists'
import { Container } from './styles'
import { useTranslation } from 'hooks/useTranslation'
import { TabsNames } from 'interfaces/CdnData'

const currentTab = {
    aboutMe: <AboutMe />,
    frontend: <Frontend />,
    dataScience: <DataScience />
}

export function Main(){
    const { translation: { main: { tabs } } } = useTranslation()
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