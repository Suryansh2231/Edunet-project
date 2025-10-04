import React from "react";
import Blog from "./Blog";
import { useAuth } from "../contexts/AuthContext";


function Blogs(props) {

    const {isAuthenticated} = useAuth();

  return (
    
    <div>
      <div className="hero blog-img">
        <div className="img-text">
          <h1>Stories & Ideas</h1>
          <p>Exploring thoughts, experiences, and lessons worth sharing.</p>
        </div>
      </div>
     <div className="parent">
        {props.blogItem.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
            blogger={blog.blogger}
            onDelete={props.deleteBlog}
            blogItem={blog}
            onHandleBlog={props.handleEditBlog} 
            checkUserSignUp = {isAuthenticated}
          />
        ))}
      </div>
    </div>
  );
}
export default Blogs;
