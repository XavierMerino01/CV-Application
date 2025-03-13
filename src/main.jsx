import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Personal from './components/Personal.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Personal />
    <Education />
    <Experience />
  </StrictMode>,
)
