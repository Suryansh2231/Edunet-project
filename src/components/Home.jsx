import React, { useEffect } from "react";
import Blog from "./Blog";
import InputArea from "./InputArea";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Home(props) {
  const navigate = useNavigate();
  const { isAuthenticated, setUserBlogs, setUserEmail } = useAuth();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("formData"));

    if (currentUser && currentUser.email) {
      setUserEmail(currentUser.email);

      const savedUserBlogs = localStorage.getItem(
        `userBlogs_${currentUser.email}`
      );
      if (savedUserBlogs) {
        setUserBlogs(JSON.parse(savedUserBlogs));
      } else {
        setUserBlogs([]);
      }
    }
  }, [setUserEmail, setUserBlogs]);

  const currentUser = JSON.parse(localStorage.getItem("formData"));
  const blogs =
    JSON.parse(localStorage.getItem(`userBlogs_${currentUser?.email}`)) || [];

  const recentBlogs = [...blogs].sort(
    (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
  );

  const latestBlogs = recentBlogs.slice(0, 3);

  function handleOlderBlogs() {
    navigate("./blogs");
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="img-text">
          <h1>Welcome to My Blog</h1>
          <p>Thoughts, stories, and ideas to inspire you</p>
        </div>
      </div>

      <InputArea
        onAdd={props.addBlog}
        editedBlogItem={props.editBlog} // shows data when editing
        onUpdate={props.handleUpdate} // saves after editing
      />
      {isAuthenticated &&
      <h1 className="heading" style={{color :"red"}}>Recent Blogs</h1>}
      <div className="parent">
        {isAuthenticated && latestBlogs.length > 0
          ? latestBlogs.map((blog) => (
              <Blog
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                blogger={blog.blogger}   
                onEdit={props.handleEdit}
              />
            ))
          : isAuthenticated && <p className="blogs-desc">No blogs yet!</p>}
      </div>

      {/* All Blogs Button */}
      {isAuthenticated && latestBlogs.length > 0 && (
        <div className="otherBlogs">
          <button onClick={handleOlderBlogs}>View All Blogs</button>
        </div>
      )}
    </div>
  );
}

export default Home;
