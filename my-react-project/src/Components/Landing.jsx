import React, { useEffect, useState } from 'react';
import './Landing.css';
import ParticleBackground from './ParticleBackground';
import { TypeAnimation } from 'react-type-animation';

function Experience({ title, description, duration, icon }) {
    return (
      <div className="experience">
        <div className="experience-header">
          <h2 className="experience-title">{title}</h2>
          {icon && <img src={icon} alt="Icon" className="experience-icon" />}
        </div>
        <p className="experience-description">{description}</p>
        <p className="experience-duration">{duration}</p>
      </div>
    );
  }

function Landing() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`landing-container ${fadeIn ? 'fade-in' : ''}`}>
      <ParticleBackground />
      <div className="content">
        <img src="GerwinHeadshot.png" alt="Gerwin Delsocora Mateo" className="profile-picture" />
        <div className="intro-animation">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'Web Developer',
              1000,
              'AI Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </div>
        <div className="experiences">
          <Experience
            title='Software Engineering Fellow | Headstarter AI'
            description='Developing AI projects from design to deployment. Coached by Amazon, Bloomberg and Capital One engineers on Agile, Cl/CD, Git and microservice patterns'
            duration='July 2024 – Present'
          />
          <Experience
            title='Software Engineer Intern | Pi Network'
            description='Constructed a full stack E-commerce app using React, HTML/CSS, JavaScript (frontend) and Node.js (backend). Utilized MySQL for structured data storage and efficient management of orders, cart items, and descriptions.'
            duration='Jan. 2024 – Mar. 2024'
          />
          <Experience
            title='Computer Science Researcher | Stanford University - CS197'
            description='Spearheaded the development of an automated framework using Python resulting in a 40% increase in efficiency. By optimizing a question-creating language model through a looping chain of models, tailored questions are continually prompted.'
            duration='Sept. 2023 – Dec. 2023'
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
