import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Social Media Webpage",
      description: "A responsive social media web interface with interactive UI elements and a mobile-friendly design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
      github: "https://github.com/yogeshsubramaniam/react_social-app-netlify",
      demo: "https://socialmedia-webpage.netlify.app"
    },
    {
      title: "Food Delivery Webpage",
      description: "A comprehensive food delivery web application allowing users to browse menus, add items to cart, and place orders. Includes backend integration for order management.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
      github: "https://github.com/yogeshsubramaniam/react_social-app-netlify",
      demo: "https://fooddeliver-web.netlify.app"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title animate-fade-in-up">Featured Projects</h2>
      
      <div className="project-container animate-fade-in-up delay-200">
        {projects.map((project, index) => (
          <div className="project-card glass-panel" key={index}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub Repository">
                    <FaGithub className="btn-icon" /> <span>GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Netlify Demo">
                    <SiNetlify className="btn-icon" /> <span>Netlify</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-pill" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
