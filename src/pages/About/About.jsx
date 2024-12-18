import React from 'react';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className="about-container">
            {/* About and Skills side-by-side */}
            <div className="about-main">
                {/* About Section */}
                <div className="about-content">
                    <p>
                        Hi! I'm <strong>Ryan</strong> — a software engineer who loves turning fun and creative ideas into reality.
                        I specialize in building modern web applications with <strong>React</strong> and <strong>Python</strong>, and
                        I'm currently looking for an <strong>internship</strong> or <strong>entry-level role</strong> to further grow my skills.
                    </p>
                    <p>
                        In my spare time, I enjoy exploring photography, biking through the city, discovering hidden food spots, or playing video games.
                        Check out my <strong>Gallery</strong> section for some of my work!
                    </p>
                </div>

                {/* Skills Section */}
                <div className="about-skills">
                    <div className="skills-section">
                        <div>
                            <h3>Frontend</h3>
                            <div className="skills-list">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">HTML</span>
                                <span className="skill-tag">CSS</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">Redux</span>
                                <span className="skill-tag">Figma</span>
                            </div>
                        </div>
                        <div>
                            <h3>Backend</h3>
                            <div className="skills-list">
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Express</span>
                                <span className="skill-tag">DynamoDB</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">AWS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="about-contact">
                <h2>Get in touch</h2>
                <div className="contact-buttons">
                    <button className="resume-btn">
                        <a href="/ryanarafeh.resume.docx" download>
                            Download Resume
                        </a>
                    </button>
                    <button className="github-btn">
                        <a href="https://github.com/issryan" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </button>
                    <button className="linkedin-btn">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </button>
                    <button className="email-btn">
                        <a href="mailto:arafehryan@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} /> arafehryan@gmail.com
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}