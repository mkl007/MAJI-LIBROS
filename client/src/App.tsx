import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TestingPage from './pages/TestingPage'
import SignUpPage from './pages/SignUpPage'

export default function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/testing' element={<TestingPage/>}/>

      </Routes>
   </Router>
  )
}