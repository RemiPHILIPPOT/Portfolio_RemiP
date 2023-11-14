// Header.tsx
import React, { useEffect, useState } from "react";
import "../src/styles/header.css";
import { Link } from "react-router-dom";
import LogoRp from "../src/logo/logo_rp.png";

interface Author {
    firstName: string;
    lastName: string;
    description: string;
    github: string;
    githubLogo: string;
    linkedin: string;
    linkedinLogo: string;
}

const Header: React.FC = () => {
    /*const navigate = useNavigate();

    const handleNavigation = (to: string) => {
        navigate(to);
    };*/

    const [author, setAuthor] = useState<Author | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/projects/projects.json");
                const data = await response.json();
                setAuthor(data.author);
            } catch (error) {
                console.error("Error fetching author:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={LogoRp} alt="Logo Rémi PHILIPPOT" />
            </Link>
            <nav className="header_nav">
                <ul>
                    <li className="header_link">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="header_link">
                        <Link to="/projects">Projets</Link>
                    </li>
                    {/* Ajoutez d'autres liens selon votre besoin */}
                </ul>
            </nav>
            {author && (
                <div className="author-info">
                    <h2>{`${author.firstName} ${author.lastName}`}</h2>
                    <p>{author.description}</p>
                    <div className="author_social">
                        <a className="author_link" href={author.github}>
                            <img
                                className="author_logo"
                                src={author.githubLogo}
                                alt="Logo Github"
                            />
                        </a>
                        <a className="author_link" href={author.linkedin}>
                            <img
                                className="author_logo"
                                src={author.linkedinLogo}
                                alt="Logo Linkedin"
                            />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
