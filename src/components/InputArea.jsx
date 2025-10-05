import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";

function InputArea(props) {
  const [blog, setBlog] = useState({
    id: null,
    title: "",
    content: "",
    blogger: "",
  });

  const { isAuthenticated, userEmail } = useAuth();

  // Load the blog data if editing
  useEffect(() => {
    if (props.editedBlogItem) {
      setBlog(props.editedBlogItem);
    }
  }, [props.editedBlogItem]);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    if (!isAuthenticated) {
      alert("Please sign in to write blogs!");
      return;
    }

    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  }

  // Handle adding or updating a blog
  function handleAdd() {
    if (!isAuthenticated || !userEmail) {
      alert("Please sign in to add a blog.");
      return;
    }

    if (
      blog.title.trim().length === 0 ||
      blog.content.trim().length === 0 ||
      blog.blogger.trim().length === 0
    ) {
      alert("Please fill all fields before adding!");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title: blog.title,
      content: blog.content,
      blogger: blog.blogger,
      createdAt: Date.now(),
      date: new Date().toISOString(),
    };

    // Load existing blogs for the current user
    const storedBlogs =
      JSON.parse(localStorage.getItem(`userBlogs_${userEmail}`)) || [];

    let updatedBlogs;

    if (props.editedBlogItem) {
      updatedBlogs = storedBlogs.map((b) =>
        b.id === newBlog.id ? newBlog : b
      );
      props.onUpdate(newBlog);
    } else {
      updatedBlogs = [...storedBlogs, newBlog];
      props.onAdd(newBlog);
    }

    // Save to localStorage for this specific user
    localStorage.setItem(
      `userBlogs_${userEmail}`,
      JSON.stringify(updatedBlogs)
    );

    // Reset the blog form
    setBlog({ id: null, title: "", content: "", blogger: "" });
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={blog.title}
          name="title"
          placeholder="Blog Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={blog.content}
          rows={3}
          placeholder="Blog Content"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="blogger"
          value={blog.blogger}
          rows={2}
          placeholder="Blogger Name"
          onChange={handleChange}
        ></textarea>

        <button type="submit" onClick={handleAdd} className="addBtn">
          <AddCircleIcon />
        </button>
      </div>
    </div>
  );
}

export default InputArea;
