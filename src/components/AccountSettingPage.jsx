import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfilePhotoUpload from "./ProfilePhotoUpload";

function AccountSettingPage(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: "Marry Doe",
    email: "Marry@Gmail.com",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    navigate("/signInPage");
    props.set(false);
  };

  return (
    <div className="container">
      <div className="input-container">
        <h2>Account Setting</h2>
        <br />
        <div className="account-box">
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* <img className="account-img" src={logo} alt="" /> */}
            <Box
             
            >
              < ProfilePhotoUpload />

            </Box>
          </Box>
        </div>
        <div className="account-detail">
          <h1>{userData.fullName}</h1>
          <p>{userData.email}</p>
        </div>
        <p className="account-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          necessitatibus adipisci dicta labore quae sit totam eius doloribus
          magnam at modi nisi sequi,
        </p>
        <br />
        <button className="login-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AccountSettingPage;
