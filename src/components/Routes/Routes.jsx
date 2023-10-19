import { createBrowserRouter } from "react-router-dom";
import MianLayoutes from "../Layoutes/MianLayoutes";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import SignUp from "../pages/SignUp/SignUp";
import AddProducts from "../pages/AddProducts/AddProducts";
import BrandProducts from "../BrandProducts/BrandProducts";

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
          path: '/brands/:name',
          element: <BrandProducts></BrandProducts>,
          loader: ()=> fetch('http://localhost:5000/products')
        },
        {
          path: '/about',
        },
        {
          path: '/products',
          element: <AddProducts></AddProducts>
        },
        {
          path: '/',
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);
 
export default router;  
