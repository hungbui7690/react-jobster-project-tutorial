/*
  React Toastify
  - React Toastify : https://www.npmjs.com/package/react-toastify
  ~~ npm install --save react-toastify


********************************

  1. App.jsx
  2. Register.jsx
  3. index.css -> style Toastify
    .Toastify__toast {
      text-transform: capitalize;
    }




*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register } from './pages'

// 1.
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>

      {/* 2. go to Register */}
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App
