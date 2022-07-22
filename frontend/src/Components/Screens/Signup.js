import React from "react";
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div className="card">
      <h1 className="brand-logo">Instagram</h1>
      <h1 className="be-heading">Signup</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button className="btn waves-effect waves-light">Sign-up</button>
      <Link to="./login">
        <h3>Already have an account?</h3>
      </Link>
    </div>
  );
};

export default Signup;
