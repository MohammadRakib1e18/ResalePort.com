import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../Others/NotFound";
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import Products from "../Pages/Products/Products";
import AddProduct from "../Pages/Products/AddProduct";
import MyProducts from "../Pages/Products/MyProducts";
import Sellers from "../Pages/Dashboard/Admin/Sellers";
import Buyers from "../Pages/Dashboard/Admin/Buyers";


const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/category/:id",
        element: <Products></Products>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/blogs",
        element: <BlogsContainer></BlogsContainer>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/dashboard/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/dashboard/myProducts',
        element:<MyProducts></MyProducts>
      },
      {
        path:'/dashboard/sellers',
        element:<Sellers></Sellers>
      },
      {
        path:'/dashboard/buyers',
        element:<Buyers></Buyers>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
