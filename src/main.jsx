import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
