import React from "react";
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
} from "@chakra-ui/react";

const Contact: React.FC = () => {
    const toast = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Logique de gestion du formulaire ici
        toast({
            title: "Message envoyé.",
            description: "Votre message a été envoyé avec succès.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box id="contact" maxW="600px" mx="auto" py={16} px={4}>
            <Heading as="h2" size="xl" color="teal.400">
                Contactez-moi
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" mt={4} isRequired>
                    <FormLabel color="gray.300">Nom</FormLabel>
                    <Input type="text" bg="gray.700" color="white" />
                </FormControl>
                <FormControl id="email" mt={4} isRequired>
                    <FormLabel color="gray.300">Email</FormLabel>
                    <Input type="email" bg="gray.700" color="white" />
                </FormControl>
                <FormControl id="message" mt={4} isRequired>
                    <FormLabel color="gray.300">Message</FormLabel>
                    <Textarea bg="gray.700" color="white" />
                </FormControl>
                <Button type="submit" colorScheme="teal" mt={4}>
                    Envoyer
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
