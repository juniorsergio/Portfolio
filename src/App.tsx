import { Section } from './components/Main'
import { Sideinfo } from './components/Header'

import "./i18n"

import './styles/App.css'

function App() {
  return (
    <div className="app">
        <Sideinfo />
        <Section />
    </div>
  )
}

export default App;