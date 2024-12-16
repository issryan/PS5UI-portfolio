import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.scss';

const LandingPage = () => {
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGuestClick = () => {
        navigate('/home');
    };

    const handleRyanClick = () => {
        setShowPasswordPrompt(true);
    };

    const handlePasswordSubmit = () => {
        if (password === 'ryan') {
            navigate('/ryan');
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div className="landing-page">
            {/* Title */}
            <h1 className="title">Welcome Back</h1>
            <h2 className="subtitle">Who's visiting?</h2>

            {/* Profiles */}
            <div className="profiles">
                <div className="profile guest" onClick={handleGuestClick}>
                    <div className="circle">
                        <span className="icon">+</span>
                    </div>
                    <p>Add User</p>
                </div>
                {/* Guest Profile */}
                <div className="profile guest" onClick={handleGuestClick}>
                    <div className="circle">
                        <img
                            src="/icons/profile.png" 
                            alt="Guest Icon"
                            className="icon-img"
                        />
                    </div>
                    <p>Guest</p>
                </div>
                <div className="profile ryan" onClick={handleRyanClick}>
                    <div className="circle">
                        <img
                            src="/path-to-ryan-profile.png"
                            alt="Ryan Profile"
                            className="profile-img"
                        />
                    </div>
                    <p>Ryan</p>
                </div>
            </div>

            {/* Password Prompt */}
            {showPasswordPrompt && (
                <div className="password-modal">
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handlePasswordSubmit}>Submit</button>
                </div>
            )}

            {/* Footer */}
            <div className="footer">
                <p>Press X to Select</p>
            </div>
        </div>
    );
};

export default LandingPage;