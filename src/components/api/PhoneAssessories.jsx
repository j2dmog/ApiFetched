import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../shared/Cards"
import { Link } from "react-router-dom"



const PhoneAssessories = () => {
  const [detaileds, setDetaileds] = useState([])

  useEffect(() => {
    return async () => {
      const details = await axios("https://dummyjson.com/products")

      setDetaileds(details.data.products)
      // console.log("details:", details.data.products)
    }
  }, [])

  return (
    <div className=" bg-blue-400 ">
        <Link to="/" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Home</Link>
        <div className="grid grid-cols-3 gap-5 p-[5rem]">
              {detaileds.map((detailed) => ( <Card  key={detailed.id}
                  {...detailed} to={`/SingleCard/${detailed.id}`} />
              ))}
        </div>
    </div>
  )
}

export default PhoneAssessories
