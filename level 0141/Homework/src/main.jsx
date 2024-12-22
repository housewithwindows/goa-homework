import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorChangeButton from './colorChange.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChangeButton />
  </StrictMode>,
)
