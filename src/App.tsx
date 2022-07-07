import { Route, Routes } from "react-router-dom"
import {LoginPage} from './pages/LoginPage'
import {HomePage} from './pages/HomePage'
import { RequireAuth } from "./context/RequireAuth"



function App() {
 
  
  return (
    <div> 
        <Routes> 
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<RequireAuth><HomePage/></RequireAuth>}/>     
        </Routes>
    </div>
  )
}

export default App
