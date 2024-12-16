import React from 'react';
import './BreedSummary.scss';
import breedFinderImage from '../../../assets/BreedFinder.png';

export default function BreedFinderSummary() {
    return (
        <div className="project-summary">
            <div className="project-content">
                {/* Text Section */}
                <div className="project-text">
                    <p className="project-description">
                        An AI-powered app designed to identify dog breeds based on user-uploaded images.
                        Leveraging a machine learning classification model, it provides accurate breed predictions while
                        storing user submission history for easy review. The app combines an intuitive frontend with a 
                        robust backend for a seamless experience.
                    </p>

                    {/* Tech Stack Labels */}
                    <div className="tech-stack">
                        <span className="tech-label">React.js</span>
                        <span className="tech-label">Flask</span>
                        <span className="tech-label">MongoDB</span>
                        <span className="tech-label">Machine Learning</span>
                        <span className="tech-label">Python</span>
                    </div>

                    {/* Buttons */}
                    <div className="project-links">
                        <a 
                            href="https://github.com/issryan/BreedFinder" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-btn"
                        >
                            View GitHub Repo
                        </a>
                        <a 
                            href="/breedfinder-details" 
                            className="project-btn learn-more"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="project-image">
                    <img 
                        src={breedFinderImage} 
                        alt="BreedFinder Project" 
                        loading="lazy" 
                        className="project-thumbnail"
                    />
                </div>
            </div>
        </div>
    );
}