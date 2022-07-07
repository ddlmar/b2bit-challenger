import { useEffect, useState } from "react"
import { useAPI } from "../hooks/useApi";
import { User } from "../types/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider =  ({children}: {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useAPI();

    useEffect(() => {
        const validadeToken = async () => {
            const storageData = localStorage.getItem('authToken')
            if(storageData){
                const data = await api.validadeToken(storageData)
                if(data.user){
                    setUser(data.user)
                }
            }
        }
        validadeToken()
    }, [api]);

    const signin = async (email: string, password: string) => {
       const data = await api.signin(email, password);
        if(data.user && data.tokens) {
            setUser(data.user);
            setToken(data.tokens)
            return true;
        }
        return false;
    }

    const setToken = (tokens: string) => {
        localStorage.setItem('authToken', tokens)
    }

    const signout = async () => {
        setUser(null);
        setToken('')
        await api.logout();
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}