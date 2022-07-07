import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {

    const auth = useContext(AuthContext);

    const handleLogout = async () => {
        await auth.signout()
        window.location.href = window.location.href
    }

    return(
        <div className="bg-gray-100 h-screen">
            <div className="flex flex-1 flex-col justify-center items-center ">
                <header className="flex justify-end bg-white w-screen h-auto">
                    <button 
                        className="bg-slate-700 text-white px-28 py-3 rounded-md my-2 mx-6" 
                        onClick={handleLogout}>
                        Logout
                        </button>
                </header>
                <div className="flex flex-col w-[450px] h-[400px] mt-20 items-center justify-center border rounded-lg shadow-2xl bg-white gap-4">
                    <label>Profile photo</label>
                    <img className="w-20 h-20 rounded-lg" src={auth.user?.avatar?.image_low_url} alt="" />
                    <div className="flex flex-col">
                        <label className="flex flex-wrap gap-1">Your<p className="font-medium">Name</p></label>
                        <div className="w-80 p-2 bg-gray-100 rounded-lg" >{`${auth.user?.name} ${auth.user?.last_name}`}</div>
                    </div>
                    <div className="flex flex-col ">
                        <label className="flex flex-wrap gap-1">Your<p className="font-medium">E-mail</p> </label>
                        <div className="w-80 p-2 bg-gray-100 rounded-lg" >{`${auth.user?.email}`}</div>
                    </div>
                </div>                
            </div>
        </div>
    )
}