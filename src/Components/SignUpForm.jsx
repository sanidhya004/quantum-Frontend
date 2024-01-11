import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, DatePicker } from "antd";
import { FaUser, FaLock, FaPenFancy,FaAt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [passwordVisible2, setPasswordVisible2] = React.useState(false);
  const navigate=useNavigate()
  const onChange = (date, dateString) => {
    console.log(dateString);
    setDob(dateString);
  };
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [dummypass, setdummypass] = useState("");
  const [dob, setDob] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if(dummypass!=pass){
       toast.error("Password Do not match")
    }
    
 
else{
  try {
    const { data } = await axios.post(
      `https://quantum-backend-0tf5.onrender.com/userinfo/signIn`,
      {
        email: email,
        password: pass,
        name: name,
        dob: dob,
      },
      {
        headers: {
          contentType: "text/plain",
        },
        credentials: "include",
        withCredentials: true,
      }
    );
    toast.success(data.message);
    console.log(data);
    localStorage.setItem("isLogged", true);
    navigate("/")
  } catch (error) {
    toast.error(error.response.data.message);
    localStorage.setItem("isLogged", false);
  }

}
    
  };

  return (
    <div className="bg-[#1D2D4E] rounded-xl  flex flex-col justify-between items-center relative">
      <div className="bg-[#01F4E1]  text-center py-3 text-gray-500 w-[50%] translate-y-[-12px] absolute top-0">
        Sign Up
      </div>

      <div className="h-[100px] w-full wavebg text-[#98A4BF] flex items-end justify-center ">
        <div className="text-7xl translate-y-[20px]">
          <FaPenFancy />
        </div>
      </div>
      <form className="  px-12 py-4">
        <div className="flex flex-col gap-4 py-4">
          <Input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            size="large"
            placeholder="email"
            prefix={<FaAt />}
            style={{ background: "#4C5975", color: "#98A4BF", border: "none" }}
          />
          <div className="w-full flex gap-2">
            <div>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                size="large"
                placeholder="name"
                prefix={<UserOutlined />}
                style={{
                  background: "#4C5975",
                  color: "#98A4BF",
                  border: "none",
                }}
              />
            </div>

            <div>
              <DatePicker
                placeholder="Date of birth"
                onChange={onChange}
                size="large"
                style={{
                  background: "#4C5975",
                  color: "#98A4BF",
                  border: "none",
                }}
              />
            </div>
          </div>

          <Input.Password
            placeholder="input password"
            prefix={<FaLock />}
            size="large"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            style={{ background: "#4C5975", color: "#98A4BF", border: "none" }}
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
          <Input.Password
            placeholder="Confirm password"
            prefix={<FaLock />}
            visibilityToggle={{
              visible: passwordVisible2,
              onVisibleChange: setPasswordVisible2,
            }}
            size="large"
            onChange={(e) => {
              setdummypass(e.target.value);
            }}
            style={{ background: "#4C5975", color: "#98A4BF", border: "none" }}
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-end">
          <button
            className="bg-[#01F4E1] w-full rounded-lg py-3 text-gray-500"
            onClick={submitHandler}
          >
            Sign In
          </button>
          <Link to="/login">
            {" "}
            <p className="cursor-pointer text-[11px] text-[#01F4E1]">
              Existing user?
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
