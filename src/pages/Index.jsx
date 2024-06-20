import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={4}>Music Streaming Service</Heading>
        <Box boxSize="300px" mb={4}>
          <Image src="/images/album-cover.jpg" alt="Album Cover" boxSize="100%" objectFit="cover" borderRadius="md" />
        </Box>
        <Text fontSize="xl" mb={4}>Now Playing: Song Title - Artist Name</Text>
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="outline" mr={2}>Previous</Button>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" mr={2}>Play</Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="outline" mr={2}>Pause</Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="outline">Next</Button>
        </Box>
        <Text fontSize="md" color="gray.500">Enjoy your favorite music anytime, anywhere.</Text>
      </VStack>
    </Container>
  );
};

export default Index;