import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { useAuth } from "../src/contexts/AuthContext";
import InputArea from "./components/InputArea";

function App() {
  const [blogItem, setBlogItem] = useState(() => {
    const saved = localStorage.getItem("blogItem");
    return saved ? JSON.parse(saved) : [];
  });
  const [editBlog, setEditBlog] = useState(null);
  const { setUserBlogs } = useAuth();

  useEffect(() => {
    localStorage.setItem("blogItem", JSON.stringify(blogItem));
  }, [blogItem]);

  function addBlog(blog) {
    const newBlog = {
      ...blog,
      id: Date.now(),
    };
    setBlogItem((prevItem) => [...prevItem, newBlog]);
  }

  const handleEdit = (blog) => {
    setEditBlog(blog);
  };

  const handleUpdate = (updatedBlog) => {
    if (!updatedBlog || !updatedBlog.id) return;

    const currentUser = JSON.parse(localStorage.getItem("formData"));
    const savedUserBlogs =
      JSON.parse(localStorage.getItem(`userBlogs_${currentUser.email}`)) || [];

    const editedBlogs = savedUserBlogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );

    localStorage.setItem(
      `userBlogs_${currentUser.email}`,
      JSON.stringify(editedBlogs)
    );

    setUserBlogs(editedBlogs);
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
              handleUpdate={handleUpdate}
              handleEdit={handleEdit}
              editBlog={editBlog}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs handleEdit={handleEdit} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/inputArea" element={<InputArea />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
