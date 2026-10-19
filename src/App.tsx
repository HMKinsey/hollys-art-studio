import { Container } from '@mui/material'
import { Footer } from './components/Footer'
import { Flyer } from './components/Flyer'
import { PortfolioTabs } from './components/PortfolioTabs'
import { appContainerSx } from './app.styles'

function App() {
  if (window.location.pathname.replace(/\/+$/, '') === '/flyers') {
    return <Flyer />
  }

  return (
    <Container maxWidth="lg" sx={appContainerSx}>
      <PortfolioTabs />
      <Footer />
    </Container>
  )
}

export default App
