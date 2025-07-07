import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthProvider.context';
import { BookContextProvider } from './contexts/Book.context';
import { AppLayout } from './layout/App.layout';
import { AddNewBook, AdminDashboard, HomePage, LoginPage, MyBooksPage, NotAuthorized, Profile, Settings, ShoppingCartPage, SignUpPage, UpdateBookPage, Userverificationsuccess } from './pages/index';
import { ProtectedRoutes, AdminProtectedRoutes } from './components/index'
import { ShoppingCartProvider } from './contexts/ShoppingCartProvider';
import { BookItem } from './pages/BookItem';

const AppContent = () => {
  
  return (
    <>

      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/products' element={<HomePage />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/addNewBook' element={<AddNewBook />} />
            <Route path='/cart' element={<ShoppingCartPage />} />
            <Route path='/mybooks' element={<MyBooksPage />} />
            <Route path='/editbook/:bookId' element={<UpdateBookPage />} />
            <Route path='/bookItem/:bookId' element={<BookItem />} />
          </Route>

          <Route path='/userverificationsuccess' element={<Userverificationsuccess />} />

          <Route element={<AdminProtectedRoutes />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
          </Route>

          <Route path='/not-authorized' element={<NotAuthorized />} />

        </Route>
      </Routes>
      {/* {!noFooterRoutes.includes(location.pathname) && <Footer />} */}
    </>
  );
};

export default function App() {
  return (
    <AuthContextProvider>
      <BookContextProvider>
        <ShoppingCartProvider >
          <Router>
            <AppContent />
          </Router>
        </ShoppingCartProvider >
      </BookContextProvider>
    </AuthContextProvider>
  );
}
