import React from 'react';
import '../ProjectSummary.scss';
import shiftHappensImage from '../../../assets/ShiftHappens.png';

export default function ShiftHappensSummary() {
    return (
        <div className="project-summary">
            <div className="project-content">
                {/* Text Section */}
                <div className="project-text">
                    <p className="project-description">
                        Shift Happens is a shift scheduling web app for managers and employees. It's designed to simplify scheduling,
                        resolve conflicts, and ensure teams are properly staffed. Currently under development, the app will feature
                        automatic schedule generation, conflict detection, and a customizable dashboard.
                    </p>

                    {/* Tech Stack Labels */}
                    <div className="tech-stack">
                        <span className="tech-label">UNDER DEVELOPMENT</span>
                    </div>

                    {/* Buttons */}
                    <div className="project-links">
                        {/* <a 
                            href="https://github.com/issryan/ShiftHappens" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-btn"
                        >
                            View GitHub Repo
                        </a> */}
                       {/*  <a
                            href="/shift-happens-details"
                            className="project-btn learn-more"
                        >
                            Learn More
                        </a> */}
                    </div>
                </div>

                {/* Image Section */}
                <div className="project-image">
                    <img
                        src={shiftHappensImage}
                        alt="Shift Happens Project"
                        loading="lazy"
                        className="project-thumbnail"
                    />
                </div>
            </div>
        </div>
    );
}