/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../Page/HomePage/HomePage";
import Login from "../Page/Login/Login";
import ServicePage from "../Page/ServicePage/ServicePage";
import Services from "../Page/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("http://localhost:5000/home");
        },
        element: <HomePage />,
      },
      {
        path: "/service",
        loader: async () => {
          return fetch("http://localhost:5000/services");
        },
        element: <ServicePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      //   {
      //     path: '/services',
      //     element: <Services />,
      //   },
    ],
  },
]);
