import React, { useState, useEffect } from "react";

function ProfilePhotoUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // creates preview link
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("image");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [])
  

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (image) {
      localStorage.setItem("image", image);
    }
  }, [image]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h2>Upload Profile Photo</h2> */}
      {image && (
        <div>
          <img
            src={image}
            alt="profile preview"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}

export default ProfilePhotoUpload;
