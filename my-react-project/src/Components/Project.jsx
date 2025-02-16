import { useEffect, useState } from "react";
import "./Project.css"

function ProjectHelper({ image, name, link, git, technologies, description }) {
    const isLinked = !!link;
    return (
        <div className="project">
            {image ? (
                <img src={image} alt="Project" className="project-image" />
            ) : (
                <div className="project-image-placeholder">
                    {name === "MoodMatch" ? "🎵" : "🖼️"}
                </div>
            )}
            <div className="project-details">
                <h1 className="project-name">
                    {isLinked ? (
                        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                            {name}
                            <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
                        </a>
                    ) : (
                        <span className="project-unlinked">
                            {name}
                        </span>
                    )}
                </h1>
                <h3 className="project-title">{technologies}</h3>
                <p className="project-description">{description}</p>
                {git && (
                    <a className="project-git-link" href={git} target="_blank" rel="noopener noreferrer">
                        View on GitHub <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                )}
            </div>
        </div>
    );
}

function Project() {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        setFadeIn(true); 
    }, []);

    return (
        <div className={`project-list ${fadeIn ? 'fade-in' : ''}`}>
            <h1 className="project-header">My Projects</h1>
            <div className="project-container">
                <ProjectHelper
                    image="Portfolio.png"
                    name="Portfolio Website"
                    link="https://gerwinmateo.dev/"
                    git="https://github.com/GerwinMateo/MyReactWebsite"
                    technologies="React, HTML, CSS"
                    description="A web application built with React frontend, utilizing HTML and CSS for structure and styling."
                />
            </div>
            <div className="project-container">
                <ProjectHelper
                    name="MoodMatch"
                    technologies="React.js, Python, OpenRouter API, Spotify API"
                    description="Developed an AI-powered music recommendation web application using React.js and Python (Flask), leveraging REST APIs for integration. Integrated Spotify API to fetch song data, album covers, and Spotify links, providing accurate music recommendations for various moods and activities. Used OpenRouter's LLaMA-3.1 model to generate dynamic music suggestions based on structured user prompts, allowing for personalized recommendations."
                    git="https://github.com/GerwinMateo/MoodMatch"
                />
            </div>
            <div className="project-container">
                <ProjectHelper
                    image="tracker.png"
                    name="Inventory Tracker"
                    link="https://inventory-management-a94qked38-gerwinmateos-projects.vercel.app"
                    technologies="Typescript, React.js, Firebase, Next.js, Material-UI"
                    description="Created a full-stack web application using Next.js with TypeScript and React.js for the frontend. Implemented a secure authentication system with Firebase Authentication, enabling user login and signup. Engineered an inventory tracking system that allows users to monitor items and access detailed descriptions. Deployed the application to Vercel, utilizing CI/CD pipelines for continuous integration and updates."
                    git="https://github.com/GerwinMateo/Inventory_management-app"
                />
            </div>
            <div className="project-container">
                <ProjectHelper
                    image="discord+bot.png"
                    name="Discord Bot"
                    technologies="Python, Spotify API, OpenAI API"
                    description="Dive into the ultimate music and conversation experience with CoralBot! Powered by the Spotify API, CoralBot lets you search for albums and discover new tracks"
                    git="https://github.com/GerwinMateo/CoralBot"
                />
            </div>
        </div>
    );
}

export default Project;
