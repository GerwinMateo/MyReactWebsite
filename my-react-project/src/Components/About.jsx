import React, { useEffect, useState } from 'react';
import "./About.css"

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  });

  return (
    <div className={`homepage-boxes ${fadeIn ? 'fade-in' : ''}`}>
      <div className="about-box">
        <h1 className="about-heading">Some things about me! 🍉</h1>
        <p className="about-text">
          I’m an engineer & entrepreneur focusing on Web Development. I’m also currently researching Large Language Models and building AI projects. I am a proud rural Alaskan hailing from Unalaska and a First Generation college student!
        </p>
        <p className="about-text">
          I’m a Junior at <a className="about-links" href="https://www.stanford.edu/" target="blank_">Stanford University <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a> studying Computer Science with a concentration in Human-Computer Interaction. Here are some of the <a className="about-links" href="/project">projects <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a> I’ve been working on.
          This past year, I worked at Pi Networks to help create an E-Commerce Web Application which tried to utilize their Pi Currency. I am looking for internship opportunities for Winter 2025 and Summer 2025.
        </p>
        <p className="about-text">
          See more on my <a className="about-links" href="/resume">resume <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a> or contact me at <a className="about-links" href="mailto:gerwinmateo08@gmail.com">gerwinmateo08@gmail.com</a>
        </p>
      </div>
      <div className="picture-box">
        <div className="picture-content">
          <div className="headshot">
            <img src="GerwinHeadshot.png" alt="Gerwin Delsocora Mateo Headshot"/>
          </div>
          <div className="picture-info">
            <h3>Software Engineer in Training</h3>
            <p>Curious, Creative, Charismatic. <br />Pursuing a B.S. in Computer Science at Stanford University.</p>
            <p><i className="fa-solid fa-location-dot"></i> <strong>Stanford, CA</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
