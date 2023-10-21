import { createBrowserRouter } from "react-router-dom";
import MianLayoutes from "../Layoutes/MianLayoutes";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import SignUp from "../pages/SignUp/SignUp";
import AddProducts from "../pages/AddProducts/AddProducts";
import BrandProducts from "../BrandProducts/BrandProducts";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import ProductDetails from "../ProductDetails/ProductDetails";
import UpdateProducts from "../UpdateProducts/UpdateProducts";
import MyCard from "../pages/MyCard/MyCard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MianLayoutes></MianLayoutes>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
        },
        {
          path: '/brands/:name',
          element: <BrandProducts></BrandProducts>,
          loader: ()=> fetch(`https://electronics-technology-server.vercel.app/products/${name}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
          loader: ()=> fetch('https://electronics-technology-server.vercel.app/products')
        },
        {
          path: '/updateProducts/:id',
          element: <UpdateProducts></UpdateProducts>,
          loader: ({params})=> fetch(`https://electronics-technology-server.vercel.app/product/${params.id}`)
          
        },
        {
          path: '/myCard',
          element: <PrivateRoutes><MyCard></MyCard></PrivateRoutes>,
          loader: ()=> fetch('https://electronics-technology-server.vercel.app/myCart')
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
