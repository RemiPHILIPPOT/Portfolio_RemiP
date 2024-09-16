import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FullScreenIntroProps {
    onEnter: () => void;
}

// Variants pour les animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const FullScreenIntro: React.FC<FullScreenIntroProps> = ({ onEnter }) => {
    return (
        <Flex
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            h="100vh"
            align="center"
            justify="center"
            bg="gray.900"
            direction="column"
        >
            {/* Phrase d'accroche */}
            <Text
                as={motion.p}
                variants={itemVariants}
                fontSize="xl"
                color="gray.300"
                mb={4}
            >
                Bienvenue dans mon univers créatif
            </Text>

            {/* Nom animé */}
            <Heading
                as={motion.h1}
                size="4xl"
                color="teal.400"
                fontWeight="bold"
                variants={itemVariants}
            >
                Rémi Philippot
            </Heading>

            {/* Bouton pour entrer dans le site */}
            <Button
                as={motion.button}
                variants={itemVariants}
                mt={8}
                size="lg"
                colorScheme="teal"
                onClick={onEnter}
            >
                Entrer dans le portfolio
            </Button>
        </Flex>
    );
};

export default FullScreenIntro;
