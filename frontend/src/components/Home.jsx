import React from 'react'
import { MdOutlineGTranslate } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full h-screen text-center flex flex-col gap-4 items-center bg-home-gradient'>

            <h1 className='text-3xl text-white'>
                Fruit.Ai
            </h1>

            <p className='text-white'>
                "Be Healthy !"
            </p>


            <div className='flex flex-col w-full h-full gap-5 items-center justify-center'>

                <div className='flex w-full h-1/3 justify-center gap-7'>
                    <div onClick={() => navigate('/chat')}
                    className='w-1/6 h-3/4 cursor-pointer
                     bg-yellowGrad rounded-lg flex items-center justify-center'>
                        <h1 className='text-customPink text-4xl font-semibold'>
                            Chat.
                        </h1>
                    </div>
                    <div className='w-1/6 h-3/4 bg-customGreen rounded-lg'></div>
                </div>
                <div onClick={() => navigate('/chat')}
                 className='flex w-full h-1/3 justify-center gap-7'>
                    <div className='w-1/6 h-3/4 bg-customLightYellow rounded-lg'></div>
                    <div className='w-1/6 h-3/4 cursor-pointer
                     bg-customBlue rounded-lg flex items-center justify-center'>
                        <MdOutlineGTranslate className='text-6xl text-testColor' />
                    </div>
                </div>
                <div onClick={() => navigate('/FAQs')}
                className='flex w-full h-1/3 justify-center gap-7'>
                    <div className='w-1/6 h-3/4 bg-customPurp rounded-lg flex items-center justify-center'>
                        <h1 className='text-4xl cursor-pointer
                         text-faqCustom font-bold'>
                            FAQs
                        </h1>
                    </div>
                    <div onClick={() => navigate('/about')}
                     className='w-1/6 h-3/4 bg-aboutPurp cursor-pointer
                     rounded-lg flex items-center justify-center'>
                        <h1 className='text-4xl text-aboutText font-bold'>
                            About
                        </h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
