import React, { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import { AppContext } from './context/AppContext'

const App = () => {

  const navigate = useNavigate();
  const {isLogin} = useContext(AppContext);

  useEffect(() => {
    if(!isLogin) {
      navigate('/login');
    } else {
      navigate('/home')
    }
  }, [])


  return (
    <div className='w-full h-screen'>
      



      <Routes>

        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/home'} element={<HomePage />}/>
        <Route path={'/chat'} element={<ChatPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/FAQs'} element={<FAQPage />} />

      </Routes>


    </div>
  )
}

export default App
