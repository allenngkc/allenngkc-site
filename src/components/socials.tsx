import React from 'react';
import { Button, Container, Text, Heading, Box, List, ListItem, Link, Icon } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';

function Socials() {
    return (
        <> 
            <Container>
                <Button 
                bg="#81E6D9" 
                color="black"
                mb={10}
                >
                My Projects  &gt;
                </Button>
                <Box display={{base: 'block', md: 'flex'}} alignItems="center" mb="1.5rem">
                    <Box textAlign={"text"} mb={8}>
                        <Heading as="h3" fontSize={22} mb={3}>
                            Socials
                        </Heading>
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
                        </List.Root>
                    </Box>  
                </Box>
                
            </Container>
        </>
    )
}

export default Socials