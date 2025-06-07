import { Button, Container, Heading, Box, List, ListItem, Link, Icon } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

function Socials() {
    return (
        <> 
            <Container>
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
                                <Link href="https://github.com/allenngkc" target="_blank">
                                    <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    >
                                        @allenngkc
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Icon mr={2}><IoLogoLinkedin/></Icon>
                                <Link href="https://linkedin.com/allenngkc" target="_blank">
                                    <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    >
                                        @allenngkc
                                    </Button>
                                </Link>
                            </ListItem>
                        </List.Root>
                    </Box>  
                </Box>
                
            </Container>
        </>
    )
}

export default Socials