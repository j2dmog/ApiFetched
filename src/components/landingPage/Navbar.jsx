import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import PhoneAssessories from '../api/PhoneAssessories'
import Login from '../api/Login'
import SignUp from '../api/SignUp'

const Navbar = () => {
  return (
    <div className='flex justify-around gap-10'>
        <Link to="/" >Home</Link>
        <Link to="/phoneAssessories" >Phone Stores</Link>
        <Link to="/users" > Customers Details</Link>
        <Link to="/login" >Login</Link>
        <Link to="/signup">SignUp</Link>
        {/* <p>Home</p>
        <p>PhoneAssessories</p>
        <p>Login</p>
        <p>SignUp</p> */}
    </div>
  )
}

export default Navbar