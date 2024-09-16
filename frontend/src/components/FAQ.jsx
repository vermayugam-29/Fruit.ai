import React, { useContext, useEffect , useState} from 'react'
import { AppContext } from '../context/AppContext'
import tangerine from '../assets/tangerine.png'
import FruitModal from './FruitModal';
import Spinner from './Spinner';
import EditFruitModal from './EditFruitModal';


const FAQ = () => {
    const {
        getAllFruits, getFruitById, addFruit, updateFruit, deleteFruit,
        fruits, currFruit, loading
    } = useContext(AppContext);


    const [modal, setModal] = useState(false); 
    const [editModal , setEditModal] = useState(false);
    
    const handleEditOpen = () => {
        setEditModal(true);
    }

    const handleEditClose = () => {
        setEditModal(false);
    }


    const handleAddFruitClick = () => {
        setModal(true);
    };
    
    const handleCloseModal = () => {
        setModal(false);
    };
    
    useEffect(() => {
        if (!fruits) {
            getAllFruits();
        }
    }, [])
    
    if(loading) {
        return <Spinner ></Spinner>
    }


    return (
        <div className='w-full min-h-screen max-h-fit bg-home-gradient flex flex-col items-center gap-9'>

            <h1 className='text-4xl text-white font-normal mt-3'>FaQ Section</h1>


            <button
            onClick={handleAddFruitClick}
                className='bg-customPink w-1/4 rounded-full p-2 text-faqCustom font-bold'>
                Add New Fruit
            </button>


            <div className='flex flex-col gap-6'>

                {
                    fruits &&

                    fruits.map((fruit) => (
                        <div key={fruit.id}
                        onClick={() => {
                            getFruitById(fruit.id);
                            handleEditOpen();
                        }}
                         className='flex bg-customWhite p-3 rounded-xl gap-3 cursor-pointer'>

                            <div className='flex flex-col items-center'>

                                <div>
                                    <img src={tangerine} alt="" />
                                </div>

                                <div className='text-customRed font-bold'>
                                    {fruit.name}
                                </div>

                            </div>

                            <div className='flex flex-col w-1/2'>

                                <div className='text-customRed font-bold'>
                                    {fruit.title}
                                </div>

                                <div className='text-blueDescription text-sm w-1/2'>
                                    {fruit.description}
                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>

            {
                modal && 
                <FruitModal handleCloseModal={handleCloseModal} />
            }

            {
                editModal && 
                <EditFruitModal handleCloseModal={handleEditClose} />
            }

        </div>
    )
}

export default FAQ
