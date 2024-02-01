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
import { requestFirebaseNotificationPermission } from './firebaseInit';
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
import Dummy from './components/pages/dummy'
import AllReviews from './components/pages/comment/AllReviews'
import MeasuredOrder from './components/pages/orders/incoming/MeasureOrder'
import Review from './components/pages/orders/incoming/Review'
import FilterWallet from './components/pages/payments/FilterWallet'

import { success_toaster } from './components/toaster/Toaster'
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
              <Route exact path='/users' element={<ProtectedRoutes Component = {Users} />} />
              <Route exact path='/all_otps' element={<ProtectedRoutes Component = {OtpData} />} />
              <Route exact path='/users/user_details' element={<ProtectedRoutes Component = {UserDetails} />} />
              <Route exact path='/incomplete_orders' element={<ProtectedRoutes Component = {IncompleteOrders} />} />
              <Route exact path='/arrived_orders' element={<ProtectedRoutes Component = {ArrivedOrders} />} />
              <Route exact path='/arrived_orders/details' element={<ProtectedRoutes Component = {ArrivedOrderDetails} />} />
              <Route exact path='/delayed_orders' element={<ProtectedRoutes Component = {DelayedOrders} />} />
              <Route exact path='/delayed_order_details' element={<ProtectedRoutes Component = {DelayedOrderDetails} />} />
              <Route exact path='/cancelled_orders' element={<ProtectedRoutes Component = {CancelledOrders} />} />
              <Route exact path='/cancelled_order_details' element={<ProtectedRoutes Component = {CancelledOrderDetails} />} />
              <Route exact path='/incomplete_orders_details' element={<ProtectedRoutes Component = {IncompleteOrderDetails} />} />
              <Route exact path='/inprocess_orders' element={<ProtectedRoutes Component = {InProcessOrders} />} />
              <Route exact path='/pending_payment' element={<ProtectedRoutes Component = {PendingPayment} />} />
              <Route exact path='/ready_to_ship' element={<ProtectedRoutes Component = {ReadyToShip} />} />
              <Route exact path='/incoming_orders' element={<ProtectedRoutes Component = {IncomingOrders} />} />
              <Route exact path='/incoming_order_details' element={<ProtectedRoutes Component = {IncommingOrderDetails} />} />
              <Route exact path='/outgoing_orders' element={<ProtectedRoutes Component = {OutgoingOrders} />} />
              <Route exact path='/completed_orders' element={<ProtectedRoutes Component = {CompletedOrders} />} />
              <Route exact path='/intransit_order_details' element={<ProtectedRoutes Component = {InTransitOrderDetails} />} />
              <Route exact path='/arrived_at_local_hub' element={<ProtectedRoutes Component = {ArrivedAtLocalHub} />} />
              <Route exact path='/arrived_at_local_hub_order_details' element={<ProtectedRoutes Component = {ArrivedAtLocalHubOrderDetails} />} />
              <Route exact path='/delivered' element={<ProtectedRoutes Component = {Delivered} />} />
              <Route exact path='/delivered_order_details' element={<ProtectedRoutes Component = {DeliveredOrderDetails} />} />
              <Route exact path='/transaction_history' element={<ProtectedRoutes Component = {TransactionHistory} />} />
              <Route exact path='/my_wallet' element={<ProtectedRoutes Component = {Wallet} />} />
              <Route exact path='/unit_management' element={<ProtectedRoutes Component = {PriceManagment} />} />
              <Route exact path='/add_prices' element={<ProtectedRoutes Component = {AddPrice} />} />
              <Route exact path='/measured' element={<ProtectedRoutes Component = {MeasuredOrder} />} />
              <Route exact path='/add_employee' element={<ProtectedRoutes Component = {AddEmployee} />} />
              <Route exact path='/all_employees' element={<ProtectedRoutes Component = {AllEmployee} />} />
              <Route exact path='/all_roles' element={<ProtectedRoutes Component = {AllRole} />} />
              <Route exact path='/permissions' element={<ProtectedRoutes Component = {Permissions} />} />
              <Route exact path='/privacy_policy' element={<ProtectedRoutes Component = {PrivacyPolicy} />} />
              <Route exact path='/companies' element={<ProtectedRoutes Component = {Company} />} />
              <Route exact path='/company_rates' element={<ProtectedRoutes Component = {CompanyRates} />} />
              <Route exact path='/all_reviews' element={<ProtectedRoutes Component = {AllReviews} />} />
              <Route exact path='/reviews' element={<ProtectedRoutes Component = {Review} />} />
              <Route exact path='/filter_wallet' element={<ProtectedRoutes Component = {FilterWallet} />} />
              <Route exact path='/messages' element={<ProtectedRoutes Component = {Message} />} />
              <Route exact path='/social_links' element={<ProtectedRoutes Component = {SocialLinks} />} />
              <Route exact path='/warehouse_address' element={<ProtectedRoutes Component = {WarehouseAddress} />} />
              {/* <Route exact path='/update_price_managment' element={<ProtectedRoutes Component = {UpdatePriceManagment} />} /> */}
            </Routes>
          </Router>

        </ChakraProvider>
      </section>
    </>
  )
}
