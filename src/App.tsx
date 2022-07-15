import { Header } from './components/Header'
import { Main } from './components/Main'

import { GlobalStyle, Wrapper } from './styles/global';

export function App() {
  return (
    <Wrapper>
        <Header />
        <Main />
        <GlobalStyle />
    </Wrapper>
  )
}      