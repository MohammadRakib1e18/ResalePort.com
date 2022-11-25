import MainLayout from "../Layout/MainLayout";
import NotFound from "../Others/NotFound";
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";

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
        element: <Categories></Categories>,
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
        element: <Registration></Registration>
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
