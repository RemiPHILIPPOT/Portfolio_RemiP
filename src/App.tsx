import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FullScreenIntro from "./components/FullScreenIntro";
import Home from "./pages/Home";
import StarsBackground from "./components/StarsBackground";
import { Canvas } from "@react-three/fiber";

function App() {
    // Vérifie si l'introduction a déjà été vue
    const [showIntro, setShowIntro] = useState<boolean>(() => {
        // Essaie de récupérer la valeur depuis localStorage
        const saved = localStorage.getItem("introSeen");
        return saved === null; // Affiche l'introduction si pas encore vue
    });

    useEffect(() => {
        // Enregistre que l'introduction a été vue
        if (!showIntro) {
            localStorage.setItem("introSeen", "true");
        }
    }, [showIntro]);

    const handleEnter = () => {
        setShowIntro(false);
    };

    return (
        <ChakraProvider>
            <Canvas
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: -1,
                }}
            >
                <StarsBackground visible={showIntro} />
            </Canvas>
            <AnimatePresence>
                {showIntro ? (
                    <FullScreenIntro onEnter={handleEnter} />
                ) : (
                    <>
                        <Header />
                        <Home />
                        <Footer />
                    </>
                )}
            </AnimatePresence>
        </ChakraProvider>
    );
}

export default App;
