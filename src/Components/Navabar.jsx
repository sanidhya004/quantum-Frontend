import React from 'react'
import { useNavigate } from "react-router-dom";

const Navabar = () => {
    const navigate=useNavigate()
    
    const handleLogout=()=>{
        localStorage.setItem("isLogged",false)
        navigate("/login")

    }
  return (
   <nav className='gradbg p-3'>
    <ul className='w-fit'>
        <li className='bg-white p-2 rounded-xl font-bold' onClick={handleLogout}><p>Log out</p></li>
    </ul>
   </nav>
  )
}

export default Navabar