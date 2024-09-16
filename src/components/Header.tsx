import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            w="100%"
            bg="gray.800"
            zIndex="10"
            boxShadow="md"
        >
            <Flex
                as="nav"
                direction={{ base: "column", md: "row" }}
                justify="space-around"
                p={4}
                color="white"
                align="center"
            >
                <RouterLink to="/">
                    <ChakraLink
                        cursor="pointer"
                        _hover={{
                            textDecoration: "underline",
                            color: "gray.400",
                        }}
                        aria-label="Accueil"
                    >
                        Accueil
                    </ChakraLink>
                </RouterLink>
                <RouterLink to="/about">
                    <ChakraLink
                        cursor="pointer"
                        _hover={{
                            textDecoration: "underline",
                            color: "gray.400",
                        }}
                        aria-label="À propos"
                    >
                        À propos
                    </ChakraLink>
                </RouterLink>
                <RouterLink to="/portfolio">
                    <ChakraLink
                        cursor="pointer"
                        _hover={{
                            textDecoration: "underline",
                            color: "gray.400",
                        }}
                        aria-label="Projets"
                    >
                        Projets
                    </ChakraLink>
                </RouterLink>
                <RouterLink to="/contact">
                    <ChakraLink
                        cursor="pointer"
                        _hover={{
                            textDecoration: "underline",
                            color: "gray.400",
                        }}
                        aria-label="Contact"
                    >
                        Contact
                    </ChakraLink>
                </RouterLink>
            </Flex>
        </Box>
    );
};

export default Header;
