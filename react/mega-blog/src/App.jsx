import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import { Header, Footer } from './components'
import { Outlet } from 'react-router';


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false));
  }, [])

  return (
    !loading ? (
      <div className='min-h-screen flex flex-col bg-gray-400'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    ) : <div>... loading</div>
  )
}

export default App
