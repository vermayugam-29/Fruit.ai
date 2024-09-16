import React, { useContext, useState  } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLockClosedOutline, IoFingerPrintOutline } from "react-icons/io5";
import {
    FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn
} from "react-icons/fa";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Login = () => {


    const navigate = useNavigate();
    const {setLogin} = useContext(AppContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    })

    const comingSoonMsg = () => {
        const toastId = toast.loading('Feature coming soon');
        setTimeout(() => {
            toast.dismiss(toastId);
            toast.success('Hope you co-operate', {
                duration: 5000,
            });
        }, 3000);
    };

    const changeHandler = (event) => {
        const { name, type, checked, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLogin(true);
        if(formData.remember) {
            localStorage.setItem('isLogin', JSON.stringify("true"));
        }
        navigate('/home');
    }

    return (
        <div className='flex flex-col w-full gap-7 items-center'>

            <div className='flex flex-col items-center gap-4'>

                <h1 className='text-3xl font-normal mt-10'>
                    Login
                </h1>

                <p className='text-center'>
                    By signing in you are agreeing our
                    <span className='ml-1 text-blue-400'>
                        Term and privacy policy
                    </span>
                </p>

            </div>

            <div className='flex flex-row gap-3 justify-center'>

                <div>
                    <button className='text-blue-700 font-medium'>
                        Login
                    </button>
                    <div className='bg-gray-400 w-full h-[2px] rounded-md'></div>
                </div>

                <button
                    onClick={() => {
                        toast.success('You can use any dummy id for now feature coming soon')
                    }}
                >
                    Register
                </button>

            </div>

            <form
                onSubmit={submitHandler}
                className='flex flex-col items-center justify-center w-full gap-6'>

                <div className='flex flex-col items-start w-1/4'>

                    <div className='flex items-center gap-2'>

                        <div className=''>
                            <MdOutlineMailOutline />
                        </div>

                        <div>
                            <input
                                value={formData.email}
                                name='email'
                                onChange={changeHandler}
                                required
                                className='border-transparent w-[350px]
                                focus:border-transparent focus:outline-none'
                                placeholder='Email Address'
                                type='email' />
                        </div>

                    </div>

                    <div
                        className='bg-gray-400 w-full h-[3.1px] rounded-md'
                    >
                    </div>

                </div>

                <div className='flex flex-col items-start w-1/4'>

                    <div className='flex items-center gap-2'>

                        <div>
                            <IoLockClosedOutline />
                        </div>

                        <div>
                            <input
                                value={formData.password}
                                name='password'
                                onChange={changeHandler}
                                required
                                className='border-transparent w-[350px]
                                focus:border-transparent focus:outline-none'
                                placeholder='Password'
                                type='password' />
                        </div>

                    </div>

                    <div
                        className='bg-gray-400 w-full h-[3px] rounded-md'
                    >
                    </div>

                </div>


                <div className='flex flex-row w-1/4 justify-between'>

                    <div className='flex gap-1 items-center'>
                        <input
                            value={formData.remember}
                            name='remember'
                            onChange={changeHandler}
                            className='mt-[2px]'
                            type='checkbox'
                            id='check'
                        />
                        <label htmlFor='check'>
                            Remember me
                        </label>
                    </div>

                    <div>

                        <h1 className='text-blue-600 cursor-pointer'>
                            Forgot Password
                        </h1>

                    </div>

                </div>


                <button className='w-1/4 bg-blue-500 p-2 rounded-lg'>
                    Login
                </button>

            </form>

            <div className='text-center'>
                <p className='text-gray-500'>
                    or connect with
                </p>
            </div>

            <div className='flex w-1/6 justify-between'>

                <div onClick={comingSoonMsg}
                    className='bg-gray-300 rounded-full p-2 transition-colors duration-300 hover:bg-blue-500'>
                    <FaFacebookF
                        className='text-2xl'
                    />
                </div>
                <div onClick={comingSoonMsg}
                    className='bg-gray-300 rounded-full p-2 
                transition-all duration-500 hover:bg-gradient-to-r
                 hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500'>
                    <FaInstagram className='text-2xl hover:text-white' />
                </div>
                <div onClick={comingSoonMsg}
                    className='bg-gray-300 rounded-full p-2 transition-colors duration-300 hover:bg-red-500'>
                    <FaPinterestP
                        className='text-2xl'
                    />
                </div>
                <div onClick={comingSoonMsg}
                    className='bg-gray-300 rounded-full p-2 transition-colors duration-300 hover:bg-blue-400'>
                    <FaLinkedinIn
                        className='text-2xl'
                    />
                </div>

            </div>

            <div onClick={comingSoonMsg}
                className='w-1/8 text-center bg-blue-600 p-3 rounded-xl'>

                <IoFingerPrintOutline className='w-full h-16 text-center text-white' />

            </div>

        </div>
    )
}

export default Login