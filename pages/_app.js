import '../styles/globals.css'
import { ThemeProvider, withTheme } from '@emotion/react'
import theme from '../configs/theme'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
