import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LoginPage} from './pages/LoginPage'
import {HomePage} from './pages/HomePage'
import { RequireAuth } from "./context/RequireAuth"


function App() {
 
  
  return (
    <div> 
        <Routes>    
            <Route path="/login" element={<HomePage/>}/>
            <Route path="/" element={<RequireAuth><LoginPage/></RequireAuth>}/>     
        </Routes>
    </div>
  )
}

export default App
