import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


  const SignUp = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="text-3xl h-6 pt-6 lg:hidden" >
        

        <Link to="/login" className="">
        <IoIosArrowBack />
          
        </Link>
      </div>
      <div className="flex flex-col h-screen bg-red">
        {/* Header with back button and logo */}
        <div className="px-4 py-6 flex items-center">
          
         
            <div className="flex items-center justify-center mx-auto">
              <img
                src="/src/assets/way-black.png"
                alt="wAY-logo-black"
                className="logo md:w-50 w-24 opacity-100"
              />
            </div>
         
        </div>

        {/* Sign in form container */}
        <div className="flex-1 px-6 py-4 bg-[#BA5F5F0F] rounded-t-3xl 
        ">
          <h1 className="text-2xl font-medium mb-6">Sign in</h1>

          {/* Form fields */}
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
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200  placeholder-gray-400"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                ></button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Verification password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200  placeholder-gray-400"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                ></button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 border border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-500">
                Forgot Password?
              </a>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-full font-medium mb-6 hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Sign in
            </button>
          </form>

          {/* OR continue with */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-sm text-gray-500">
              - OR Continue with -
            </span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Social login options */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex gap-4 items-center">
          <div className=" flex items-center justify-center rounded-full border  border-red-700 p-1 w-12 h-12">
            <img
              src="/src/assets/logo google.png"
              alt=""
              className="w-10 h-10"
            />
          </div>
          <div className="flex items-center justify-center rounded-full border border-[#00a991] p-1 w-12 h-12">
            <img
              src="/src/assets/logo apple.png"
              alt=""
              className="w-8 h-8"
            />
          </div>
          <div className="flex items-center justify-center rounded-full border border-[#0071bc] p-1 w-12 h-12">
            <img
              src="/src/assets/logo facebook.png"
              alt=""
              className="w-8 h-8"
            />
            
          </div>
        </div>
            {/* <button className="w-12 h-12 rounded-full flex items-center justify-center border border-red-200">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  fill="#EA4335"
                />
                <path
                  d="M12.545,10.239l9.426,0.013c0.823,3.898-1.03,11.748-9.426,11.748c-2.594,0-4.958-0.988-6.737-2.606l-2.751,2.751c2.25,2.25,5.359,3.643,8.817,3.643c5.523,0,10-4.477,10-10s-4.477-10-10-10c-2.594,0-4.958,0.988-6.737,2.606l2.751,2.751c1.055-0.904,2.423-1.453,3.921-1.453c3.332,0,6.033,2.701,6.033,6.032s-2.701,6.032-6.033,6.032c-2.798,0-4.733-1.657-5.445-3.972h5.445V10.239z"
                  fill="#4285F4"
                />
                <path
                  d="M7.096,12c0-0.424,0.044-0.837,0.125-1.235L3.53,8.125C3.188,9.339,3,10.649,3,12c0,1.351,0.188,2.661,0.53,3.875l3.691-2.64C7.14,12.837,7.096,12.424,7.096,12z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.545,17.032c-1.498,0-2.866-0.549-3.921-1.453l-2.814,2.814c1.779,1.618,4.143,2.606,6.737,2.606c3.458,0,6.566-1.393,8.817-3.643l-2.751-2.751C17.503,16.224,15.139,17.032,12.545,17.032z"
                  fill="#34A853"
                />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center border border-cyan-200">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                  fill="#000"
                />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center border border-blue-200">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.05 20.28c-.98.95-2.05.88-3.09.41-1.09-.5-2.09-.48-3.23 0-1.44.62-2.2.44-3.05-.41C2.18 14.55 3.16 6.4 9.08 6.13c1.41.08 2.38.88 3.21.88.78 0 2.26-.96 4.01-.82 2.89.23 4.36 2.14 4.36 2.14-3.77 2.11-3.19 6.38.7 8.44-.62 1.31-1.43 2.6-2.31 3.51z"
                  fill="#000"
                />
                <path
                  d="M12.03 5.92c-.8-.92-1.91-1.65-3.09-1.7-.17 1.91.54 3.82 1.44 5.05.86 1.17 2.02 1.93 3.21 1.92.13-2-1.13-3.76-1.56-5.27z"
                  fill="#000"
                />
              </svg>
            </button> */}
          </div>

          {/* Create account */}
          <div className="text-center mb-6">
            <span className="text-gray-500">Create An Account </span>
            <Link to="/login" className="text-red-500 font-semibold">
              Sign Up
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
};
export default SignUp;