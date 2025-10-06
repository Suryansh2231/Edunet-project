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

    const storedBlogs =
      JSON.parse(localStorage.getItem(`userBlogs_${userEmail}`)) || [];

    let updatedBlogs;

    // Edit mode (if editing an existing blog)
    if (props.editedBlogItem) {
      const updatedBlog = {
        ...blog,
        id: props.editedBlogItem.id,
        createdAt: props.editedBlogItem.createdAt,
        date: new Date().toISOString(),
      };

      updatedBlogs = storedBlogs.map((b) =>
        b.id === updatedBlog.id ? updatedBlog : b
      );

      props.onUpdate(updatedBlog);
    } else {
      const newBlog = {
        id: Date.now(),
        title: blog.title,
        content: blog.content,
        blogger: blog.blogger,
        createdAt: Date.now(),
        date: new Date().toISOString(),
      };

      updatedBlogs = [...storedBlogs, newBlog];
      props.onAdd(newBlog);
    }

    localStorage.setItem(
      `userBlogs_${userEmail}`,
      JSON.stringify(updatedBlogs)
    );

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
