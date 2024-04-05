import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login.page'
// import TestingPage from './pages/Test.page'
import SignUpPage from './pages/SignUp.page'

export default function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        {/* <Route path='/testing' element={<TestingPage/>}/> */}

      </Routes>
   </Router>
  )
}