import { Header } from './components/Header'
import { Main } from './components/Main'

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="app">
        <Header />
        <Main />
        <GlobalStyle />
    </div>
  )
}

export default App;           