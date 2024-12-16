import React from 'react';
import './BingeSummary.scss';
import bingeBuddyImage from '../../../assets/BingeBuddy.png';

export default function BingeBuddySummary() {
    return (
        <div className="project-summary">
            <div className="project-content">
                {/* Text Section */}
                <div className="project-text">
                    <p className="project-description">
                        BingeBuddy is a TV show rating app that allows users to rate their favorite shows using a 
                        custom comparison algorithm. The app ensures users can only have one show rated 10/10, 
                        dynamically ranking other shows accordingly for a curated viewing experience. 
                        Future updates will include social features, enabling friends to share their ratings 
                        and discover each other's watchlists.
                    </p>

                    {/* Tech Stack Labels */}
                    <div className="tech-stack">
                        <span className="tech-label">React.js</span>
                        <span className="tech-label">AWS ECS</span>
                        <span className="tech-label">DynamoDB</span>
                        <span className="tech-label">Docker</span>
                        <span className="tech-label">Apigee</span>
                        <span className="tech-label">TMDB API</span>
                        <span className="tech-label">Figma</span>
                    </div>

                    {/* Buttons */}
                    <div className="project-links">
                        <a 
                            href="https://github.com/issryan/BingeBuddy" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-btn"
                        >
                            View GitHub Repo
                        </a>
                        <a 
                            href="/bingebuddy" 
                            className="project-btn learn-more"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="project-image">
                    <img 
                        src={bingeBuddyImage} 
                        alt="BingeBuddy Project" 
                        loading="lazy" 
                        className="project-thumbnail"
                    />
                </div>
            </div>
        </div>
    );
}