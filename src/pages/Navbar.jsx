import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Howl, Howler } from 'howler';

export default function Navbar() {
    const [muted, setMuted] = useState(false);
    const [time, setTime] = useState(new Date());

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Toggle mute for all sounds
    const toggleMute = () => {
        const newMuteState = !muted;
        setMuted(newMuteState);

        // Apply mute state globally
        Howler.mute(newMuteState);
    };

    return (
        <div className="navbar">
            <div className="logo">My Portfolio</div>
            <div className="icons">
                <button onClick={toggleMute} className="mute-btn">
                    {muted ? '🔇' : '🔊'}
                </button>
                <div className="clock">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
                <div className="profile-icon">👤</div>
            </div>
        </div>
    );
}