import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import Post from "./components/api/Post"
import SingleCard from "./components/shared/SingleCards"
// import PostDelete from "./components/api/PostDelete"
import PhoneAssessories from "./components/api/PhoneAssessories"
import Home from "./components/landingPage/Home"
import Users from "./components/api/Users"
import Login from "./components/api/Login"
import SignUp from "./components/api/SignUp"
import Dashboard from "./components/api/Dashboard"
import SingleUser from "./components/shared/SingleUser"





const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/SingleCard/:id",
    element: <SingleCard/>
  },
  {
    path: "/phoneAssessories",
    element: <PhoneAssessories/>
  },
  {
    path: "/users",
    element: <Users/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/SingleUser/:id",
    element: <SingleUser/>
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App