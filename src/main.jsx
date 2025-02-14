import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./components/templates/ErrorBoundary/Errorboundary.jsx";
import Theme from "../src/theme/Theme.jsx";
import App from "./App.jsx";
import GlobalStyle from "./theme/GlobasStyles.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// <ErrorBoundary>
//   <Theme>
//     <GlobalStyle />
//     <App />
//   </Theme>
// </ErrorBoundary>
