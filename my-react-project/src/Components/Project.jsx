
function ProjectHelper ({ image, name, link, git, technologies, description }) {
    return (
        <div className="project">
            <img src={image} alt="Project" className="project-image" />
            <div className="project-details">
                <h1 className="project-name">
                    <a className="project-link" href={link} target="_blank">{name} 
                        <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
                    </a>
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
    return (
        <div className="project-list">
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
                    image="path/to/another-project-image.jpg"
                    name="example"
                    link=""
                    technologies="HTML, CSS, JavaScript"
                    description="A static website created using HTML, CSS, and vanilla JavaScript."
                />
            </div>
            {/* Add more ProjectHelper components wrapped in .project-container */}
        </div>
    );
}


export default Project;
