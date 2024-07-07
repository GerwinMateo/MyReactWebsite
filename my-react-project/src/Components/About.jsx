
function About() {
    return (
        <div class="homepage-boxes">
            <div className="about-box">
                <h1 class="about-heading">Some things about me! 🍉</h1>

                <p class="about-text">
                    I’m an engineer & entrepreneur focusing on Web Development. I’m also currently researching Large Language Models and considering building AI projects. I am a proud rural Alaskan hailing from Unalaska and a First Generation college student!
                </p>

                <p class="about-text">
                    I’m a Junior at <a class="about-links" href="https://www.stanford.edu/"  target="blank_">Stanford University</a> studying Computer Science with a concentration in Human-Computer Interaction. Here are some of the <a class="about-links" href="/project">projects</a> I’ve been working on.
                    This past year, I worked at Pi Networks to help create an E-Commerce Web Application which tried to utilize their Pi Currency. I am looking for internship opportunities for Winter 2025 and Summer 2025.
                </p>

                <p class="about-text">
                    See more on my <a class="about-links" href="/resume">resume</a> or contact me at <a class="about-links" href="mailto:gerwinmateo08@gmail.com">gerwinmateo08@gmail.com</a>
                </p>
            </div>

            <div class="picture-box">
                <div class="picture-content">
                    <div class="headshot">
                        <img src="GerwinHeadshot.png" alt="Gerwin Delsocora Mateo Headshot"/>
                    </div>
                <div class="picture-info">
                    <h1>Gerwin Delsocora Mateo</h1>
                    <h3>Software Engineer in Training</h3>
                    <p>Curious, Creative, Charismatic. Rural Alaskan with interests in Web Development! Pursuing a B.S. in Computer Science at Stanford University.</p>
                    <p><i class="fa-solid fa-location-dot"></i> <strong>Stanford, CA</strong></p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;