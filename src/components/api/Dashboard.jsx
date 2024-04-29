import { useEffect, useState } from "react"
import axios from "axios"
import SingleUser from "../shared/SingleUser"
// import { Link } from "react-router-dom"




const Dashboard = () => {
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
            console.log(customerDatas.data)
            setGetDatas(customerDatas.data)
        }
    },[])


  return (
    <>
        <SingleUser {...getDatas}/>  
    </>
  )
}

export default Dashboard