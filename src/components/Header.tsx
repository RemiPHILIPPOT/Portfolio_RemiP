import { Box, Flex, Heading, Text, keyframes } from "@chakra-ui/react";
import React from "react";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Header = () => {
    return (
        <Box as="header" bg="gray.800" p={4}>
            <Flex
                justify="space-between"
                align="center"
                maxW="1200px"
                mx="auto"
            >
                {/* Nom avec animation */}
                <Heading
                    as="h1"
                    size="lg"
                    color="teal.400"
                    animation={`${fadeIn} 2s ease-in-out`}
                >
                    Rémi Philippot
                </Heading>
                {/* Menu de navigation */}
                <Flex>
                    <Text
                        as="a"
                        href="/"
                        color="white"
                        mr={4}
                        _hover={{ color: "teal.300" }}
                    >
                        Accueil
                    </Text>
                    <Text
                        as="a"
                        href="/about"
                        color="white"
                        mr={4}
                        _hover={{ color: "teal.300" }}
                    >
                        À propos
                    </Text>
                    <Text
                        as="a"
                        href="/projects"
                        color="white"
                        mr={4}
                        _hover={{ color: "teal.300" }}
                    >
                        Projets
                    </Text>
                    <Text
                        as="a"
                        href="/contact"
                        color="white"
                        _hover={{ color: "teal.300" }}
                    >
                        Contact
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
