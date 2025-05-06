import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="text-3xl">
            <p>This is the signUp page</p>
            <Link to="/login" className="text-blue-500">Click to continue</Link>
        </div>
    )   
}

export default SignUp;