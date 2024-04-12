import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login.page'
import SignUpPage from './pages/SignUp.page'

export default function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>

      </Routes>
   </Router>
  )
}