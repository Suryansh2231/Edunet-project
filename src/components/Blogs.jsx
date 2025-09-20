import React from "react";
import Blog from "./Blog";

function Blogs(props) {
  return (
    <div>
      <div className="hero">
    <div className="hero-text">
    <h1>Welcome to My Blog</h1>
    <p>Thoughts, stories, and ideas to inspire you</p>
    </div>
    </div>
    <div className="parent">
      {props.blogItem.map((note, index) => {
        return (
          <Blog
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            blogger={note.blogger}
            onDelete={props.deleteBlog}
          />
        );
      })}
    </div>
    </div>
  );
}
export default Blogs;
