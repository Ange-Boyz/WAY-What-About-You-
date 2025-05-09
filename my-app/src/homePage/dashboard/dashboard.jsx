import React from "react";
import SideBar from "./sideBar";
import RightSide from "./rightSide";
import LastSide from "./lastSide";

const Dashboard = () => {
    return (
        <div className=" flex flex-col-reverse md:flex-row md:bg-[#f3f3ec] w-[100%] h-[100vh] relative">
                <SideBar/>
                <RightSide/>
                <LastSide/>
        </div>
    )
}

export default Dashboard;