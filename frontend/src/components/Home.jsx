import React, { useContext } from 'react'
import { MdOutlineGTranslate } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { LuLogOut } from "react-icons/lu";
import toast from 'react-hot-toast';

const Home = () => {

    const { getAllFruits , setLogin} = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='relative w-full h-screen text-center flex flex-col gap-4 items-center bg-home-gradient'>

            <h1 className='text-3xl text-white'>
                Fruit.Ai
            </h1>

            <div
            onClick={() => {
                if(localStorage.getItem('isLogin')) {
                    localStorage.removeItem('isLogin');
                }
                setLogin(false);
                toast.success('Logged out successfully');
                navigate('/login')
            }}
             className='absolute flex w-full justify-end'>
                <LuLogOut className='text-5xl' />
            </div>

            <p className='text-white'>
                "Be Healthy !"
            </p>


            <div className='flex flex-col w-full h-full gap-5 items-center justify-center'>

                <div className='flex w-full h-1/3 justify-center gap-7'>
                    <NavLink to={'/chat'}
                        className='w-1/6 h-3/4 cursor-pointer
                     bg-yellowGrad rounded-lg flex items-center justify-center'>
                        <h1 className='text-customPink text-4xl font-semibold'>
                            Chat.
                        </h1>
                    </NavLink>
                    <div className='w-1/6 h-3/4 bg-customGreen rounded-lg'></div>
                </div>
                <NavLink to={'/chat'}
                    className='flex w-full h-1/3 justify-center gap-7'>
                    <div className='w-1/6 h-3/4 bg-customLightYellow rounded-lg'></div>
                    <div className='w-1/6 h-3/4 cursor-pointer
                     bg-customBlue rounded-lg flex items-center justify-center'>
                        <MdOutlineGTranslate className='text-6xl text-testColor' />
                    </div>
                </NavLink>
                <div
                    className='flex w-full h-1/3 justify-center gap-7'>
                    <NavLink to={'/FAQs'}
                        onClick={() => {
                            getAllFruits();
                        }}
                        className='w-1/6 h-3/4 bg-customPurp rounded-lg flex items-center justify-center'>
                        <h1 className='text-4xl cursor-pointer
                         text-faqCustom font-bold'>
                            FAQs
                        </h1>
                    </NavLink>
                    <NavLink to={'/about'}
                        className='w-1/6 h-3/4 bg-aboutPurp cursor-pointer
                     rounded-lg flex items-center justify-center'>
                        <h1 className='text-4xl text-aboutText font-bold'>
                            About
                        </h1>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default Home
