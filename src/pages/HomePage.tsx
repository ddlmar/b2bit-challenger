import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {

    const auth = useContext(AuthContext);
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return(
        <div className="flex flex-1 justify-center items-center h-screen bg-gray-100">
            <header></header>
            <div className="flex flex-col w-[400px] h-[300px] items-center justify-center border rounded-lg shadow-2xl bg-white gap-4">
                <img src="" alt="" />
                <div className="flex flex-col">
                    <label>Email</label>
                    <div className="w-80 p-2 bg-gray-100 rounded-lg" >teste</div>
                </div>
                <div className="flex flex-col ">
                    <label >Password</label>
                    <div className="w-80 p-2 bg-gray-100 rounded-lg" >teste</div>
                </div>
            </div>
            
        </div>
    )
}