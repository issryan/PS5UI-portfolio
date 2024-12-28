import React from 'react';
import '../ProjectSummary.scss';
import flickImage from '../../../assets/Flick.png';

export default function FlickSummary() {
    return (
        <div className="project-summary">
            <div className="project-content">
                {/* Text Section */}
                <div className="project-text">
                    <p className="project-description">
                        A simple Instagram clone where users can create profiles, share posts, and interact with others.
                    </p>

                    {/* Tech Stack Labels */}
                    <div className="tech-stack">
                        <span className="tech-label">MongoDB</span>
                        <span className="tech-label">Express</span>
                        <span className="tech-label">React.js</span>
                        <span className="tech-label">Node.js</span>
                        <span className="tech-label">RESTful APIs</span>
                    </div>

                    {/* Buttons */}
                    <div className="project-links">
                        <a 
                            href="https://github.com/project-flick/Flick" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-btn"
                        >
                            View GitHub Repo
                        </a>
                        <a 
                            href="/flick-details" 
                            className="project-btn learn-more"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="project-image">
                    <img 
                        src={flickImage} 
                        alt="Flick Project" 
                        loading="lazy" 
                        className="project-thumbnail"
                    />
                </div>
            </div>
        </div>
    );
}