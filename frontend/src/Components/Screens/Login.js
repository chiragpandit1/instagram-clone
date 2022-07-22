import React from 'react';
import "./css/login.css"
import {Link} from 'react-router-dom';
const Login = () =>{
    return (
    <div className = "card">
        <h1 className="brand-logo">Instagram</h1>
        <h1 className="be-heading">Login</h1>
        <input type="text" placeholder = "Username"/>
        <input type="text" placeholder = "Password"/>
        <button className = "btn waves-effect waves-light">Log-in</button>
        <Link to="./signup">
        <h3>Don't have an account?</h3>
        </Link>
    </div>)
}

export default Login; 