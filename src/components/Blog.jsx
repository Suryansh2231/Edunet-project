import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "../App.css"
function Blog(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }
  const currentDate = new Date();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const [length ,setLength] = useState(5);
  
  
  return (
  <div className="parent">    
      <div className="blog">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>Posted by <span className="blogger">{props.blogger}</span> on {monthName} {date}, {year}</p>
        <button type="submit" onClick={deleteNote}>
          <DeleteIcon />
        </button>
      </div>
      </div>
      
  );
}

export default Blog;
