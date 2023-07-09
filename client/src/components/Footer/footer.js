import React, { useState } from 'react';
import { FaGithub, FaLinkedin ,FaEnvelope } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleContactClick = () => {

    setShowEmail(true);
    window.location.href = 'mailto:ctnestquest@gmail.com';
  };

  const handleMouseLeave = () => {
    setShowEmail(false);
  };
  
  return (
    <div className='footer-Container'>
      <div className='footer-Elements'>
        <div className='footer-Content'>
        <a href="https://www.linkedin.com/in/ct-nest-quest/">
          <FaLinkedin className="footer-icon" />
        </a>
        </div>
        <div className='footer-Content'>
        <a href="https://github.com/DaelenWall/CTNestQuest">
        <FaGithub className="footer-icon" />
        </a>
        </div>
        <div className='footer-Content'>
        <button
          className="contact-button"
          onClick={handleContactClick}
          onMouseLeave={handleMouseLeave}
        >
         {showEmail ? (
            <span className="email-text">ctnestquest@gmail.com</span>
          ) : (
            <FaEnvelope className="footer-icon" />
          )}
        </button>
        </div>
      </div>
    </div>
  )
}
export default Footer