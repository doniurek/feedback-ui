import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  // Activates some additional checks an warnings
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root'))