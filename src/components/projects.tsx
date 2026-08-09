import { Container, Box, Text, Heading, Image, SimpleGrid, Link } from '@chakra-ui/react';
import pathexploraGif from '../assets/pathexplora.gif';
import spectrasphereGif from '../assets/spectrasphere.gif';
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
        title: "SpectraSphere",
        description: "Hack the North 2025 2nd place winner of the Snapchat Spectacles AR Challenge - AR storytelling built with Cohere and Google Gemini",
        image: spectrasphereGif,
        link: "https://devpost.com/software/htn-zq6138"
    },
    {
        title: "PathExplora",
        description: "An interactive pathfinding visualization application made with pygame",
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
        <Container mb={8} id='projects' maxW="2xl" px={{base: 4, md: 8}}>  
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
                <Box 
                    borderBottom="2px" 
                    borderColor="gray.200" 
                    mb={6} 
                    width={{base: "100%", md: "550px"}}
                    maxWidth="100%"
                >
                    <SimpleGrid 
                        columns={{ base: 1, sm: 1, md: 2 }} 
                        gap={{base: 4, md: 6}}
                        width="100%"
                    >
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
                                width="100%"
                                maxWidth="100%"
                                h="100%"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    objectFit="cover"
                                    mb={3}
                                    width="100%"
                                    height={{base: "200px", md: "170px"}}
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