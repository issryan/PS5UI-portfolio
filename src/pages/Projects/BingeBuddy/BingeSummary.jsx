import React from 'react';
import './ProjectSummary.scss';
import { useNavigate } from 'react-router-dom';

export default function ProjectSummary() {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate('/projects/bingebuddy'); // Navigate to the detailed page
    };

    return (
        <div className="project-summary">
            <div className="project-header">
                <h2>BingeBuddy</h2>
                <span className="project-role">Full-Stack Development</span>
            </div>

            <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
                <span>CSS</span>
            </div>

            <div className="project-description">
                BingeBuddy is a TV Show Tracker app that allows users to add shows, see what their friends watch, and share ratings effortlessly.
            </div>

            <button className="view-more-btn" onClick={handleViewMore}>
                View More
            </button>
        </div>
    );
}