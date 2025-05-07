import React from "react";
import SideBar from "./sideBar";
import RightSide from "./rightSide";

const Dashboard = () => {
    return (
        <div className="md:px-50 flex flex-col-reverse md:flex-row md:bg-[#f3f3ec] w-[100%] h-[100vh]">
                <SideBar/>
    
                <RightSide/>
        </div>
    )
}

export default Dashboard;