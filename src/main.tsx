import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.ts';
import { App} from './App.tsx';
import { Global } from '@emotion/react';
import React from 'react';
import './i18n';
import 'modern-normalize/modern-normalize.css';
import { LanguageProvider } from './components/LanguageSwitcher/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <HelmetProvider>
      <BrowserRouter basename="/">
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
