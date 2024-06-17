import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/Login.page';
import SignUpPage from './pages/SignUp.page';
import { Profile } from './pages/Profile';
import { HomePage } from './pages/Home.page';
import { Navbar } from './components/NavBar.component';
import { Products } from './pages/Products.page';
import { Settings } from './pages/Settings.page';
import { AuthContextProvider } from './context/AuthProvider.context';
import { Userverificationsuccess } from './pages/Userverificationsuccess';

const AppContent = () => {
  const location = useLocation();

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = ['/signup', '/login'];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/userverificationsuccess' element={<Userverificationsuccess />} />
      </Routes>
    </>
  );
};

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthContextProvider>
  );
}
