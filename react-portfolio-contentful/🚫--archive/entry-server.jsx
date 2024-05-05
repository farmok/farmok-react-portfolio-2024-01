import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Nav_Route from './routes';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Nav_Route />
    </React.StrictMode>,
  )
  return { html }
}