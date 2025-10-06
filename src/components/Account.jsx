import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfilePhotoUpload from "./ProfilePhotoUpload";
import { useAuth } from "../contexts/AuthContext";

function Account() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("formData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/signIn");
  };

  if (!userData) {
    return (
      <div className="container">
        <h2>No user logged in</h2>
        <p>Please sign in to view your account settings.</p>
        <button className="login-btn" onClick={() => navigate("/signIn")}>
          Go to Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="input-container">
        <h1 className="heading">User Account</h1>
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
          Welcome to your account, {userData.fullName}! Here you can update your
          profile information, upload a new profile picture, and manage your
          settings. Keeping your profile updated helps us personalize your
          experience.
        </p>

        <br />
        <button className="login-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;
