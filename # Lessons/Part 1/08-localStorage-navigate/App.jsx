/*
  LocalStorage
  1. utils/localStorage.js
  2. userSlice.js
    -> after user login -> add user to localStorage
  3. Register.jsx
    -> navigate to /


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
