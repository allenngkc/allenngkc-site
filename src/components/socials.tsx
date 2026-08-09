import { Button, Container, Heading, Box, List, ListItem, Icon } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

function Socials() {
    return (
        <> 
            <Container maxW="2xl">
                <Box display={{base: 'block', md: 'flex'}} alignItems="center" mb="1.5rem">
                    <Box textAlign={"left"} mb={8}>
                        <Heading as="h3" fontSize={22}>
                            Socials
                        </Heading>
                        <hr style={{
                            width: "80px",
                            height: "3px",
                            backgroundColor: "#4A5568",
                            border: "none",
                            margin: "0 0 16px 0"
                        }} />
                        <List.Root>
                            <ListItem>
                                <Icon mr={2}><IoLogoGithub/></Icon>
                                <Button asChild variant="ghost">
                                    <a href="https://github.com/allenngkc" target="_blank" rel="noopener noreferrer">
                                        @allenngkc
                                    </a>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Icon mr={2}><IoLogoLinkedin/></Icon>
                                <Button asChild variant="ghost">
                                    <a href="https://linkedin.com/in/allenngkc" target="_blank" rel="noopener noreferrer">
                                        @allenngkc
                                    </a>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Icon mr={2}><IoLogoTwitter/></Icon>
                                <Button asChild variant="ghost">
                                    <a href="https://x.com/allenngkc" target="_blank" rel="noopener noreferrer">
                                        @allenngkc
                                    </a>
                                </Button>
                            </ListItem>
                        </List.Root>
                    </Box>  
                </Box>
                
            </Container>
        </>
    )
}

export default Socials