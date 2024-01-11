import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { FaUser,FaLock} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitHandler = async (e) => {
      e.preventDefault();
      if(email==""){
         toast.error("Enter Username")
      }
      if(password==""){
        toast.error("Enter Password")
     }
      
   
  else{
    try {
      const { data } = await axios.post(
        `http://localhost:5000/userinfo/login`,
        {
          email: email,
          password: password,
         
        },
        {
          headers: {
            contentType: "text/plain",
          },
          credentials:"include",
          withCredentials: true,
        }
      );
      toast.success(data.message);
      localStorage.setItem("isLogged", true);
      navigate("/");
      
    } catch (error) {
      toast.error(error.response.data.message);
      localStorage.setItem("isLogged", false);
    }
  
  }
     
  if (!localStorage.getItem('isLogged')) 
  return <Navigate to={"/"} />; 
    };
  return (
    <div className='bg-[#1D2D4E] rounded-xl  flex flex-col justify-between items-center relative'>
         
            <div className='bg-[#01F4E1]  text-center py-3 text-gray-500 w-[50%] translate-y-[-12px] absolute top-0'>Login</div>
     

        <div className='h-[100px] w-full wavebg  text-[#98A4BF] flex items-end justify-center '>
           <div className='text-7xl translate-y-[20px]'>
           <FaUser />
           </div>
          
        </div>
        <form className='  px-12 py-4'>
            <div className='flex flex-col gap-4 py-4'>
        <Input onChange={(e)=>{setemail(e.target.value)}}size="large" placeholder="username" prefix={<UserOutlined />} style={{background:"#4C5975",color:"#98A4BF",border:"none"}}/>
        
        <div>
        <Input.Password
          placeholder="input password"
          prefix={<FaLock />}
          size="large"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          onChange={(e)=>{setpassword(e.target.value)}}
          style={{background:"#4C5975",color:"#98A4BF",border:"none"}}
        />
        <div className='flex justify-between text-[9px] text-[#01F4E1] '>
            <p className='cursor-pointer'>Remember me</p>
            <p className='cursor-pointer' >Forgot Passowrd?</p>

        </div>
        </div>
        </div>
        
        <div className='flex flex-col w-full justify-center gap-2 items-end'>
            <button className='bg-[#01F4E1] w-full rounded-lg py-3 text-gray-500' onClick={submitHandler}>Login</button>
            <Link to="/signup">   <p className='cursor-pointer text-[9px] text-[#01F4E1]'>New User?</p></Link>
        </div>
      
    
        </form>
        

    </div>
  )
}

export default LoginForm