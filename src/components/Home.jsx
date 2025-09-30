import React from "react";
import Blog from "./Blog";
import InputArea from "./InputArea";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();

  function handleOlderBlogs() {
    navigate("./blogs");
  }

  return (
    <div>
      <div className="hero">
        <div className="img-text">
          <h1>Welcome to My Blog</h1>
          <p>Thoughts, stories, and ideas to inspire you</p>
        </div>
      </div>
        <InputArea
          onAdd={props.addBlog}
          onAccount={props.checkSignUp}
          editedBlogItem={props.editedBlog}
          onUpdate={props.updateBlog}
        />
       <div className="parent">
        {props.blogItem.slice(0, 3).map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
            blogger={blog.blogger}
            onDelete={props.deleteBlog}
            onHandleBlog={props.handleEditBlog}
            blogItem={blog}
            checkUserSignUp = {props.checkSignUp}
          />
        ))};
      </div>
       { props.checkSignUp &&
      <div className="otherBlogs">
        <button onClick={handleOlderBlogs}>Other Blogs</button>
      </div>}
    </div>
  );
}

export default Home;
