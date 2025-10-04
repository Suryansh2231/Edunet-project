import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "../App.css";
import logo from "../images/Profile-logo.jpg"
import { useAuth } from "../contexts/AuthContext";
function Navbar(props) {
  const [isOpen, setIsOpen] = useState();

  const {isAuthenticated} = useAuth();
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleToggleLinks() {
    setIsOpen(false);
  }

  const currentPage = useLocation().pathname;

  return (
    <div>
      <nav className="navbar">
        <h1 className="nav-logo">Edunet Insights</h1>
        <button className="nav-toggle" onClick={handleToggle}>
          {isOpen ? <ClearIcon /> : <MenuIcon />}
        </button>

        <div
          className={`nav-links ${isOpen ? "open" : ""}`}
          onClick={handleToggleLinks}
        >
          <Link
            key={1}
            className={currentPage === "/" ? "link active" : "link"}
            to="/"
          >
            Home
          </Link>
          <Link
            key={2}
            className={currentPage === "/about" ? "link active" : "link"}
            to="/about"
          >
            About
          </Link>
          <Link
            key={3}
            className={currentPage === "/blogs" ? "link active" : "link"}
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            key={4}
            className={currentPage === "/contact" ? "link active" : "link"}
            to="/contact"
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <Link
              key={5}
              className={
                currentPage === "/accountSettingPage" ? "link active" : "link"
              }
              to="/accountSettingPage"
            >
          <img className="nav-account-img" src={logo} alt="" />

            </Link>
          ) : (
            <Link
              key={6}
              className={currentPage === "/signUpPage" ? "link active" : "link"}
              to="/signUpPage"
            >
              SignUp
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
