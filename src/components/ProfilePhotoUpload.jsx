import React, { useState, useEffect } from "react";

import { useAuth } from "../contexts/AuthContext";

function ProfilePhotoUpload() {
  const [image, setImage] = useState(null);

  const { userEmail, setUserEmail } = useAuth();

  //  Load current logged-in user's email
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("formData"));
    if (currentUser && currentUser.email) {
      setUserEmail(currentUser.email);

      // Load saved image for this user
      const savedImage = localStorage.getItem(`image_${currentUser.email}`);
      if (savedImage) {
        setImage(savedImage);
      }
    }
  }, []);

  //  When user uploads a new image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && userEmail) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Save image specific to the user's email
        localStorage.setItem(`image_${userEmail}`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {image && (
        <div>
          {" "}
          <img
            src={image}
            alt="profile preview"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />{" "}
        </div>
      )}{" "}
      {!image &&
      <input type="file" accept="image/*" onChange={handleImageChange} />}
    </div>
  );
}

export default ProfilePhotoUpload;
