// src/components/ProfileCard.js

import React from 'react';
import './ProfileCard.css';
import profileImage from '../assets/images/profile.jpg'; // Replace with your image path

function ProfileCard() {
    return (
        <div className='full_profile'>
            <div className="profile-card">
                <div className="description">
                    <h1 className='about_heading'>About Me</h1>
                    <p className='about_data'>
                        Hello! I'm ARYAMAN SINHA,  passionate web developer with over 1 year of experience...
                        {/* Add more description */}
                    </p>
                </div>
                <div className="image-container">
                    
                    <img src={profileImage} alt="Your Alt Text" />
                </div>
            </div>
            <div className="links-container">
                <a href="https://medium.com/@aryamansi17" className="link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-medium"></i>
                </a>
                <a href="https://github.com/AryamanSi17" className="link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/Aryaman1702" className="link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/sinha_aryaman" className="link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/sinha_aryaman" className="link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}

export default ProfileCard;
