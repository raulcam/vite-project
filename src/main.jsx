import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
