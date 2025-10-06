import React, { useEffect } from "react";
import Blog from "./Blog";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Blogs(props) {
  const { isAuthenticated, setUserEmail, userBlogs, setUserBlogs } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("formData"));

    if (currentUser && currentUser.email) {
      setUserEmail(currentUser.email);

      // Load blogs specific to this user's email
      const savedUserBlogs = localStorage.getItem(
        `userBlogs_${currentUser.email}`
      );
      if (savedUserBlogs) {
        setUserBlogs(JSON.parse(savedUserBlogs));
      } else {
        setUserBlogs([]);
      }
    }
  }, [setUserBlogs, setUserEmail]);

  function handleInputBlogs() {
    navigate("/");
  }

  return (
    <div>
      <div className="hero blog-img">
        <div className="img-text">
          <h1>Stories & Ideas</h1>
          <p>Exploring thoughts, experiences, and lessons worth sharing.</p>
        </div>
      </div>

      <div className="parent">
        {isAuthenticated ? (
          userBlogs.length > 0 ? (
            userBlogs.map((blog) => (
              <Blog
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                blogger={blog.blogger}
                blogData={blog}
                onEdit={props.handleEdit}
              />
            ))
          ) : (
            <p className="blogs-desc">No blogs found. Create your first one!</p>
          )
        ) : (
          <p className="blogs-desc">Please sign in to view your blogs.</p>
        )}
      </div>
      {/* All Blogs Button */}
      {isAuthenticated && (
        <div className="otherBlogs">
          <button onClick={handleInputBlogs}>Write Blogs</button>
        </div>
      )}
    </div>
  );
}

export default Blogs;
