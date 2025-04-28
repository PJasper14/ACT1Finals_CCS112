import React from 'react';
import './Pages.css';

function Contact() {
  return (
    <div className="page contact-page">
      <div className="container">
        <div className="page-content">
          <h2>Contact Me</h2>
          
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:myemail@example.com">myemail@example.com</a></p>
              </div>
              
              <div className="contact-item">
                <h3>Social Media</h3>
                <ul className="social-links">
                  <li>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 