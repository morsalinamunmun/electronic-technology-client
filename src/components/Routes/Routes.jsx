import { createBrowserRouter } from "react-router-dom";
import MianLayoutes from "../Layoutes/MianLayoutes";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MianLayoutes></MianLayoutes>,
      //errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/details/:id',
        },
        {
          path: '/about',
        },
        {
          path: '/profile',
        },
        {
          path: '/gallery',
        },
        {
          path: '/login',
          element: <Signin></Signin>
        },
        {
          path:'/register',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);
 
export default router;  
