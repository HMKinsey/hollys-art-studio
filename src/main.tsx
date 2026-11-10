import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { sharedStrings } from './constants/shared'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/dancing-script/500.css'
import '@fontsource/dancing-script/700.css'

const isFlyerPage =
  window.location.pathname.replace(/\/+$/, '') === sharedStrings.routes.flyer
const pageMetadata = isFlyerPage
  ? {
      title: sharedStrings.metadata.flyerTitle,
      description: sharedStrings.metadata.flyerDescription,
    }
  : {
      title: sharedStrings.metadata.portfolioTitle,
      description: sharedStrings.metadata.portfolioDescription,
    }
const descriptionElement = document.querySelector<HTMLMetaElement>(
  'meta[name="description"]',
)

if (!descriptionElement) {
  throw new Error(sharedStrings.errors.pageDescriptionNotFound)
}

document.title = pageMetadata.title
descriptionElement.content = pageMetadata.description

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(sharedStrings.errors.rootElementNotFound)
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
