import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { formData, setFormData, handleUsers, login, users } = useAuth();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    else if (users.some((user) => user.email === formData.email))
      newErrors.email = "Email already exists. Please use a different one.";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoToAccount = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleUsers(formData); // ✅ Add new user to users array
      login(formData); // ✅ Log in the newly signed-up user
      navigate("/accountSettingPage");
    }
  };

  const handleGoToSignIn = () => {
    navigate("/signInPage");
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <h1 className="heading">Create your Blog account</h1>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                label="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "blue",
                  },
                  "& .MuiInputLabel-asterisk": {
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  },
                }}
                placeholder="Marry Doe"
              />
            </div>
          </Box>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                label="Phone number"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "blue",
                  },
                  "& .MuiInputLabel-asterisk": {
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  },
                }}
                placeholder="+91 12345 98765"
              />
            </div>
          </Box>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                label="Email address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "blue",
                  },
                  "& .MuiInputLabel-asterisk": {
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  },
                }}
                placeholder="name123@gmail.com"
              />
            </div>
          </Box>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
            noValidate
            autoComplete="off"
          >
            <div>
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
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "blue",
                  },
                  "& .MuiInputLabel-asterisk": {
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  },
                }}
                placeholder="123@#$abcXYZ"
              />
            </div>
          </Box>
          <button type="submit" className="btn" onClick={handleGoToAccount}>
            Create Account
          </button>
          <button type="submit" onClick={handleGoToSignIn}>
            Already have Account? Sign In
          </button>
        </div>
      </div>
    </>
  );
}
