import React from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/way-logo-side-01.svg"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const FriendsPage = () => {
    return (
        <div className="bg-white md:w-[30%] md:overflow-non overflow-y-scroll h-full">
            <div className="mb-2">
                <div className="header flex items-center justify-between py-2 px-2  ">
                    <div className="logo">
                        <img src={logo} alt="way logo" className="w-20" />
                    </div>
                    <div className="w-[70%] bg-gray-200 h-[30px] rounded-full flex items-center px-2 space-x-2">
                        <IoIosSearch />
                        <form action="#">
                            <input type="search" placeholder="Search here" className="outline-none" />
                        </form>
                    </div>
                </div>
                <div className="firenddNav">
                    <ul className="flex justify-between items-center px-1 w-[90%] h-[40px] m-auto bg-gray-200 rounded-full py-1 mt-3  ">
                        <li>
                            <NavLink to="requestFriends" className={({ isActive }) => isActive ? "bg-white py-[7px] px-5 rounded-full transition  duration-300 ease-in-out" : " py-[7px] px-5 rounded-full transition  duration-200 ease-in-out"}>Request</NavLink>
                        </li>

                        <li>
                            <NavLink to="addFriends" className={({ isActive }) => isActive ? "bg-white py-[7px] px-5 rounded-full transition  duration-300 ease-in-ou " : " py-[7px] px-5 rounded-full transition  duration-200 ease-in-out"}>Add</NavLink>
                        </li>
                        <li>
                            <NavLink to="friends" className={({ isActive }) => isActive ? "bg-white py-[7px] px-5 rounded-full transition  duration-300 ease-in-ou " : " py-[7px] px-5 rounded-full transition  duration-200 ease-in-out"}>Friends</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[83%] overflow-y-scroll">
                    <Outlet />
                </div>


        </div>
    )
}

export default FriendsPage;