import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, msg: null } });

    try {
      const response = await fetch("https://formsubmit.co/ajax/yogeshsubramani1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: "false" // Disable Captcha for smoother UX (optional)
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          info: { error: false, msg: "Message sent successfully! I'll get back to you soon." }
        });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, info: { error: false, msg: null } });
        }, 5000);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error(error);
      setStatus({
        submitting: false,
        info: { error: true, msg: "An error occurred while sending the message. Please try again later." }
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title animate-fade-in-up">Get In Touch</h2>
      
      <div className="contact-container animate-fade-in-up delay-200">
        <div className="contact-info-wrapper glass-panel">
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email. 👋</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:yogeshsubramani1@gmail.com">yogeshsubramani1@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Udumalpet, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>9597906905</p>
              </div>
            </div>
          </div>
          
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/yogesh-s-a248473b2" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/yogeshsubramaniam" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        
        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
                disabled={status.submitting}
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
                disabled={status.submitting}
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                disabled={status.submitting}
              />
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                required
                disabled={status.submitting}
              ></textarea>
            </div>
            
            {status.info.msg && (
              <div className={`form-status-message ${status.info.error ? 'error' : 'success'}`}>
                {status.info.error ? <FaExclamationCircle /> : <FaCheckCircle />}
                <span>{status.info.msg}</span>
              </div>
            )}
            
            <button type="submit" className="btn-primary form-submit" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
