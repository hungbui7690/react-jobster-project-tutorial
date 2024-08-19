/*
  Register Page
  - 1 page for Login and Register


******************************

  1. components/FormRow.jsx
  2. pages/Register
    -> for Login/Register
    -> add toggleMember()


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
