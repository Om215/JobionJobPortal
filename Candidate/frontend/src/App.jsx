// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

//IMPORTING PAGES
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import Support from './pages/Support'
import Error from './pages/Error'
import { store } from './auth/authStore'
import Internships from './pages/Internships'
import JobDescription from './pages/JobDescription'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        {/* <Searchbar/> */}
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/:id" element = {<JobDescription/>}/>
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App