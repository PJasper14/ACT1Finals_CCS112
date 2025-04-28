import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-content">
          <h2>About Me</h2>
          
          <section className="about-section">
            <h3>Personal Background</h3>
            <p>
              I am PRINCE JASPER G. NUGUID, a 3rd year Information Technology Student, 
              a dedicated and enthusiastic individual with a passion for technology 
              and problem-solving. Born and raised in the Philippines, I've always been 
              fascinated by how software can change the world. And I also want to make a change.
            </p>
          </section>
          
          <section className="about-section">
            <h3>Hobbies</h3>
            <ul>
              <li>Reading current trends</li>
              <li>Playing video games</li>
              <li>Basketball</li>
              <li>Exploring nature</li>
              <li>Biking</li>
              <li>Running</li>
            </ul>
          </section>
          
          <section className="about-section">
            <h3>Interests</h3>
            <ul>
              <li>Web Development (Front-end and Back-end)</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Mobile App Development</li>
              <li>Database Management</li>
              <li>New Technologies</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About; 