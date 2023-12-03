import { createContext, useState } from "react";
import { IAuthContext, IUser } from "../types/entities";
import { Outlet } from "react-router-dom";


const AuthContext = createContext<IAuthContext>({
    userData: null,
    isAuth: false,
    state: 'loading',
    updateValue: () => {}
});

export default function AuthContextProvider(){
    const [userData, setUserData] = useState<IUser | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [state, setState] = useState<'loading' | 'loaded'>('loading');
    
    // return (
    //     <AuthContext.Provider value={{userData, isAuth, state}}>
    //         <Outlet />
    //     </AuthContext.Provider>
    // )
}