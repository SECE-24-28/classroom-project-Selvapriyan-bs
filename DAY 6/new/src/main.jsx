import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx' 
import Aray  from './Aray.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aray/>
  </StrictMode>,
)
