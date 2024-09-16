import { useEffect, useState } from "react";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/RemiPHILIPPOT/repos"
                );
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des projets GitHub :",
                    error
                );
            }
        };
        fetchGitHubRepos();
    }, []);

    return (
        <Box maxW="1200px" mx="auto" py={16} px={4}>
            <Heading as="h2" size="xl" color="teal.400">
                Mes Projets GitHub
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={8} mt={8}>
                {projects.map((project: any) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        html_url={project.html_url}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ProjectList;
