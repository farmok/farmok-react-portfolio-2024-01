// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic.js'

import "@fontsource/inter";
import "@fontsource/roboto";
import "@fontsource/outfit";
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>

      <App />

    </PrismicProvider>
  </React.StrictMode>,
)
