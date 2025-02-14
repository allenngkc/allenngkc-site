import React from 'react'
import {Button, Container, HStack, Text} from '@chakra-ui/react'

const NavButton: React.FC<{ label: string; active: boolean; onClick:() => void}> = ({label, active, onClick}) => (
    <Button
        variant="plain"
        bg={active ? '#99caca' : '#202023'}
        _hover={{
            textDecoration: 'underline', 
            borderColor: 'transparent', 
            textDecorationColor: active ? 'black' : 'white'
        }}
        _focus={{outline: 'none'}}
        onClick={onClick}
    >   
        <Text 
            color={active ? 'black' : 'white'}
            fontFamily="Lato, sans-serif"
            _hover={{}}
        >
            {label}
        </Text>
    </Button>
)

const NavBar: React.FC = () => {
    const [activePage, setActivePage] = React.useState<string>('Home')

    return (
        <Container as="nav" padding="1rem" position="fixed" top="0" zIndex="100" >
            <HStack>
                <NavButton label="Home" active={activePage === 'Home'} onClick={() => setActivePage('Home')}/>
                <NavButton label="About" active={activePage === 'About'} onClick={() => setActivePage('About')}/>
                <NavButton label="Projects" active={activePage === 'Projects'} onClick={() => setActivePage('Projects')}/>
                <NavButton label="Contact" active={activePage === 'Contact'} onClick={() => setActivePage('Contact')}/>
            </HStack>
        </Container>
    )
}

export default NavBar