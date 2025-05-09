import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../chat/chatPage";
import Story from "../story";
import Profile from "../profile";
import FriendsPage from "../friends/friendsPage";

const RightSide= ()=>{
    return(
        <>
        <div className="md:w-[30%] w-full bg-white h-full overflow-y-scroll">
        <Routes>
            <Route path="friendsPage" element={<FriendsPage/>}/>
            <Route path="chatPage" element={<ChatPage/>}/>
            <Route path="/story" element={<Story/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </div>
        </>
    )
}

export default RightSide;