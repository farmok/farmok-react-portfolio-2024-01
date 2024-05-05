import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Route from './routes';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <Nav_Route />
  </React.StrictMode>
)