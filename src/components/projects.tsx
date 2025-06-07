import { Container, Box, Text, Heading, Image, SimpleGrid, Link } from '@chakra-ui/react';
import pathexploraGif from '../assets/pathexplora.gif';
import allenngkcsite from '../assets/allenngkcsite.png';
import sneakertracking from '../assets/sneakertrackingt.png';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "PathExplora",
        description: "An interactive pathfinding visualiation application made with pygame",
        image: pathexploraGif,
        link: "https://github.com/allenngkc/PathExplora"
    },
    {
        title: "Vanguard",
        description: "MLH Hackathon OneHacks II Most Creative Project Winner - sneaker inventory tracking software built with MERN stack",
        image: sneakertracking,
        link: "https://devpost.com/software/vanguard-track-your-sneaker-inventory"
    },
    {
        title: "Portfolio Website",
        description: "A React website with Quartz-powered digital garden. Built with Chakra UI and TypeScript",
        image: allenngkcsite,
        link: "https://github.com/allenngkc/allenngkc-site"
    }
]

function Projects() {
    return (
        <Container mb={8} id='projects'>  
            <Box textAlign={"left"} mb={8}>
                <Heading as="h3" fontSize={22}>
                    Projects
                </Heading>
                <hr style={{
                    width: "90px",
                    height: "3px",
                    backgroundColor: "#4A5568",
                    border: "none",
                    margin: "0 0 32px 0"
                }} />
                <Box borderBottom="2px" borderColor="gray.200" mb={6} width="550px">
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.link}
                            target="_blank"
                        >
                            <Box
                                borderWidth="5px"
                                borderRadius="xl"
                                overflow="hidden"
                                bg="#A0E7E5"
                                p={4}
                                _hover={{ 
                                    transform: 'translateY(-4px)',
                                    boxShadow: 'lg',
                                    bg: "#8DD9D6",
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                cursor="pointer"
                                transition="all 0.2s ease-in-out"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    objectFit="cover"
                                    mb={3}
                                />
                                <Heading as="h4" size="md" mb={2} color="black">
                                    {project.title}
                                </Heading>
                                <Text fontSize="sm" color="gray.600">
                                    {project.description}
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
                </Box>
            </Box>
        </Container>
    );
}

export default Projects;