import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
    <div className="landing">
        <p> New Around Here?</p>   
        <button><Link to="/register">Register New User</Link></button>
        <p> Already Lifting? </p>
        <button> <Link to="/login">Login</Link></button>
    </div>
    )}

    export default Landing