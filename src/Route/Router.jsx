import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BrandsPage from "../pages/BrandsPage";
import UpdatePage from "../pages/UpdatePage";
import DetailPage from "../pages/DetailPage";


const MyCreatedRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/brands.json')
        },
        {
          path: '/addproduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:'/mycart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: ()=> fetch('https://test1-ecd0k8iy2-technos-projects.vercel.app/mycart')

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/brands/:brands',
          element: <BrandsPage></BrandsPage>,
          loader: ({params})=>fetch(`https://test1-ecd0k8iy2-technos-projects.vercel.app/brand/${params.brands}`)
        },
        {
          path: '/updateProduct/:id',
          element: <UpdatePage></UpdatePage>,
          loader: ({params})=>fetch(`https://test1-ecd0k8iy2-technos-projects.vercel.app/updateproducts/${params.id}`)
        },
        {
          path: '/detailsroute/:id',
          element: <PrivateRoute><DetailPage></DetailPage></PrivateRoute>,
          loader: ({params})=>fetch(`https://test1-ecd0k8iy2-technos-projects.vercel.app/updateproducts/${params.id}`)
        }
      ]
    },
  ]);

export default MyCreatedRouter;