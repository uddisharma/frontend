import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ForgotPasswordLink from '../ForgotPassoword'
import { Link, useParams } from "react-router-dom";

const ResetPass = () => {
  const { id, token } = useParams();


  console.log('User ID:',id );
  console.log('Token:', token);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { password, password_confirmation } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password_confirmation != password_confirmation ) {
        alert("password does not match");
 
    } else {
      setLoading(true);
      axios
        .patch(`http://localhost:5000/resetpassword/${id}/${token}`, data)
        .then((res) => {
          console.log(res);
          setLoading(false);
          if (res.data.status == '"success"') {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            window.location.href = "/";
          } else {
            // alert("Something went wrong");
            console.log("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // alert("Something went wrong");
         
        });
    }
  };
  return (
    <div>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {/* Same as */}
      <ToastContainer />
      <div class="text-center mt-24">
        <div class="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            class="w-12 h-12 text-blue-500"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 class="text-4xl tracking-tight">Reset Your Password</h2>
        <span class="text-sm">
          or{" "}
          <Link to="/register" class="text-blue-500">
            Register account
          </Link>
        </span>
      </div>
      <div class="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
              Confirm Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
           
            <div class="w-full md:w-full px-3 mb-6">
              {loading ? (
                <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                  loading...
                </button>
              ) : (
                <button
                  type="submit"
                  class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  Reset Password
                </button>
              )}
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
