import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate , useLocation } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const navigate = useNavigate();
    const location = useLocation();
    const base_url = import.meta.env.VITE_SERVER_URL;


    //loading state
    const [loading , setLoading] = useState(false);


    //fruits state
    const [fruits , setFruits] = useState(null);
    const [currFruit , setCurrFruit] = useState(null)


    useEffect(() => {
        const flag = JSON.parse(localStorage.getItem('isLogin'));
        if(flag) {
            const url = location.pathname.substring(1);
            setLogin(true);
            if(url === 'login') {
                navigate('/home')
            } else if(url === 'about' || url === 'FAQs' || url === 'chat') {
                if(url === 'about') navigate('/about')
                if(url === 'FAQs') navigate('/FAQs')
                if(url === 'chat') navigate('/chat')
            }
        }
    }, [navigate])

    const [isLogin , setLogin] = useState(false);

    const getAllFruits = async() => {
        setLoading(true);
        try {
            const response = await axios.get(`${base_url}`);
            setFruits(response.data.data);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    const getFruitById = async(id) => {
        setLoading(true);
        try {
            const response = await axios.get(`${base_url}/fruit/${id}`);
            setCurrFruit(response.data.data);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    const addFruit = async(data) => {
        setLoading(true);
        try {
            const response = await axios.post(`${base_url}/fruit/add` , data);
            setFruits((prev) => {
                return [
                    ...prev,
                    response.data.data
                ]
            })
            toast.success('Fruit added successfully');
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }

    const updateFruit = async(data, id) => {
        setLoading(true);
        try {
            const response = await axios.put(`${base_url}/fruit/${id}/update`, data);
            setCurrFruit(response.data.data);
            setFruits(response.data.allData);
            toast.success('Fruit updated successfully');
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }

    const deleteFruit = async(id) => {
        setLoading(true);
        try {
            console.log(id);
            const response = await axios.delete(`${base_url}/fruit/${id}/delete`);
            setFruits(response.data.data);
            toast.success('Fruit deleted successfully');
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }



    const data = {
        isLogin,
        setLogin,
        getAllFruits,
        getFruitById,
        addFruit,
        updateFruit,
        deleteFruit,
        fruits,
        currFruit,
        loading
    };

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}