import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import girlyy from "/src/assets/girl chatting.gif";
import emailImage from "../assets/sending email.svg";

const ResetPassword = () => {
  return (
    <div className="flex  bg-white">
      {/* Desktop view only  */}
      <div className="hidden lg:flex lg:w-1/2 bg-red-50 flex-col items-center py-7 ">
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
          className="w-48 mb-8 md:w-50 opacity-100"
        />
        <h2 className="text-3xl font-medium text-gray-700 mb-6">
          It's great to see you here
        </h2>
        <p className="text-gray-600 ">
          It seem as if you forgot ypur password!🤔
        </p>

        <img src={girlyy} alt="girl with her friends" className="" />
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex flex-col  h-screen py-7">
        {/* Mobile back button */}
        <div className="px-2 md:px-4 text-3xl h-6 pt-6 lg:hidden">
          <Link to="/login" className="">
            <IoIosArrowBack />
          </Link>
        </div>

        {/* mobile header view*/}
        <div className="px-4 py-6 flex items-center lg:hidden justify-center">
          <div className="flex items-center justify-center mx-auto">
            <img
              src="/src/assets/way-black.png"
              alt="wAY-logo-black"
              className="logo md:w-36 lg:50 w-24 opacity-100"
            />
          </div>
        </div>

        {/* Sign up form container */}
        <div className="flex-1 px-6 lg:px-16 xl:px-24 py-4  lg:bg-transparent rounded-t-3xl sm:rounded-t-4xl lg:rounded-none ">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl lg:text-3xl font-medium mb-2 lg:mb-8">
              Reset Password
            </h1>

            <form className="h-[70vh] flex flex-col justify-between ">
              <div className="">
                <label className="block text-gray-700 mb-2">You will receive an email with instructions to reset your password.</label>
                <div className="image">
                    <img src={emailImage} alt="send mail illustration" className="m-auto w-50" />
                </div>
                <div className="relative">
                  <input
                    type="mail"
                    placeholder="enter your email"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 placeholder-gray-400"
                  />
                </div>
              </div>


              <button
                type="submit"
                className="w-full bg-[#ed1c24] text-white py-3 px-6 rounded-full font-medium mb-6 hover:scale-110 transition duration-150 ease-in-out"
              >
                Send the email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
