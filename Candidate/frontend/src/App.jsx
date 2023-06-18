// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './authContext/AuthContext'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        {/* <Route path="internships" element={<Jobs/>}/>
        <Route path="jobs" element={<Jobs/>}/>
        <Route path="support" element={<Home/>}/> */}
        </Routes>
      </Router>
    </AuthProvider>

  )
}

export default App