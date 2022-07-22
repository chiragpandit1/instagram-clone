import React from "react";
import "./css/profile.css";
const Profile = () => {
  return (
    <div>
      <div className="primarydiv">
        <div className="profile-picture-waladiv">
          <img
            src="https://lh5.googleusercontent.com/maQ_zzdRLSRwpAVoXHgJHjxIKu3LbbEeIAkUuoeo1iGJm-6zeI2vf2Lfl3m2fX4bW9rSI5gyCJFY1Tv0mZrn=w1440-h764-rw"
            alt="profile-picture"
          />
        </div>
        <div className="Account-data-waladiv">
          <div className="account-name">
            <div className="sub-account-name">definitely-not-kermit-the-god-420</div>
            <button className="sub-account-name-button">Edit Profile</button>
            <div className="sub-account-name">/SettingsIcon/</div>
          </div>
          <div className="account-details">
            <div className="sub-account-details">0 posts (cause he's a chad)</div>
            <div className="sub-account-details">1k followers (he's cool)</div>
            <div className="sub-account-details">1 following (typical chad)</div>
          </div>
          <div className="account-discription">Wassup Internet, i am not-kermit!</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
