import React from "react";
import Blog from "./Blog";
import InputArea from "./InputArea";
import { useNavigate } from "react-router-dom";
function Home(props) {

  const navigate = useNavigate();

  function handleOlderBlogs(){
    navigate("./blogs");

  }
  return (
    <div>
  <div className="hero">
    <div className="hero-text">
    <h1>Welcome to My Blog</h1>
    <p>Thoughts, stories, and ideas to inspire you</p>
    </div>
  </div>
    <div className="parent">
      <InputArea onAdd={props.addBlog} onAccount = {props.checkSignUp} />
      {props.blogItem.map((note, index) => {
        return (
          index < 3 &&
          <Blog
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            blogger={note.blogger}
            onDelete={props.deleteBlog}
            onEdit={props.editBlog}
          />
        );
      })}
    </div>
    <div className="otherBlogs">
    <button onClick={handleOlderBlogs}>Other Blogs</button>
    </div>
    </div>
  );
}

export default Home;
