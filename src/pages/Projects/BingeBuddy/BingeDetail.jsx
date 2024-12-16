import React from 'react';
import './BingeDetail.scss';

export default function ProjectDetails() {
    return (
        <div className="project-details">
            <h1>BingeBuddy</h1>
            <p>
                BingeBuddy is a TV Show Tracker app designed to simplify managing and sharing your TV show experiences with friends. 
                Users can add shows to their watchlist, rate them, and see their friends' ratings.
            </p>

            <h2>Tech Stack</h2>
            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>

            <h2>Challenges</h2>
            <p>
                While building BingeBuddy, I faced challenges in implementing the friends' watchlist sync feature and ensuring the 
                backend efficiently handled multiple user ratings. I resolved these challenges by optimizing MongoDB queries and
                using React Context for state management.
            </p>

            <h2>Highlights</h2>
            <p>
                - Real-time watchlist updates<br />
                - Clean and intuitive UI/UX<br />
                - Friend ratings and recommendations
            </p>

            <div className="project-links">
                <a href="https://github.com/YourGitHubRepo" target="_blank" rel="noopener noreferrer">
                    View Code on GitHub
                </a>
                <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer">
                    View Live Demo
                </a>
            </div>
        </div>
    );
}