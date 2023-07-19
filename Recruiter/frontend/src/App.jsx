import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './auth/authStore'
import RootLayout from "./components/RootLayout"

//Impoprting Pages
import RecruiterDashboard from "./pages/RecruiterDashboard"
import Candidates from './pages/Candidates'
import Jobs from './pages/Jobs'
import NewPost from './pages/NewPost'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Internships from './pages/Internships'
import PrivateRoute from './components/PrivateRoute'
import Settings from './pages/Settings'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/recruitersignin" element={<SignIn />}></Route>
          <Route path="/recruitersignup" element={<SignUp />}></Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path="/candidates" element={<RootLayout><Candidates /></RootLayout>}></Route>
            <Route path="/jobs" element={<RootLayout><Jobs /></RootLayout>}></Route>
            <Route path="/internships" element={<RootLayout><Internships/></RootLayout>}></Route>
            <Route path="/newpost" element={<RootLayout><NewPost /></RootLayout>}></Route>
            <Route path="/recruiterdashboard" element={<RootLayout><RecruiterDashboard /></RootLayout>}></Route>
            <Route path="/settings" element={<RootLayout><Settings /></RootLayout>}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>

  )
}

export default App
