import React from "react";
import "./profile.css";
import Accountinfo from "./sub-components/Accountinfo"
import Posts from './sub-components/Posts'
const Profile = () => {
  return (
    <div className="profilepage">
        <Accountinfo/>
        <Posts/>
    </div>
  );
};

export default Profile;
