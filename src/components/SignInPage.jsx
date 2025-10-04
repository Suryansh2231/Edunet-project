import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SignInPage() {
  const navigate = useNavigate();
  const { users, login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoToAccount = (e) => {
    e.preventDefault();
    setLoginError("");

    if (validateForm()) {
      const existingUser = users.find(
        (u) =>
          u.email === formData.email && u.password === formData.password
      );

      if (!existingUser) {
        setLoginError("Invalid email or password.");
        return;
      }

      // ✅ Log in user and redirect
      login(existingUser);
      navigate("/accountSettingPage");
    }
  };

  const handleGoToSignUp = () => {
    navigate("/signUpPage");
  };

  return (
    <div className="container">
      <div className="input-container">
        <h1 className="heading">Sign in to your Blog account</h1>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={!!errors.email}
            helperText={errors.email}
            placeholder="Enter email address"
          />
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            error={!!errors.password}
            helperText={errors.password}
            placeholder="Enter password"
          />
        </Box>

        {loginError && (
          <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
            {loginError}
          </p>
        )}

        <button type="submit" className="login-btn" onClick={handleGoToAccount}>
          Login
        </button>
        <button type="button" onClick={handleGoToSignUp}>
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
}
