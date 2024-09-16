import React, { useContext, useEffect } from 'react'
import Login from '../components/Login'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const {isLogin} = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(isLogin) {
      navigate('/home')
    }
  }, [isLogin])

  return (
    <div className='w-full h-screen'>
      <Login />
    </div>
  )
}

export default LoginPage
