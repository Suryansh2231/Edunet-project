import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../App.css";

function InputArea(props) {
  const [blog, setBlog] = useState({
    id: null,
    title: "",
    content: "",
    blogger: "",
  });

  useEffect(() => {
    if (props.editedBlogItem) {
      setBlog(props.editedBlogItem);
    }
  }, [props.editedBlogItem]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));

    if (!props.onAccount) {
      alert("Sign Up to write blogs");
      setBlog({ id: null, title: "", content: "", blogger: "" });
    }
  }

  function handleAdd() {
    if (
      blog.title.trim().length === 0 ||
      blog.content.trim().length === 0 ||
      blog.blogger.trim().length === 0
    ) {
      alert("Write some text before adding!");
      return;
    }

    if (props.editedBlogItem) {
      props.onUpdate(blog); 
    } else {
      props.onAdd(blog); 
    }

    setBlog({ id: null, title: "", content: "", blogger: "" });
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={blog.title}
          name="title"
          placeholder="BlogTitle"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={blog.content}
          rows={3}
          placeholder="BlogContent"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="blogger"
          value={blog.blogger}
          rows={3}
          placeholder="BloggerName"
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
