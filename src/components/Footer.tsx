import { Box, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
    const MarginValue = "0.5rem";
    return (
        <Box as="footer" bg="gray.900" p={4} textAlign="center">
            <Text
                color="gray.400"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                &copy; {year} Made with
                <Box
                    as={CiHeart}
                    mx="0.5rem"
                    color="teal.300" // Couleur par défaut
                    _hover={{ color: "teal.100", transform: "scale(1.4)" }} // Styles au survol
                    transition="color 0.3s, transform 0.3s"
                />
                by{" "}
                <Link
                    href="https://github.com/RemiPHILIPPOT"
                    isExternal
                    color="teal.300"
                    marginLeft={MarginValue}
                >
                    Rémi Philippot
                </Link>
                . Tous droits réservés.
            </Text>
        </Box>
    );
};

export default Footer;
