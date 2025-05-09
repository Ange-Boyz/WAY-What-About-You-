import React from "react";
import { Route, Routes } from "react-router-dom";
import RequestFriends from "./requestFriends";
import AddFriends from "./addFriend";
import Friends from "./friends";

const FriendsRoute = () =>{
    return(
        <div className="">
            <Routes>
                <Route path="requestFriends" element={<RequestFriends/>}/>
                <Route path="addFriends" element={<AddFriends/>}/>
                <Route path="friends" element={<Friends/>}/>
            </Routes>
        </div>
    )
}

export default FriendsRoute;