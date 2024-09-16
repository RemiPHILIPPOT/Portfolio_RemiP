import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
} from "@chakra-ui/react";

const Contact = () => {
    return (
        <Box maxW="600px" mx="auto" py={16} px={4}>
            <Heading as="h2" size="xl" color="teal.400">
                Contactez-moi
            </Heading>
            <form>
                <FormControl id="name" mt={4}>
                    <FormLabel color="gray.300">Nom</FormLabel>
                    <Input type="text" bg="gray.700" color="white" />
                </FormControl>
                <FormControl id="email" mt={4}>
                    <FormLabel color="gray.300">Email</FormLabel>
                    <Input type="email" bg="gray.700" color="white" />
                </FormControl>
                <FormControl id="message" mt={4}>
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
