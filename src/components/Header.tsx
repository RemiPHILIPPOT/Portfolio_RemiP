import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            w="100%"
            bg="gray.800"
            zIndex="10"
        >
            <Flex as="nav" justify="space-around" p={4} color="white">
                <ScrollLink to="home" smooth={true} offset={-50}>
                    <Link cursor="pointer">Accueil</Link>
                </ScrollLink>
                <ScrollLink to="about" smooth={true} offset={-50}>
                    <Link cursor="pointer">À propos</Link>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} offset={-50}>
                    <Link cursor="pointer">Projets</Link>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} offset={-50}>
                    <Link cursor="pointer">Contact</Link>
                </ScrollLink>
            </Flex>
        </Box>
    );
};

export default Header;
