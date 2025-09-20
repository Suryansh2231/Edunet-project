import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import AccountSettingPage from "./components/AccountSettingPage";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  const [noteItem, setNoteItem] = useState(() => {
    const saved = localStorage.getItem("noteItem");
    return saved ? JSON.parse(saved) : [];
  });
  const [isSignUp, setIsSignUp] = useState();

  useEffect(() => {
    localStorage.setItem("noteItem", JSON.stringify(noteItem));
  }, [noteItem]);

  function addNoteItem(note) {
    setNoteItem((prevItem) => {
      return [...prevItem, note];
    });
  }
  function deleteNoteItem(id) {
    setNoteItem((prevNoteItem) => {
      return prevNoteItem.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Navbar checkSignUp={isSignUp} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addBlog={addNoteItem}
              blogItem={noteItem}
              deleteBlog={deleteNoteItem}
              checkSignUp={isSignUp} 
            />
          }
        />
        <Route path="/about" element = {<About />} />
        <Route
          path="/blogs"
          element={<Blogs blogItem={noteItem} deleteBlog={deleteNoteItem} />}
        />
                <Route path="/contact" element = {<Contact />} />
        <Route path="/signUpPage" element={<SignUpPage set={setIsSignUp} />} />
        <Route path="/signInPage" element={<SignInPage set={setIsSignUp}/>} />
        <Route path="/accountSettingPage" element={<AccountSettingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
