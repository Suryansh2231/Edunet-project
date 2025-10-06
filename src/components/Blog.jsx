import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Blog(props) {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const { setUserBlogs, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("formData"));
  const savedUserBlogs =
    JSON.parse(localStorage.getItem(`userBlogs_${currentUser.email}`)) || [];

  function deleteBlog() {
    const deletedBlogs = savedUserBlogs.filter((blog) => blog.id !== props.id);
    setUserBlogs(deletedBlogs);
    localStorage.setItem(
      `userBlogs_${currentUser.email}`,
      JSON.stringify(deletedBlogs)
    );
  }

  function handleEdit() {
    navigate("/");
    props.onEdit(props.blogData);
  }

  return (
    <div className="parent">
      {isAuthenticated && (
        <div className="blog">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <p>
            Posted by <span className="blogger">{props.blogger}</span> on{" "}
            {monthName} {date}, {year}
          </p>
          <button onClick={deleteBlog}>
            <DeleteIcon />
          </button>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
