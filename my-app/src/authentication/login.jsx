import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import girlyy from "/src/assets/girl chatting.gif";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop view only  */}
      <div className="hidden lg:flex lg:w-1/2 bg-red-50 flex-col items-center justify-center p-12">
        {/* curve effect */}
        <svg
          className="absolute top-0 right-0 h-full w-44"
          viewBox="0 0 50 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C50,200 50,600 0,800 L100,800 L100,0 Z"
            fill="#fef2f2"
          />
        </svg>
        {/* zigzag effect */}
        <svg
          className="absolute top-0 right-0 h-full w-24"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L10 10 L0 20 L10 30 L0 40 L10 50 L0 60 L10 70 L0 80 L10 90 L0 100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>
        <img
          src="/src/assets/way-black.png"
          alt="wAY-logo-black"
          className="w-48 mb-12 md:w-50 opacity-100"
        />
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-medium text-gray-700 mb-6">
            It's great to see you here
          </h2>
          <p className="text-gray-600 ">
            Access your account to continue your experience with us!
          </p>
          <img src={girlyy} alt="girl with her friends" className="w-125 h-125" />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex flex-col h-screen">
        {/* Mobile back button */}
        <div className="flex justify-between px-2 md:px-4 text-3xl h-6 pt-6 lg:hidden">
          <Link to="/signUp" className="">
            <IoIosArrowBack />
          </Link>
        </div>

        {/* mobile header view*/}
        <div className="px-4 py-6 flex items-center lg:hidden">
          <div className="flex items-center justify-center mx-auto">
            <img
              src="/src/assets/way-black.png"
              alt="wAY-logo-black"
              className="logo md:w-36 lg:50 w-24 opacity-100"
            />
          </div>
        </div>

        {/* Sign up form container */}
        <div className="flex-1 px-6 lg:px-16 xl:px-24 py-4 bg-[#BA5F5F0F] lg:bg-transparent rounded-t-3xl lg:rounded-none flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl lg:text-3xl font-medium mb-6 lg:mb-8">
              Login
            </h1>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Strong Password"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <Link to="/resetPassword" className="text-sm text-red-500 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 px-6 rounded-full font-medium mb-6 hover:scale-110 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </form>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-sm text-gray-500">
                - OR Continue with -
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <div className="flex gap-4 items-center">
                <div className="flex items-center justify-center rounded-full border border-red-700 p-1 w-12 h-12 hover:bg-red-50 transition-colors cursor-pointer">
                  <img
                    src="/src/assets/logo google.png"
                    alt="Google"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex items-center justify-center rounded-full border border-[#00a991] p-1 w-12 h-12 hover:bg-blue-50 transition-colors cursor-pointer">
                  <img
                    src="/src/assets/logo apple.png"
                    alt="Apple"
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex items-center justify-center rounded-full border border-[#0071bc] p-1 w-12 h-12 hover:bg-blue-50 transition-colors cursor-pointer">
                  <img
                    src="/src/assets/logo facebook.png"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mb-6">
              <span className="text-gray-500 pr-1">Don't have an account?</span>
              <Link
                to="/SignUp"
                className="text-red-500 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
