import React, { useState, useEffect } from "react";
import "../styles/projectList.css";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("src/projects/projects.json");
                const data = await response.json();
                setProjects(data.projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchData();
    }, []);

    const ProjectCard: React.FC<Project> = ({
        id,
        title,
        description,
        technologies,
        image,
        link,
    }) => {
        const [showFullContent, setShowFullContent] = useState(false);

        const toggleContent = () => {
            setShowFullContent(!showFullContent);
        };

        return (
            <div
                className={`project-card ${showFullContent ? "expanded" : ""}`}
                key={id}
            >
                {/* <h3>{title}</h3> */}
                <img src={image} alt={`Capture d'écran de ${title}`} />

                <p className="description">
                    {showFullContent
                        ? description
                        : `${description.substring(0, 100)}...`}
                </p>
                <p className="technologies">
                    Technologies : {technologies.join(", ")}
                </p>
                {/* <img src={image} alt={`Capture d'écran de ${title}`} /> */}
                {!showFullContent && (
                    <button className="see-more" onClick={toggleContent}>
                        Voir plus
                    </button>
                )}
                {showFullContent && (
                    <button className="see-less" onClick={toggleContent}>
                        Voir moins
                    </button>
                )}
                {link !== "" ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        Voir le projet
                    </a>
                ) : (
                    ""
                )}
            </div>
        );
    };

    return (
        <div className="project">
            <div className="project_title">
                <span className="wave">Mes Projets</span>
            </div>
            <div className="project-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
