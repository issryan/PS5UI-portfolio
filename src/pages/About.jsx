import React from 'react';
import './About.scss'; 
import checkmark from '/games/checkmark.png'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { MdEmail, MdLocationOn, MdSchool, MdArrowBack } from 'react-icons/md'; 
import { useNavigate } from 'react-router-dom'; 

const About = () => {
  const navigate = useNavigate();  

  return (
    <section className="about-section">
      {/* Back Arrow */}
      <button className="back-arrow" onClick={() => navigate('/')}>
        <MdArrowBack size={28} />
      </button>

      <div className="about-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="avatar-box">
            <img src="path/to/avatar.png" alt="Ryan Arafeh" />
          </div>
          <h1 className="name">Ryan Arafeh</h1>
          <p className="title">Software Engineer</p>

          <ul className="contacts-list">
            <li className="contact-item">
              <MdEmail size={20} className="icon" />
              <a href="mailto:arafehryan@gmail.com">arafehryan@gmail.com</a>
            </li>
            <li className="contact-item">
              <MdLocationOn size={20} className="icon" />
              <address>Toronto, Ontario, Canada</address>
            </li>
            <li className="contact-item">
              <MdSchool size={20} className="icon" />
              <address>Software Engineering Technology @Centennial College</address>
            </li>
          </ul>

          <div className="social-list">
            <a href="https://www.linkedin.com/in/ryanarafeh/" className="social-link">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/issryan" className="social-link">
              <FaGithub size={24} />
            </a>
          </div>
        </aside>

        {/* Main Section */}
        <div className="about-main">
          <h2>About Me</h2>
          <p>
            I'm a Software Engineering student navigating the coding maze. Currently knee-deep in algorithms and projects, I'm on a mission to make tech as cool as it can get. When I'm not wrestling with code, you'll catch me snapping pics of my daily adventures...
          </p>

          <section className="skills-section">
            <h3>Skills</h3>
            <div className="skill-group">
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <ul className="skills-list">
                  <li><img src={checkmark} alt="Checkmark" /> HTML - Experienced</li>
                  <li><img src={checkmark} alt="Checkmark" /> CSS - Experienced</li>
                  <li><img src={checkmark} alt="Checkmark" /> JavaScript - Intermediate</li>
                  <li><img src={checkmark} alt="Checkmark" /> React - Intermediate</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend Development</h4>
                <ul className="skills-list">
                  <li><img src={checkmark} alt="Checkmark" /> Python - Intermediate</li>
                  <li><img src={checkmark} alt="Checkmark" /> SQL - Intermediate</li>
                  <li><img src={checkmark} alt="Checkmark" /> MongoDB - Intermediate</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="hobbies-section">
            <h3>Hobbies</h3>
            <div className="hobbies-list">
              <div className="hobby">
                <img src="path/to/icon-design.svg" alt="Design Icon" />
                <h4>Photography</h4>
                <p>Small paragraph here.</p>
              </div>
              <div className="hobby">
                <img src="path/to/icon-design.svg" alt="Design Icon" />
                <h4>Graphic Design</h4>
                <p>Small paragraph here.</p>
              </div>
              <div className="hobby">
                <img src="path/to/icon-design.svg" alt="Design Icon" />
                <h4>Biking</h4>
                <p>Small paragraph here.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;