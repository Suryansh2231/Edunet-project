import React ,{useState} from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "../App.css";

function Navbar(props) {

    const [isOpen, setIsOpen] = useState(false);

  function handleToggle()  {
    setIsOpen(!isOpen)
  
  };
  
    return (
    <div>
      <nav id="navbar">
        <h1 className="nav-heading">Personal Blog</h1>
         <div className="menu-toggle"  onClick={handleToggle}>
          <i className="fas fa-bars"></i>
        </div> 
      
        <div className={' nav-links ${isOpen ? "active" : ""}'} >
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
