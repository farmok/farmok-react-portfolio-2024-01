import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Route from './routes';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav_Route />
    </BrowserRouter>
  </React.StrictMode>,
)