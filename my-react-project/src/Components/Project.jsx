
function ProjectHelper ({ image, name, technologies, description }) {
    return (
        <div className="project">
            <img src={image} alt="Project" className="project-image" />
            <div className="project-details">
                <h1 className="project-name">{name}</h1>
                <h3 className="project-title">{technologies}</h3>
                <p className="project-description">{description}</p>
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
                    image="path/to/your/project-image.jpg"
                    name="Portfolio Website"
                    technologies="React, HTML, CSS"
                    description="A web application built with React frontend, utilizing HTML and CSS for structure and styling."
                />
            </div>
            <div className="project-container">
                <ProjectHelper
                    image="path/to/another-project-image.jpg"
                    name="example"
                    technologies="HTML, CSS, JavaScript"
                    description="A static website created using HTML, CSS, and vanilla JavaScript."
                />
            </div>
            {/* Add more ProjectHelper components wrapped in .project-container */}
        </div>
    );
}


export default Project;
