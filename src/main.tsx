import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import './index.css'
import App from './App'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/dancing-script/500.css'
import '@fontsource/dancing-script/700.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8A7370',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F9F6F0',
      paper: '#FFFDF9',
    },
    text: {
      primary: '#2D2B2A',
      secondary: '#625d59',
    },
  },
})
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
