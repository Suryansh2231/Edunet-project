import React from "react";
import "../App.css"

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div>
    <footer id="Footer"> 
  <div className="footer-container">
    <p className="footer-para">&copy; {year} Suryansh Gupta. All rights reserved.</p>
    <div className="footer-socials">
      <a href="https://github.com/Suryansh2231" target="_blank"><i className="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/suryansh-gupta-14a3a8335" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      <a href="mailto:suryansh2231@gmail.com"><i className="fa-solid fa-envelope"></i></a>
    </div>
  </div>
</footer>  

    </div>
  )
  
}
export default Footer;
