import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Route from './routes';
import ReactGA from 'react-ga';

ReactGA.initialize('G-99BQGKHRBG');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav_Route />
  </React.StrictMode>,
)