import React from 'react';
import { createRoot } from 'react-dom/client';
import {} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
