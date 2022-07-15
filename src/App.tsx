import { Header } from './components/Header'
import { Main } from './components/Main'

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div className='wrapper'>
        <Header />
        <Main />
        <GlobalStyle />
    </div>
  )
}      