import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeConfig } from './config/theme.config'

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(console.log)
