import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FlyerPage } from './pages/FlyerPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { sharedStrings } from './constants/shared'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioPage />,
  },
  {
    path: sharedStrings.routes.flyer,
    element: <FlyerPage />,
  },
  {
    path: '*',
    element: <PortfolioPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
