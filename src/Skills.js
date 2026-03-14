import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      items: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "#6366f1"
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      items: ["Node.js", "Express.js"],
      color: "#ec4899"
    },
    {
      title: "Database Management",
      icon: <FaDatabase />,
      items: ["MongoDB"],
      color: "#14b8a6"
    },
    {
      title: "Tools & Deployment",
      icon: <FaTools />,
      items: ["Git", "Netlify", "AI Tools (Antigravity, ChatGPT)"],
      color: "#f59e0b"
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title animate-fade-in-up">Technical Expertise</h2>
      
      <div className="skills-container animate-fade-in-up delay-200">
        {skills.map((skill, index) => (
          <div className="skill-card glass-panel" key={index} style={{"--hover-color": skill.color}}>
            <div className="skill-icon-wrapper" style={{ color: skill.color }}>
              <div className="icon-glow" style={{ background: skill.color }}></div>
              {skill.icon}
            </div>
            
            <h3 className="skill-title">{skill.title}</h3>
            
            <ul className="skill-list">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
