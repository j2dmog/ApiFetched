import { Link } from "react-router-dom"

const Card2 = ({ firstName, lastName,maidenName,age,gender,email,phone,username,to }) => {
  return (
    <div className="bg-white items-center drop-shadow-xl rounded-[0.5rem] text-center p-[1rem]">
      <Link to={to} ><h1 className="font-bold">{firstName} {lastName} {maidenName}</h1></Link>
      <p></p>
    </div>
  )
}

export default Card2
