import React from "react";
import Friends from "./friends/friends";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./chat/chatPage";
import Story from "./story";
import Profile from "./profile";

const RightSide= ()=>{
    return(
        <>
        <div className="w-full bg-white h-full">
        <Routes>
            <Route path="/" element={<Friends/>} />
            <Route path="/chatPage" element={<ChatPage/>} />
            <Route path="/story" element={<Story/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </div>
        </>
    )
}

export default RightSide;