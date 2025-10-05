import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import AccountSettingPage from "./components/AccountSettingPage";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [blogItem, setBlogItem] = useState(() => {
    const saved = localStorage.getItem("blogItem");
    return saved ? JSON.parse(saved) : [];
  });

  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    localStorage.setItem("blogItem", JSON.stringify(blogItem));
  }, [blogItem]);

  // ✅ Correct use of Date.now() for unique ID
  function addBlog(blog) {
    const newBlog = {
      ...blog,
      id: Date.now(), // unique ID based on timestamp
    };
    setBlogItem((prevItem) => [...prevItem, newBlog]);
  }

  function deleteBlog(id) {
    setBlogItem((prevBlogItem) =>
      prevBlogItem.filter((blog) => blog.id !== id)
    );
  }

  const handleEdit = (blog) => {
    setEditBlog(blog);
  };

  const handleUpdate = (updatedBlog) => {
    setBlogItem((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
    setEditBlog(null);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addBlog={addBlog}
              blogItem={blogItem}
              deleteBlog={deleteBlog}
              editedBlog={editBlog}
              updateBlog={handleUpdate}
              handleEditBlog={handleEdit}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/blogs"
          element={<Blogs blogItem={blogItem} deleteBlog={deleteBlog} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signInPage" element={<SignInPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/accountSettingPage" element={<AccountSettingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
