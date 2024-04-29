import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


const SingleUser = ({}) => {

    const [getDatas, setGetDatas] = useState({})

    const token = localStorage.getItem("token")

   

    useEffect(() => {
        return async() => {
            const customerDatas =await axios({
                method: "GET",
                url: 'https://dummyjson.com/auth/me',
                headers: {
                    // "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}`}
            })
            // console.log(customerDatas.data)
            setGetDatas(customerDatas.data)
        }
    },[])

    const [modal, setModal] = useState(false)

    let handleModal = ()=> {
      setModal(!modal);
    }

   
  
  return (
    <>
       <div className="flex justify-center gap-10">
            <Link to="/" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Home</Link>
            <Link to="/login" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Login</Link>
            <Link to="/users" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Customers Detaails</Link>
        </div>
      <div className='flex justify-center item-center p-[9rem]'>
        <img className='h-[15rem] ' src={getDatas.image} alt="image" />
        <div className='flex flex-col text-center gap-4 '>
          <p><span className="font-bold ">First Name:</span> {getDatas.firstName} </p>
          <p><span className="font-bold ">Last Name:</span>  {getDatas.lastName} </p>
          <p><span className="font-bold ">Maiden Name:</span>  {getDatas.maidenName} </p>
          <p><span className="font-bold ">Age</span>  {getDatas.age} </p>
          <p><span className="font-bold ">Gender:</span>  {getDatas.gender} </p>
          <p><span className="font-bold ">Email:</span>  {getDatas.email} </p>
          <button onClick={handleModal} type='button' className="">View more</button>
        </div>
        {
        modal && (
          <div className='fixed top-[8rem] left-[30rem] bg-gray-700 flex '>
            <img className='h-[15rem] ' src={getDatas.image} alt="image" />
            <div className='flex flex-col text-center gap-4 '>
              {/* <p><span className="font-bold ">First Name Last Name Maiden Name </span>  </p> */}
              <p><span className="font-bold ">{getDatas.firstName}  {getDatas.lastName}  {getDatas.maidenName} </span></p>
              {/* <p><span className="font-bold "></span>   </p> */}
              <p><span className="font-bold ">Age</span>  {getDatas.age} </p>
              <p><span className="font-bold ">Gender:</span>  {getDatas.gender} </p>
              <p><span className="font-bold ">Phone Number:</span>  {getDatas.Phone} </p>
              <p><span className="font-bold ">Date of Birth:</span>  {getDatas.birthDate} </p>
              <p><span className="font-bold ">Username:</span>  {getDatas.username} </p>
              <p><span className="font-bold ">Email:</span>  {getDatas.email} </p>
              <p><span className="font-bold ">Weight:</span>  {getDatas.weight} </p>
              <p><span className="font-bold ">EyeColor:</span>  {getDatas.eyeColor} </p>
              <p><span className="font-bold ">Hair:</span>  {getDatas.hair.color} </p>
              {/* <p><span className="font-bold ">Hair:</span>  {getDatas.hair.type} </p> */}
              {/* <p><span className="font-bold ">Address:</span>  {getDatas.address.address} </p>
              <p><span className="font-bold ">Address:</span>  {getDatas.address.city} </p> */}
              <button onClick={handleModal} type='button' className="w-[10rem] h-[3rem] rounded-xl bg-blue-700 ">Close</button>
            </div>
          </div>
        )
      }
      </div>
     
    </>
  )
}

export default SingleUser