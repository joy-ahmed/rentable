import React from 'react'
import ReactDOM from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import App from './App.tsx'
import './index.css'
import SmoothScrolling from './lib/SmoothScroll.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmoothScrolling> 
    <App />
    </SmoothScrolling>
  </React.StrictMode>,
)
