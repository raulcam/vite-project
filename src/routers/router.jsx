import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home/components/Home";
import React from "react";
import { LoginPage } from "../auth/pages/LoginPage";
import { DashboardPage } from "../dashboard/page/DashboardPage";
import { Wrapper } from "../dashboard/Wrapper";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper/>,
      children: [
        {
          index: true,
          element: <DashboardPage/>,
        },
        {
          path: "/home",
          element: <Home />,
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
      v7_startTransition: true
    },
  }
);
