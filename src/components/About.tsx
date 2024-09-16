import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
    return (
        <Box maxW="1200px" mx="auto" py={16} px={4}>
            <Heading as="h2" size="xl" color="teal.400">
                À propos de moi
            </Heading>
            <Text mt={4} fontSize="lg" color="gray.700">
                Je suis un développeur passionné avec une expertise en
                JavaScript, TypeScript, Python, et bien plus. Mon objectif est
                de créer des interfaces utilisateur modernes et fonctionnelles.
            </Text>
        </Box>
    );
};

export default About;
