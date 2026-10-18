import { Container } from '@mui/material'
import { Footer } from './components/Footer'
import { PortfolioTabs } from './components/PortfolioTabs'
import { appContainerSx } from './app.styles'

function App() {
  return (
    <Container maxWidth="lg" sx={appContainerSx}>
      <PortfolioTabs />
      <Footer />
    </Container>
  )
}

export default App
