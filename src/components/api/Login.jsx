import React, { useState } from 'react'
import Input from '../shared/Input'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const moveTo = useNavigate()
    const [loginDetails, setLoginDetails] = useState({username: "", password: ""})


    const handleLogin = (e) => {
       
        setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
    }
    const SubmitDetails = async(e) => {
        e.preventDefault()
            const postLogin = await axios({
                method: "POST",
                url: "https://dummyjson.com/auth/login",
                data: loginDetails,
                headers: {"content-Type":"application/json"}
            })
            // console.log( postLogin.data.token)
            localStorage.setItem("token", postLogin.data.token)
            moveTo("/dashboard")
    }
  return (
    <div className='bg-blue-400 '>
        <div className="flex justify-center gap-10">
            <Link to="/" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Home</Link>
            <Link to="/users" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Customers Details</Link>
        </div>
        <form onSubmit={SubmitDetails} className='bg-blue-400 flex justify-center items-center w-full h-screen' action="">
            <div className='rounded-xl p-[1.5rem] bg-white drop-shadow-xl items-center my-[2rem] '>
                    <Input onChange={handleLogin} name='username'  value={loginDetails.username} placeholder='username' label="Username"/><br />
                    <Input onChange={handleLogin} name='password'  value={loginDetails.password} placeholder='password' label="Password"/><br />
                    <div className='flex justify-center'>
                        <button className='bg-blue-600 w-[10rem] rounded-[1rem] py-[0.5rem] text-white px-[1rem] '>Login</button>
                    </div>
            </div>
        </form>
    </div>
  )
}

export default Login