import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} My Personal Profile. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 