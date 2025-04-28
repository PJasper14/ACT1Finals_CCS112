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
              I am a dedicated and enthusiastic individual with a passion for technology 
              and problem-solving. Born and raised in the Philippines, I've always been 
              fascinated by how software can change the world.
            </p>
          </section>
          
          <section className="about-section">
            <h3>Hobbies</h3>
            <ul>
              <li>Reading tech blogs and books</li>
              <li>Playing strategy games</li>
              <li>Photography</li>
              <li>Hiking and exploring nature</li>
            </ul>
          </section>
          
          <section className="about-section">
            <h3>Interests</h3>
            <ul>
              <li>Web Development (Front-end and Back-end)</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Mobile App Development</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About; 