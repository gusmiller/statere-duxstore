/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: main.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

const router = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          error: <NoMatch />,
          children: [
               {
                    index: true,
                    element: <Home />
               }, {
                    path: '/login',
                    element: <Login />
               }, {
                    path: '/signup',
                    element: <Signup />
               }, {
                    path: '/success',
                    element: <Success />
               }, {
                    path: '/orderHistory',
                    element: <OrderHistory />
               }, {
                    path: '/products/:id',
                    element: <Detail />
               }
          ]
     }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
