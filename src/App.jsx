import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import TableDisplay from './Pages/TableDisplay'
import './App.css'
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate=useNavigate()
     useEffect(()=>{
        if(localStorage.getItem("isLogged")){
           navigate("/")
        }
        else{
          navigate("/login")

        }
     },[])
  
  

 
  return (
    <>
    <Routes>
      
      <Route path='/' element={<TableDisplay/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster />
    </>
  )
}

export default App