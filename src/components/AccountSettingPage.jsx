import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfilePhotoUpload from "./ProfilePhotoUpload";
import { useAuth } from "../contexts/AuthContext";

function AccountSettingPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // ✅ load currently logged-in user (saved in 'formData')
    const storedUser = localStorage.getItem("formData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/signInPage");
  };

  if (!userData) {
    // ✅ if no user found, show message
    return (
      <div className="container">
        <h2>No user logged in</h2>
        <p>Please sign in to view your account settings.</p>
        <button
          className="login-btn"
          onClick={() => navigate("/signInPage")}
        >
          Go to Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="input-container">
        <h2>User Account</h2>
        <br />
        <div className="account-box">
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Box>
              <ProfilePhotoUpload />
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
          magnam at modi nisi sequi.
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
