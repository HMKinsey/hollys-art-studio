import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { en } from './locales/en';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/dancing-script/500.css';
import '@fontsource/dancing-script/700.css';

const isFlyerPage =
  window.location.pathname.replace(/\/+$/, '') === en.routes.flyer;
const pageMetadata = isFlyerPage
  ? {
      title: en.metadata.flyerTitle,
      description: en.metadata.flyerDescription,
    }
  : {
      title: en.metadata.portfolioTitle,
      description: en.metadata.portfolioDescription,
    };
const descriptionElement = document.querySelector<HTMLMetaElement>(
  'meta[name="description"]'
);

if (!descriptionElement) {
  throw new Error(en.errors.pageDescriptionNotFound);
}

document.title = pageMetadata.title;
descriptionElement.content = pageMetadata.description;

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(en.errors.rootElementNotFound);
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
