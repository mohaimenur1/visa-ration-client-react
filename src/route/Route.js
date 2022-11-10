/** @format */

import { createBrowserRouter } from "react-router-dom";
import Review from "../components/Review/Review";
import Main from "../layout/Main";
import AddReview from "../Page/AddReview/AddReview";
import Blog from "../Page/Blog/Blog";
import HomePage from "../Page/HomePage/HomePage";
import Login from "../Page/Login/Login";
import EditReview from "../Page/MyReview/EditReview/EditReview";
import MyReview from "../Page/MyReview/MyReview";
import Register from "../Page/Register/Register";
import ServiceDetails from "../Page/ServiceDetails/ServiceDetails";
import ServicePage from "../Page/ServicePage/ServicePage";
import Services from "../Page/Services/Services";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(
            "https://b6a11-service-review-server-side-mohaimenur1.vercel.app/home"
          );
        },
        element: <HomePage />,
      },
      {
        path: "/service",
        loader: async () => {
          return fetch(
            "https://b6a11-service-review-server-side-mohaimenur1.vercel.app/services"
          );
        },
        element: <ServicePage />,
      },
      {
        path: "/service/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://b6a11-service-review-server-side-mohaimenur1.vercel.app/services/${params.id}`
          );
        },
        element: <ServiceDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myreviews",
        element: (
          <PrivetRoute>
            <MyReview />
          </PrivetRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivetRoute>
            <AddReview />
          </PrivetRoute>
        ),
      },
      {
        path: "/editreview/:id",
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-mohaimenur1.vercel.app/review/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <EditReview />
          </PrivetRoute>
        ),
      },
      // {
      //   path: '/reviews',
      //   loader: async () => {
      //     return fetch('https://b6a11-service-review-server-side-mohaimenur1.vercel.app/reviews');
      //   },
      //   element: <Review />,
      // },
      //   {
      //     path: '/services',
      //     element: <Services />,
      //   },
    ],
  },
]);
