import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal if user clicks outside modal content
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero contact-img">
        <div className="img-text">
          <h1>Let’s Connect</h1>
          <p>Reach out with your thoughts, questions, or just to say hello.</p>
        </div>
      </div>

      {/* Contact Section */}
      <section id="Contact">
        <h1 className="heading">Get in Touch</h1>
        <div className="contact-container">
          <div className="contact-left">
            <a href="tel:+919044087328">
              <i className="fas fa-phone"></i> +91 90440 87328
            </a>
            <a href="mailto:suryansh2231@gmail.com">
              <i className="fas fa-envelope"></i> suryansh2231@gmail.com
            </a>
            <a href="https://github.com/suryansh2231" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> github.com/suryansh2231
            </a>
          </div>

          <div className="contact-right">
            <a href="https://linkedin.com/in/suryanshgupta-dev" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> linkedin.com/in/suryanshgupta-dev
            </a>
            <a href="https://www.instagram.com/sur_ya0823/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> sur_ya0823
            </a>
            {/* Message Me Button */}
            <a className="message-btn" onClick={openModal}>
              <i className="fas fa-paper-plane"></i> Message Me
            </a>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Send a Message</h2>
              <form action="https://formspree.io/f/mldlqkra" method="POST">
                <label>
                  Your email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Your message:
                  <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Contact;
