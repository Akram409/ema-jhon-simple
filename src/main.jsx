import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order'
import Review from './Component/Review/Review'
import Inventory from './Component/Inventory/Inventory'
import Login from './Component/Login/Login'
import cartProductsLoaders from './Component/loaders/cartProductsLoaders';
import Checkout from './Component/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductsLoaders
      },
      {
        path: '/orderReview',
        element: <Review></Review>,
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>,
      },
      // {
      //   path: '/ManageInventory',
      //   element: <Inventory></Inventory>,
      // },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
