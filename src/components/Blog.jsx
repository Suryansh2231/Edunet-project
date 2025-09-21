import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../App.css"
function Blog(props) {
  function deleteBlog() {
    props.onDelete(props.id);
  }
  const currentDate = new Date();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  


 
  
  return (
  <div className="parent">    
      <div className="blog">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>Posted by <span className="blogger">{props.blogger}</span> on {monthName} {date}, {year}</p>
        <button type="submit" onClick={deleteBlog}>
          <DeleteIcon />
        </button>
        <button type="submit" onClick={props.onEdit}>
          <EditIcon />
        </button>
      </div>
      </div>
      
  );
}

export default Blog;
