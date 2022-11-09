/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Review from '../components/Review/Review';
import Main from '../layout/Main';
import Blog from '../Page/Blog/Blog';
import HomePage from '../Page/HomePage/HomePage';
import Login from '../Page/Login/Login';
import ServiceDetails from '../Page/ServiceDetails/ServiceDetails';
import ServicePage from '../Page/ServicePage/ServicePage';
import Services from '../Page/Services/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: async () => {
          return fetch('http://localhost:5000/home');
        },
        element: <HomePage />,
      },
      {
        path: '/service',
        loader: async () => {
          return fetch('http://localhost:5000/services');
        },
        element: <ServicePage />,
      },
      {
        path: '/service/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
        element: <ServiceDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      // {
      //   path: '/reviews',
      //   loader: async () => {
      //     return fetch('http://localhost:5000/reviews');
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
