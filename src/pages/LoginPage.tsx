import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import Icon from "../assets/Icon"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {
  
  const auth = useContext(AuthContext);
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    if(email && password){
      const isLogged = await auth.signin(email, password);
      if(isLogged){
        navigate('/login');
      }else {
        console.log('deu errado')
      }
    }
    
  }
  
  return(
    <div className="flex flex-1 justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col w-[400px] h-[500px] items-center justify-center border rounded-lg shadow-2xl bg-white gap-4" >
        <Icon/>
        <div className="flex flex-col gap-3">
          <label>E-mail</label>
          <input 
            type="email" 
            className="w-80 p-2 bg-gray-100 rounded-lg" 
            placeholder="@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Password</label>
          <input 
            type="password" 
            className="w-80 p-2 bg-gray-100 rounded-lg" 
            placeholder="********" value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="px-[138px] py-2 bg-blue-900 border rounded-lg " onClick={handleSubmit}>
          <span className="text-white">Sign In</span>
        </button>
      
      </div>
  </div>
  )
}

