import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home/components/Home";
import { Dashboard } from "../dashboard/page/Dashboard";
import { DashboardContent } from "../dashboard/components/DashboardContent";
import { LoginPage } from "../auth/pages/LoginPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <DashboardContent />,
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
      v7_skipActionErrorRevalidation: true,
    },
  }
);
