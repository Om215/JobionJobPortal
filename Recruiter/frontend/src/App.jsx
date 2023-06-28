import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from "./components/RootLayout"
import RecruiterDashboard from "./pages/RecruiterDashboard"
import Candidates from './pages/Candidates'
import Jobs from './pages/Jobs'
import NewPost from './pages/NewPost'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Provider } from 'react-redux'
import {store} from './auth/authStore'
import PrivateRoute from './components/PrivateRoute'
function App() {

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/recruitersignin" element={<SignIn/>}></Route>
        <Route path="/recruitersignup" element={<SignUp/>}></Route>
        <Route path='' element={<PrivateRoute />}>
          <Route path="/candidates" element={<RootLayout><Candidates/></RootLayout>}></Route>
          <Route path="/postedjobs" element={<RootLayout><Jobs/></RootLayout>}></Route>
          <Route path="/postedinternships" element={<RootLayout><Candidates/></RootLayout>}></Route>
          <Route path="/newpost" element = {<RootLayout><NewPost/></RootLayout>}></Route>
          <Route path="/recruiterdashboard" element={<RootLayout><RecruiterDashboard/></RootLayout>}></Route>
        </Route>
      </Routes>
    </Router>
    </Provider>
    
  )
}

export default App
