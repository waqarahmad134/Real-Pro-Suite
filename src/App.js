// @ts-nocheck
import { ChakraProvider } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import ForgetPassword from './components/pages/auth/ForgetPassword'
import Login from './components/pages/auth/Login'
import NewPassword from './components/pages/auth/NewPassword'
import OtpPage from './components/pages/auth/OtpPage'
import Signup from './components/pages/auth/Signup'
import Home from './components/pages/home/Home'
import ArrivedOrders from './components/pages/orders/incoming/ArrivedOrders'
import CancelledOrders from './components/pages/orders/incoming/CancelledOrders'
import DelayedOrders from './components/pages/orders/incoming/DelayedOrders'
import IncomingOrders from './components/pages/orders/incoming/IncomingOrders'
import IncompleteOrders from './components/pages/orders/incomplete/IncompleteOrders'
import IncompleteOrdersDetails from './components/pages/orders/incomplete/IncompleteOrdersDetails'
import InProcessOrders from './components/pages/orders/inProcess/InProcessOrders'
import PendingPayment from './components/pages/orders/inProcess/PendingPayment'
import ReadyToShip from './components/pages/orders/inProcess/ReadyToShip'
import ArrivedAtLocalHub from './components/pages/orders/outgoing/ArrivedAtLocalHub'
import Delivered from './components/pages/orders/outgoing/Delivered'
import OutgoingOrders from './components/pages/orders/outgoing/OutgoingOrders'
import TransactionHistory from './components/pages/payments/TransactionHistory'
import Wallet from './components/pages/payments/Wallet'
import UserDetails from './components/pages/users/UserDetails'
import Users from './components/pages/users/Users'
import ProtectedRoutes from './Utils/ProtectedRoutes';
import OtpData from './components/pages/users/OtpData'
import PriceManagment from './components/pages/priceManagment/PriceManagment'
import AddPrice from './components/pages/priceManagment/AddPrice'
import AddEmployee from './components/pages/employee/AddEmployee'
import AllEmployee from './components/pages/employee/AllEmployee'
import AllRole from './components/pages/roles/AllRole'
import Permissions from './components/pages/permission/Permissions'
import ArrivedOrderDetails from './components/pages/orders/incoming/ArrivedOrderDetails'
import PrivacyPolicy from './components/pages/setting/PrivacyPolicy'
import Company from './components/pages/company/company'
import AllReviews from './components/pages/comment/AllReviews'
import MeasuredOrder from './components/pages/orders/incoming/MeasureOrder'
import Review from './components/pages/orders/incoming/Review'
import FilterWallet from './components/pages/payments/FilterWallet'
import IncompleteOrderDetails from './components/pages/orders/incomplete/IncompleteOrdersDetails'
import Message from './components/pages/comment/Message'
import WarehouseAddress from './components/pages/WarehouseAddress/WarehouseAddress'
import IncommingOrderDetails from './components/pages/orders/incoming/IncommingOrderDetail'
import DelayedOrderDetails from './components/pages/orders/incoming/DelayedOrderDetails'
import CancelledOrderDetails from './components/pages/orders/incoming/CancelledOrderDetails'
import InTransitOrderDetails from './components/pages/orders/outgoing/InTransitOrderDetails'
import ArrivedAtLocalHubOrderDetails from './components/pages/orders/outgoing/ArrivedAtLocalHubOrderDetails'
import DeliveredOrderDetails from './components/pages/orders/outgoing/DeliveredOrderDetails'
import SocialLinks from './components/pages/social links/SocialLinks'
import Profile from './components/pages/auth/UpdateProfile'
import CompletedOrders from './components/pages/orders/completed/CompletedOrders'
import CompanyRates from './components/pages/company/CompanyRates'
import AllApps from './components/pages/apps/AllApps'

export default function App() {
  
  return (
    <>
      <section className='font-fiexen'>
        <ToastContainer />
        <ChakraProvider>
          <Router>
            <Routes>
              {/* AUTH */}
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/forget_password' element={<ForgetPassword />} />
              <Route exact path='/verify_otp' element={<OtpPage />} />
              <Route exact path='/new_password' element={<NewPassword />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/apps' element={<AllApps/>} />
              <Route exact path='/profile' element={<Profile/>} />
              <Route path='/*' element={<>No page Found <Link className='px-3 py-1 bg-themeBlue text-white' to="/">Back to Home </Link></>} />
              

              {/* HOME */}
              {/* <Route exact path='/' element={<ProtectedRoutes Component = {Home} />} /> */}
            </Routes>
          </Router>

        </ChakraProvider>
      </section>
    </>
  )
}
