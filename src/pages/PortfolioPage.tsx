import { Footer } from '../components/layout/Footer'
import { PortfolioTabs } from '../components/tabs/PortfolioTabs'

export function PortfolioPage() {
  return (
    <main className="studio-shell px-4 py-2 sm:px-6 sm:py-3">
      <PortfolioTabs />
      <Footer />
    </main>
  )
}
