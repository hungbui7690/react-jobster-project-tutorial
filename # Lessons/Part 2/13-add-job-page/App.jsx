/*
  Add Job Page
  - features/job/jobSlice.js
  - store.js
  - pages/AddJobs.jsx
    -> components/FormRowSelect
  - jobSlice -> reducer -> handleChange


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App
