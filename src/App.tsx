import { useFetch } from "./useFetch"
import {InputArea} from "./components/InputArea"

/* type Repository = {
  full_name: string;
  description: string;
} */


function App() {
  
  //const { data: Repositories} = useFetch<Repository[]>("https://api.github.com/users/ddlmar/repos")


  return (
    <div className="flex flex-1 justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col w-[400px] h-[500px] items-center justify-center border rounded-lg shadow-2xl bg-white gap-4">
        <img src="" alt="" />
        <InputArea name={"E-mail"} type={"email"} description={"@gmail.com"}/>
        <InputArea name={"Password"} type={"password"} description={"*********"}/>

        {/* <div className="flex flex-col gap-3">
          <strong>E-mail</strong>
          <input type="email" className="w-80 p-2 bg-gray-100 rounded-sm" placeholder="@gmail.com"/>
        </div>
        <div className="flex flex-col gap-3">
          <strong>Password</strong>
          <input type="password" className="w-80 p-2 bg-gray-100 rounded-sm" placeholder="********"/>
        </div> */}
        <button className="px-[138px] py-2 bg-blue-900 border rounded-lg ">
          <span className="text-white">Sign In</span>
        </button>
      </div>
     {/*  <ul>
        {Repositories?.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default App
