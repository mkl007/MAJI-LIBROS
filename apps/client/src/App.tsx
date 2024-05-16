import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login.page'
import SignUpPage from './pages/SignUp.page'
import { Profile } from './pages/Profile'
import HomePage from './pages/Home.page'



export default function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
   </Router>
  )
}