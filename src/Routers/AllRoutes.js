import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/login'
import Expenses from '../Pages/Expenses'
import Home from '../Pages/Home'
import Premium from '../Pages/Premium'
import ResetPass from '../Pages/ResetPassword'
import ForgotPassword from '../ForgotPassoword'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/register" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/premium" element={<Premium/>} />
            <Route path="/resetpassword" element={<ForgotPassword/>} />
            <Route path="/resetpassword/:id/:token" element={<ResetPass/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes