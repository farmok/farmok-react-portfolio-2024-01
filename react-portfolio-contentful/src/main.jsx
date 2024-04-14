import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Route from './routes';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hooks/scroll_to_top';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Nav_Route />
    </BrowserRouter>
  </React.StrictMode>,
)