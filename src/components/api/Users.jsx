import axios from "axios"
import { useEffect, useState } from "react"
import Card2 from "../shared/Cards2"
import { Link } from "react-router-dom"



const Users = () => {
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        return async () => {
            const getDetails = await axios('https://dummyjson.com/users')
            // console.log(getDetails.data.users)
            setUserDetails(getDetails.data.users)
        }
    }, [])


  return (
    <div className=" bg-blue-400">
        <div className="flex justify-center gap-10">
            <Link to="/" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Home</Link>
            <Link to="/login" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Login</Link>
        </div>
        <div className="grid grid-cols-3 gap-5 p-[5rem]">
            {
                userDetails.map((userDetail) => (
                <Card2 key={userDetail.id} 
                    // {...userDetail} to={'/SingleUser/:d'}/>
                    {...userDetail} to={`/SingleUser/${userDetail.id}`}/>
                    ))
            }
        </div>
    </div>
  )
}

export default Users