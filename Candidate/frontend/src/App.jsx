// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './authContext/AuthContext'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import Support from './pages/Support'
import Error from './pages/Error'
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/internships" element={<Jobs/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/support" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </AuthProvider>

  )
}

export default App