import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const navigate = useNavigate();

    useEffect(() => {
        const flag = JSON.parse(localStorage.getItem('isLogin'));
        if(flag) {
            setLogin(true);
            navigate('/home')
        }
    }, [])

    const [isLogin , setLogin] = useState(false);



    const data = {
        isLogin,
        setLogin
    };

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}