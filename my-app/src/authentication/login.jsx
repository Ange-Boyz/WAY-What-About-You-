import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="text-3xl">
            <p>This is the Login page</p>
            <Link to="/dashboard" className="text-blue-500">Click to continue</Link>
        </div>
    )
}
export default Login;