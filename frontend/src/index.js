import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Register } from "./views/registerPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Login } from "./views/loginPage";
import { Home } from "./views/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "home",
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
