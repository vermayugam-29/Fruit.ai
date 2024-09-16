import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const FruitModal = ({ handleCloseModal }) => {

    const { addFruit , loading } = useContext(AppContext);
    const [data, setData] = useState({
        name: '',
        title: '',
        description: ''
    });

    const changeHandler = (e) => {
        const {name , value} = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addFruit(data);
        handleCloseModal();
    }

    if(loading) {
        return <Spinner />
    }


    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg w-1/3'>
                <h2 className='text-xl font-bold mb-4'>Add New Fruit</h2>
                {/* Your form fields for adding a new fruit here */}
                <form onSubmit={submitHandler}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input
                        required
                        onChange={changeHandler}
                            value={data.name}
                            name='name'
                            type='text'
                            className='w-full p-2 border border-gray-300 rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Title</label>
                        <input
                        required
                        onChange={changeHandler}
                            value={data.title}
                            name='title'
                            type='text'
                            className='w-full p-2 border border-gray-300 rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Description</label>
                        <textarea
                        required
                        onChange={changeHandler}
                            value={data.description}
                            name='description'
                            className='w-full p-2 border border-gray-300 rounded'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white p-2 rounded'
                    >
                        Add Fruit
                    </button>
                    <button
                        type='button'
                        className='bg-red-500 text-white p-2 rounded ml-2'
                        onClick={handleCloseModal} // Close the modal
                    >
                        Close
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FruitModal
