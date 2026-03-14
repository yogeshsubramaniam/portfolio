import React from 'react';
import yogesh from "./image/yogesh.png";
import { FaGraduationCap, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title animate-fade-in-up">About Me</h2>
      
      <div className="about-container">
        <div className="about-image-wrapper animate-fade-in-up delay-100">
          <div className="image-frame glass-panel">
            <img className="about-img" src={yogesh} alt="Yogesh S" />
            <div className="experience-badge bg-gradient">
              <span>M.Sc</span>
              <span>Graduate</span>
            </div>
          </div>
        </div>
        
        <div className="about-content animate-fade-in-up delay-200">
          <h3 className="about-subtitle">Get to know me</h3>
          <p className="about-text">
            I'm a highly motivated Full Stack Developer based in Udumalpet, Tamil Nadu. 
            With a strong academic background in Computer Science, including an M.Sc., I am passionate about 
            building scalable, responsive, and innovative web applications. I am a quick learner, 
            adaptable to new technologies, and a team player with strong problem-solving skills, 
            eager to contribute to a growth-oriented organization.
          </p>
          
          <div className="about-cards">
            <div className="about-card glass-panel flex-column">
              <FaGraduationCap className="card-icon" />
              <h4>Education</h4>
              <p>M.Sc. Computer Science</p>
            </div>
            
            <div className="about-card glass-panel flex-column">
              <FaLaptopCode className="card-icon" />
              <h4>Target Role</h4>
              <p>Full Stack Developer</p>
            </div>
            
            <div className="about-card glass-panel flex-column">
              <FaLightbulb className="card-icon" />
              <h4>Skills</h4>
              <p>MERN Stack & AI Tools</p>
            </div>
          </div>
          
          <button className="btn-primary mt-4">Let's Talk</button>
        </div>
      </div>
    </section>
  );
}

export default About;
