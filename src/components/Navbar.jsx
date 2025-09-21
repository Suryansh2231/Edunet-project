import React ,{useState} from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import "../App.css";

function Navbar(props) {

    const [isOpen, setIsOpen] = useState(false);

  function handleToggle()  {
     setIsOpen((prev) => !prev);

  };
  
    return (
    <div>
      <nav className="navbar">
        <h1 className="nav-logo">Personal Blog</h1>
         <button className="nav-toggle"  onClick={handleToggle}>
          {isOpen ?<ClearIcon /> : <MenuIcon />}
        </button> 

        <div className={`nav-links ${isOpen ? "active" : ""}`} >
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/blogs">
            Blogs
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          {props.checkSignUp ? (
            <Link className="link" to="/accountSettingPage">
              <PersonIcon />
            </Link>
          ) : (
            <Link className="link" to="/signUpPage">SignUp</Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
