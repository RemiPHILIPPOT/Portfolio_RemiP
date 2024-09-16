import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import About from "../components/About";
import ProjectList from "../components/ProjectList";
import Contact from "./Contact";
import { motion, Transition } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

// Define the transition types
const scrollHintTransition: Transition = {
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse",
};

const Home: React.FC = () => {
    // Animation for the scroll down hint
    const scrollHintVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Responsive padding based on viewport size
    const paddingX = useBreakpointValue({ base: "4", md: "8" });

    return (
        <Box bg="gray.800">
            {/* Introduction Section */}
            <Box
                id="home"
                height="100vh"
                bg="gray.800"
                color="white"
                p={paddingX}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                position="relative"
                overflow="hidden"
            >
                <About />

                {/* Scroll down hint */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={scrollHintVariants}
                    transition={scrollHintTransition}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "absolute",
                        bottom: "20px",
                    }}
                >
                    <Text fontSize="sm" color="gray.400" mb={2}>
                        Faites défiler pour découvrir mes projets
                    </Text>
                    <FaArrowDown size={24} color="gray.400" />
                </motion.div>
            </Box>

            {/* Content Sections */}
            <Box
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ProjectList />
                <Contact />
            </Box>
        </Box>
    );
};

export default Home;
