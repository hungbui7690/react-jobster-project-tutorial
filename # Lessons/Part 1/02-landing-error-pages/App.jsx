/*
  Landing Page - Setup
  ~~ npm install styled-components
  ~~ npm install react-router-dom@^6.4.3

***********************

  1. components/Logo.jsx
  1. pages/Landing.jsx
  2. App.jsx


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
