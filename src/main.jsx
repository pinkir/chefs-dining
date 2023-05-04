import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Register from './components/Register/Register.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element:<ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/blog',
        element: <Blogs></Blogs>
      },

      {
        path: '/chefs/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }

    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
