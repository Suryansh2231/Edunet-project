import React from 'react'
import "../App.css"


function Contact() {
  return (
    <div>
       <div className="hero">
    <div className="hero-text">
    <h1>Welcome to My Blog</h1>
    <p>Thoughts, stories, and ideas to inspire you</p>
    </div>
    </div>
    
 <section  id="Contact">
  <h1 className="heading">Get in Touch</h1>
  <div className="contact-container">
    <div className="contact-left">
      <a href="tel:+919044087328" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i> +91 90440 87328</a>
      <a href="mailto:suryansh2231@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i>suryansh2231@gmail.com</a>
      <a href="https://github.com/suryansh2231" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> github.com/suryansh2231</a>
    </div>

    <div className="contact-right">
      <a href="https://linkedin.com/in/suryanshgupta-dev" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>linkedin.com/in/suryanshgupta-dev</a>
      <a href="https://www.instagram.com/sur_ya0823/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>sur_ya0823</a>
      <a href="" id="openModal"><i className="fas fa-paper-plane"></i>Message Me</a>
    </div>
  </div>

<div id="messageModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <h2>Send a Message</h2>
    <form
  action="https://formspree.io/f/mldlqkra"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email"/>
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <button type="submit">Send</button>
</form>
  </div>
</div>
</section>   

    </div>
  )
}

export default Contact