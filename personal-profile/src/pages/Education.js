import React from 'react';
import './Pages.css';

function Education() {
  return (
    <div className="page education-page">
      <div className="container">
        <div className="page-content">
          <h2>Education</h2>
          
          <div className="education-list">
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">University of the Philippines</p>
              <p className="years">2019 - 2023</p>
              <p className="description">
                Specialized in software engineering and web development. 
                Completed coursework in data structures, algorithms, database management,
                and web technologies.
              </p>
            </div>
            
            <div className="education-item">
              <h3>High School Diploma</h3>
              <p className="institution">Philippine Science High School</p>
              <p className="years">2015 - 2019</p>
              <p className="description">
                STEM track with focus on mathematics and computer studies.
                Participated in programming competitions and tech clubs.
              </p>
            </div>
          </div>
          
          <div className="courses-section">
            <h3>Relevant Courses</h3>
            <ul className="courses-list">
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Web Development</li>
              <li>Database Systems</li>
              <li>Computer Networks</li>
              <li>Software Engineering</li>
              <li>Mobile Application Development</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education; 