import { Box, Heading, Text, Link } from "@chakra-ui/react";
import React from "react";

interface ProjectProps {
    name: string;
    description: string;
    html_url: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
    name,
    description,
    html_url,
}) => {
    return (
        <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg="gray.700"
        >
            <Heading fontSize="xl" color="teal.300">
                {name}
            </Heading>
            <Text mt={4} color="gray.300">
                {description}
            </Text>
            <Link href={html_url} color="teal.500" mt={4} isExternal>
                Voir sur GitHub
            </Link>
        </Box>
    );
};

export default ProjectCard;
