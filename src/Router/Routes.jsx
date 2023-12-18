import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Alluser from "../Pages/Dashboard/Alluser";
import Deatil from "../Pages/Dashboard/Deatil";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/alluser",
        element: <Alluser></Alluser>,
      },
      {
        path: "/dashboard/details/:id",
        loader: ({ params }) =>
          fetch(`task-server-sage.vercel.app/user/${params.id}`),
        element: <Deatil></Deatil>,
      },
    ],
  },
]);

export default routes;
