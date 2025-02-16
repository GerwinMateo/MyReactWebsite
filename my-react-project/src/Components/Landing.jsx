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

function Skills() {
    return (
        <div className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <p>Python • JavaScript • Java • HTML/CSS • SQL</p>
                </div>
                <div className="skill-category">
                    <h3>Frameworks</h3>
                    <p>React.js • Node.js • Express.js • Next.js</p>
                </div>
                <div className="skill-category">
                    <h3>Tools</h3>
                    <p>Git • Firebase • AWS • MongoDB • MySQL</p>
                </div>
                <div className="skill-category">
                    <h3>Other</h3>
                    <p>REST APIs • CI/CD • Agile • Unit Testing</p>
                </div>
            </div>
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
        <Skills />
        <h2 className="section-title">Experience</h2>
        <div className="experiences">
          <Experience
            title='Software Engineer Intern | Affogato Holdings'
            description='Built an AI-powered podcast assistant that reduced guest prep time by 80% using Perplexity and ChatGPT APIs to generate 8+ contextual questions and 5 research sections per guest. Streamlined interview prep by creating a Q&A system that pairs AI-generated questions with research and supports real-time note-taking across 8+ topics.'
            duration='Jan 2025 – Present'
          />
          <Experience
            title='Product Manager | Develop for Good'
            description="Defined product roadmap and led a team of 7 developers to build an online matching platform, enabling efficient pairing of mentors with K-12 students for CovEducation's free virtual tutoring and mentorship. Managed platform development using React/NextJS for the frontend and Node/Firebase for data storage/authentication, ensuring a seamless user experience and reliable system performance."
            duration='Oct 2024 – Present'
          />
          <Experience
            title='Software Engineer Intern | Pi Network'
            description='Developed a full-stack web application using React.js for the frontend and Node.js for the backend, ensuring a dynamic, responsive user interface and efficient server-side functionality.'
            duration='Jan 2024 – Mar 2024'
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
