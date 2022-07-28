import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Cookies from "js-cookie";

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { lightTheme, darkTheme } from './styles/theme'
import { LoadingContainer, GlobalStyle, Wrapper, YinYang } from './styles/global';

export function App() {
	const darkModeCookie = Cookies.get('darkMode') ?? 'true'
  const [ isDarkMode, setIsDarkMode ] = useState(darkModeCookie === 'true')
  const [ pageLoading, setPageLoading ] = useState(false)

  function handleColorSchemeSelection(){
    setIsDarkMode(!isDarkMode)
    Cookies.set('darkMode', (!isDarkMode).toString())
  }

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, 3000)
  }, [])

  if(pageLoading) {
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <LoadingContainer>
          <YinYang />
        </LoadingContainer>  
        <GlobalStyle />
      </ThemeProvider>
    )
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