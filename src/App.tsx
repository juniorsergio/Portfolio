import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Aside } from './components/Aside'
import { Main } from './components/Main'

import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle, Wrapper } from './styles/global';

export function App() {
  const [ isDarkMode, setIsDarkMode ] = useState(true)

  function handleColorSchemeSelection(){
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <Wrapper>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Aside isDarkMode={isDarkMode} changeColorScheme={handleColorSchemeSelection} />
          <Main />
          <GlobalStyle />
        </ThemeProvider>
    </Wrapper>
  )
}      