/*
  Setup Dashboard Pages
  ~~ npm install react-icons

  1. pages/dashboard 
    -> create Stats, Profile, AddJob, AllJobs, SharedLayout,
    -> create index.js and setup import/export

  2. App.jsx


****************************

  Components - Navbar, SmallSidebar, BigSidebar
  3. /components:
    -> create Navbar, SmallSidebar (for small screen), BigSidebar (for big screen) in 
    -> import Wrappers from assets/wrappers


****************************

  4. SharedLayout.jsx
  5. userSlice -> toggleSidebar
  6. Navbar.jsx -> control dropdown
  7. SmallSidebar.jsx -> toggleSidebar
    -> utils/links.js
    -> NavLinks.jsx
  8. BigSidebar
  


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
