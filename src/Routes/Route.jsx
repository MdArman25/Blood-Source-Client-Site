import { createBrowserRouter } from "react-router-dom";
import MainLyout from "../Layout/MainLyout";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SIgnUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout></MainLyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
