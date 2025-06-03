import React from 'react'
import {Button, Container, HStack, Text} from '@chakra-ui/react'

const NavButton: React.FC<{ label: string; active: boolean; onClick:() => void}> = ({label, active, onClick}) => (
    <Button
        variant="plain"
        bg={active ? '#99caca' : '#202023'}
        borderRadius={0}
        padding="0.5rem 1rem"
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
            fontSize={18}
            _hover={{}}
        >
            {label}
        </Text>
    </Button>
)

const NavBar: React.FC = () => {
    const [activePage, setActivePage] = React.useState<string>('Home')

    return (
        <Container padding="1rem" zIndex="100" position="fixed" top="0" left="0" right="0">
            <HStack alignContent="center" justifyContent="center">
                <NavButton label="Home" active={activePage === 'Home'} onClick={() => setActivePage('Home')}/>
                <NavButton label="About" active={activePage === 'About'} onClick={() => setActivePage('About')}/>
                <NavButton label="Projects" active={activePage === 'Projects'} onClick={() => setActivePage('Projects')}/>
                <NavButton label="Notes" active={activePage === 'Notes'} onClick={() => setActivePage('Notes')}/>
            </HStack>
        </Container>
    )
}

export default NavBar