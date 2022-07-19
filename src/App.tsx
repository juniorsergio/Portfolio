import { Aside } from './components/Aside'
import { Main } from './components/Main'

import { GlobalStyle, Wrapper } from './styles/global';

export function App() {
  return (
    <Wrapper>
        <Aside />
        <Main />
        <GlobalStyle />
    </Wrapper>
  )
}      