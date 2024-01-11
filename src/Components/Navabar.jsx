import React from 'react'
import { useNavigate } from "react-router-dom";

const Navabar = () => {
    const navigate=useNavigate()
    
    const handleLogout=()=>{
        localStorage.setItem("isLogged",false)
        navigate("/login")

    }
  return (
   <nav className='p-3 flex justify-end'>
    <ul className='w-fit'>
        <li className=' p-2 rounded-lg font-bold hover:bg-green-500 hover:text-white cursor-pointer ' onClick={handleLogout}><p>Log out</p></li>
    </ul>
   </nav>
  )
}

export default Navabar