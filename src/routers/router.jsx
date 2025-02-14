import { createBrowserRouter } from "react-router-dom";
import  Home  from "../pages/home/home";
import React from "react";
import LoginPage from "../pages/Login/LoginPage";
import  ListUsers  from "../pages/list/ListUsers";
import { Wrapper } from "../pages/wrapper/Wrapper";
import ProtectedRoute from "../helpers/Protectedroute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/listUsers",
          element: <ProtectedRoute element={<ListUsers />} requiredRoles={['superadmin','admin']}/>,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
