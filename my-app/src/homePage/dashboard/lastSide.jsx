import React from "react";
import wayLogo from "../../assets/way_logo.png"
import FriendsRoute from "../friends/friendsRoute";
const LastSide = () =>{
    return(
        <>
        <div className="w-[55%]  h-full md:block hidden">
            <img src={wayLogo} alt="way logo" className="opacity-4 m-auto" />
        </div>
        </>
    )
}

export default LastSide;