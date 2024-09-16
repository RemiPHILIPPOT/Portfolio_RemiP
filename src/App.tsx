import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FullScreenIntro from "./components/FullScreenIntro";
import Home from "./pages/Home";
import StarsBackground from "./components/StarsBackground";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

function App() {
    const [showIntro, setShowIntro] = useState(true);

    const handleEnter = () => {
        setShowIntro(false);
    };

    return (
        <ChakraProvider>
            {/* Affichage des étoiles en arrière-plan */}
            <Canvas
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            >
                <StarsBackground visible={showIntro} />
            </Canvas>

            {showIntro ? (
                <FullScreenIntro onEnter={handleEnter} />
            ) : (
                <>
                    {/* Le header reste visible après l'intro */}
                    <Header />

                    {/* Contenu du portfolio accessible en scroll */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Home />
                        <Footer />
                    </motion.div>
                </>
            )}
        </ChakraProvider>
    );
}

export default App;
