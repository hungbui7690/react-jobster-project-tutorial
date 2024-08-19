/*
  RTK - User Slice - Setup
  ~~ npm install @reduxjs/toolkit react-redux


**************************

  1. features/user/userSlice.js
  2. store.js
  3. main.jsx -> Provider


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App
