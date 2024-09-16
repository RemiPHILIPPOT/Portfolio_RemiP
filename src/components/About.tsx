import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
    return (
        <Box maxW="1200px" mx="auto" py={16} px={4}>
            <Heading as="h2" size="xl" color="teal.400">
                À propos de moi
            </Heading>
            <Text mt={4} fontSize="lg" color="gray.200">
                Développeur Full-Stack passionné, motivé par la création
                d'applications web innovantes et fonctionnelles. Je mets en
                œuvre des solutions élégantes pour transformer des idées
                complexes.
            </Text>
            <Text mt={4} fontSize="lg" color="gray.200">
                Fort d'une expérience significative chez{" "}
                <strong>RANDSTAD DIGITAL</strong> et <strong>WSHOP</strong>, je
                suis prêt à relever de nouveaux défis technologiques.
            </Text>
            <Text mt={4} fontSize="lg" color="gray.200">
                Explorez mes projets récents sur mon GitHub et découvrez comment
                je peux apporter une valeur ajoutée à vos défis technologiques.
            </Text>
        </Box>
    );
};

export default About;
