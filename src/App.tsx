import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle, Wrapper } from './styles/global';
import { TranslationProvider } from './hooks/useTranslation';
import { useCookies } from 'react-cookie';

export function App() {
  const [ { darkMode }, setCookie ] = useCookies(['darkMode']);
  const [ isDarkMode, setIsDarkMode ] = useState(darkMode)

  function handleColorSchemeSelection(){
    setIsDarkMode(!isDarkMode)
    setCookie('darkMode', !isDarkMode)
  }

  return (
    <Wrapper>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <TranslationProvider>
          <Header isDarkMode={isDarkMode} changeColorScheme={handleColorSchemeSelection} />
          <Main />
          <GlobalStyle />
        </TranslationProvider>
      </ThemeProvider>
    </Wrapper>
  )
}      