import { Link } from "react-router-dom"



const Button = ({to}) => {
  return (
    <div>
        <Link to={to} className="flex justify-center gap-[1rem] py-9">
          <button className="h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100">Uddate this items</button>
          <button className="h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100">Delete this item</button>
        </Link>
    </div>
  )
}

export default Button