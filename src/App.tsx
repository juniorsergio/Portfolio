import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Cookies from "js-cookie";

import { Header } from './components/Header'
import { Main } from './components/Main'

import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle, Wrapper } from './styles/global';

export function App() {
	const darkModeCookie = Cookies.get('darkMode') ?? 'true'
  const [ isDarkMode, setIsDarkMode ] = useState(darkModeCookie === 'true')

  function handleColorSchemeSelection(){
    setIsDarkMode(!isDarkMode)
    Cookies.set('darkMode', (!isDarkMode).toString())
  }
  
  return (
    <Wrapper>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Header isDarkMode={isDarkMode} changeColorScheme={handleColorSchemeSelection} />
          <Main />
          <GlobalStyle />
        </ThemeProvider>
    </Wrapper>
  )
}      