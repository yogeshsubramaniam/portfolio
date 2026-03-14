import React, { useEffect, useState } from 'react';
import yogesh from './image/yogesh.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="header" className="hero-section">
      <div className={`hero-container ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="badge glass-panel animate-fade-in-up">
            <span className="pulse-dot"></span> Open to New Opportunities
          </div>
          
          <h1 className="hero-title animate-fade-in-up delay-100">
            Hi, I'm <span className="highlight">YOGESH S</span>
            <br />
            Full Stack Developer
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up delay-200">
            Motivated Full Stack Developer passionate about building scalable and responsive web applications and eager to contribute to a growth-oriented organization.
          </p>
          
          <div className="hero-cta animate-fade-in-up delay-300">
            <a href="/assets/resume.pdf" download="Yogesh_S_Resume.pdf" className="btn-primary" style={{textDecoration: 'none'}}>
              Download Resume
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '8px'}}>
                <path d="M12 15L12 3M12 15L8.5 11.5M12 15L15.5 11.5M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#projects" className="btn-secondary">View Work</a>
          </div>

          <div className="social-links animate-fade-in-up delay-400">
            <a href="https://github.com/yogeshsubramaniam" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yogesh-s-a248473b2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in-up delay-200">
          <div className="img-backdrop"></div>
          <img src={yogesh} alt="Yogesh S" className="hero-img glass-panel" />
          
          {/* Floating tech stack badges */}
          <div className="floating-badge badge-1 glass-panel">React</div>
          <div className="floating-badge badge-2 glass-panel">Node.js</div>
          <div className="floating-badge badge-3 glass-panel">MongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Header;
