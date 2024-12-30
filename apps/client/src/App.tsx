import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/Login.page';
import SignUpPage from './pages/SignUp.page';
import { Profile } from './pages/Profile';
import { HomePage } from './pages/Home.page';
import { Navbar } from './components/NavBar.component';
import { Products } from './pages/Products.page';
import { Settings } from './pages/Settings.page';
import { AuthContextProvider } from './contexts/AuthProvider.context';
import { Userverificationsuccess } from './pages/Userverificationsuccess';
import { Footer } from './components/Footer.component';
import { ProtectedRoutes } from './components/protectedRoutes/ProtectedRoutes.component';
import { AddNewBook } from './pages/AddNewBook.page';
import ShoppingCartPage from './pages/ShoppingCart.page';
import { BookContextProvider } from './contexts/Book.context';
import { MyBooksPage } from './pages/MyBooks.page';
import { SideBar } from './components/SideBar';
import { AppLayout } from './layout/App.layout';
import { UpdateBook, UpdateBookPage } from './pages/UpdateBook.page';
import Adminpage from './pages/Admin.page';
import { AdminProtectedRoutes } from './components/protectedRoutes/AdminProtectedRoutes';
import { NotAuthorized } from './pages/NotAuthorized.page';


const AppContent = () => {
  const location = useLocation();

  const noNavbarRoutes = ['/signup', '/login'];
  const noFooterRoutes = ['/signup', '/login'];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && !noFooterRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

      {/* Protected Routes */}
      <AppLayout>
        <Routes>
          <Route path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path='/products' element={<ProtectedRoutes><Products /></ProtectedRoutes>} />
          <Route path='/settings' element={<ProtectedRoutes><Settings /></ProtectedRoutes>} />
          <Route path='/addNewBook' element={<ProtectedRoutes><AddNewBook /></ProtectedRoutes>} />
          <Route path='/cart' element={<ProtectedRoutes><ShoppingCartPage /></ProtectedRoutes>} />
          <Route path='/mybooks' element={<ProtectedRoutes><MyBooksPage /></ProtectedRoutes>} />
          <Route path='/editbook/:bookId' element={<ProtectedRoutes><UpdateBookPage /></ProtectedRoutes>} />

          <Route path='/userverificationsuccess' element={<Userverificationsuccess />} />
          
          <Route path='/not-authorized' element={<NotAuthorized />} />  
          <Route path='/adminPage' element={<AdminProtectedRoutes><Adminpage /></AdminProtectedRoutes>} />
        </Routes>
      </AppLayout>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}

    </>
  );
};

export default function App() {
  return (
    <AuthContextProvider>
      <BookContextProvider>
        <Router>
          <AppContent />
        </Router>
      </BookContextProvider>
    </AuthContextProvider>
  );
}
