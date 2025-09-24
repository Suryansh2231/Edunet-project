import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
export default function SignUpPage(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.email === formData.email) {
          newErrors.email =
            "Email already exists. Please use a different email.";
        }
      }
    }
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  function handleGoToAccount(e) {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/accountSettingPage");
      props.set(true);
    }
  }
  function handleGoToSignIn() {
    navigate("/signInPage");
  }
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
