import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
