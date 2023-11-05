import { useState } from 'react'

import { AboutMe } from '@app/components/AboutMe/AboutMe'
import { DataScience } from '@app/components/DataScience/DataScience'
import { Frontend } from '@app/components/Frontend/Frontend'

import { List } from '@app/styles/lists'
import { Container } from './styles'
import { useTranslation } from '@app/hooks/useTranslation'
import { TabsNames } from '@app/interfaces/CdnData'

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