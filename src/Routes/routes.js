import MainLayout from "../Layout/MainLayout";
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home/Home";

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
    ],
  },
]);
