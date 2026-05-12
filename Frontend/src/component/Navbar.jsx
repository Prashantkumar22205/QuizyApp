import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { logincontext } from '../context/Context';

const Navbar = () => {
   const [email, setEmail,password, setPassword,islogin,setIslogin] = useContext(logincontext); 

  return (
    <div className='h-18 w-full bg-purple-500 p-10 flex  items-center  justify-between'  >
           <h1 className='text-4xl text-white font-sans font-bold  '>Quizy</h1>


           <div className='flex  gap-5   text-2xl font-medium text-white  '>
           <Link  className='hover:bg-purple-600  transition duration-300 ease-in-out h-10 w-20  flex items-center rounded justify-center' to="/">Home</Link>
           <Link  className='hover:bg-purple-600  transition duration-300 ease-in-out h-10 w-20  flex items-center rounded justify-center' to="/quizes">Quizes</Link>
           <Link  className='hover:bg-purple-600  transition  duration-300 ease-in-out h-10 w-20  flex items-center rounded justify-center' to="/result">Result</Link>
          { islogin ?
             <Link className='text-[17px] hover:bg-purple-600 active:scale-95  h-10 w-20 bg-purple-800 flex items-center rounded justify-center ' to="/login" onClick={()=>{
              setIslogin(false);
              setEmail("");
              setPassword("");
             }}>Logout</Link>
            :
           <Link className='text-[17px] hover:bg-purple-600 active:scale-95  h-10 w-20 bg-purple-800 flex items-center rounded justify-center ' to="/login">Login</Link>
          }
           </div>

    </div>
  )
}

export default Navbar
