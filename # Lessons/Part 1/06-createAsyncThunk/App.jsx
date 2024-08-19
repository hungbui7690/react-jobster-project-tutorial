/*
  createAsyncThunk
  - Return a promise. 
  - Handling async request.
  - Does not generate any reducer functions


****************************

  RegisterUser, LoginUser - Placeholders
  1. userSlice
  2. pages/Register.jsx



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
