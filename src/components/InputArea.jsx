import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../App.css"

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    blogger : ""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
     
    });
    if (!props.onAccount) {
      alert("Sign Up to write blogs");
       setNote({
            title: "",
            content: "",
            blogger:"",
          });
    }
  }
  function handleAdd(){
          props.onAdd(note);
          setNote({
            title: "",
            content: "",
            blogger:"",
          });
      if (note.title.trim().length === 0 || note.content.trim().length === 0 || note.blogger.trim().length === 0) {
    alert("Write some text before adding!");
    return;
  }
      }

  return (
    <div className="container">    
    <div className="input-container">
      <input
        type="text"
        value={note.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={note.content}
        rows={3}
        placeholder="Content"
        onChange={handleChange}
      >
      </textarea>
      <textarea
        name="blogger"
        value={note.blogger}
        rows={3}
        placeholder="Blogger"
        onChange={handleChange}
      >
      </textarea>
      <button
        type="submit"
        onClick={handleAdd}
        className="addBtn"
      >
        <AddCircleIcon />
      </button>
    </div>
    </div>

  );
}

export default InputArea;
