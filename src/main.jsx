import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Roots from './components/Roots/Roots';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Orders from './components/Orders/Orders';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
