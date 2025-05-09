import React from "react";
import SideBar from "./sideBar";
import RightSide from "./rightSide";
import LastSide from "./lastSide";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className=" flex flex-col-reverse md:flex-row md:bg-[#f3f3ec] w-[100%] h-[100vh] relative ">
                <SideBar/>
                <Outlet/>
                <LastSide/>
        </div>
    )
}

export default Dashboard;