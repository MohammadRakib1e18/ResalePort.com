import MainLayout from "../Layout/MainLayout";
import NotFound from "../Others/NotFound";
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import Products from "../Pages/Products/Products";

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
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
