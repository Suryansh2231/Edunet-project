import React, { useState, useEffect } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profile from "../images/profile.png"

function AccountSettingPage() {
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
  };

  return (
    <div className="container">
    <div className="input-container">
      <h2>Account Setting</h2>
      <br />
      <div className="account-box">
        <Box sx={{ position: "relative", display: "inline-block" }}>
          {/* Profile Image */}
          <img
            className="account-img"
            src={profile}
            alt=""
          />

          {/* Camera Icon Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#3B38A0",
              borderRadius: "50%",
              padding: "4px",
              cursor: "pointer",
              boxShadow: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f7f7f7",
            }}
          >
            <CameraAltIcon fontSize="small" />
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
