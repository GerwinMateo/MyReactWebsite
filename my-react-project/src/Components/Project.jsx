import { useEffect, useState } from "react";
import "./Project.css"

function ProjectHelper({ image, name, link, git, technologies, description }) {
    const isLinked = !!link;
    return (
        <div className="project">
            <img src={image} alt="Project" className="project-image" />
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
    });

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
