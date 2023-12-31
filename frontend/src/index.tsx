import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Booking from './pages/booking/App';
import Register from './pages/Home/component/PageRegister/Register';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import Paymentdetail from './pages/paymentDetail/index';
import Paymenthistory from './pages/paymentHistory/index';
import Payment from './App';
import PaymentAdmin from './pages/paymentAdmin/App'
import Review from './pages/Reviews/Review';
import SucessReview from './pages/Reviews/SucessReview'; 
import ContactUs from './pages/ContactUs/App'
import Detail_package from './pages/Detail_package/Detail/App'
import AdminLogin from './pages/AdminLogin/App'
import AdminDashboard from './pages/AdminDashboard/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Detail_package/:packageId",
    element: <Detail_package />
  },
  {
    path: "/detail",
    element: <Paymentdetail />
  },
  {
    path: "/payment-history",
    element: <Paymenthistory />
  },
  {
    path: "/payment",
    element: <Payment />
  },  
  {
    path: "/payment-Admin",
    element: <PaymentAdmin />
  },   
  
  {
    path: "/Booking",
    element: <Booking />
  },
  {
    path: "/Register",
    element: <Register />
  },  
  {
    path: "/ContactUs",
    element: <ContactUs />
  },
  {
    path: "/Review",
    element:<Review/>
  },
  {
    path: "/SucessReview",
    element:<SucessReview/>
  },
  {
    path: "/Admin/Login",
    element:<AdminLogin/>
  },
  {
    path: "/Admin/Dashboard",
    element:<AdminDashboard/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
