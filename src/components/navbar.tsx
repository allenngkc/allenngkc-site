import React from 'react'
import {Button, Container, HStack, Text} from '@chakra-ui/react'
import { MdDoDisturb } from 'react-icons/md';

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

    const handleNavClick = (page: string) => {
        setActivePage(page);
        var pageElement = "";
        if (page === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        } else if (page === 'Projects') {
            pageElement = 'projects';
        } else if (page === 'Notes') {
            pageElement = 'notes';
        } else if (page === 'About') {
            pageElement = 'about-me';
        }
        
        const aboutSection = document.getElementById(pageElement);
        if (!aboutSection) return;
        const offset = -80;
        const y = aboutSection?.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <Container 
            padding="1rem" 
            zIndex="100" 
            position="fixed" 
            top="0" 
            left="0" 
            right="0"
            bg="rgba(32, 32, 35, 0.65)"
            backdropFilter="saturate(180%) blur(10px)"
            >
            <HStack alignContent="center" justifyContent="center">
                <NavButton label="Home" active={activePage === 'Home'} onClick={() => handleNavClick('Home')}/>
                <NavButton label="About" active={activePage === 'About'} onClick={() => handleNavClick('About')}/>
                <NavButton label="Projects" active={activePage === 'Projects'} onClick={() => handleNavClick('Projects')}/>
                <NavButton label="Notes" active={activePage === 'Notes'} onClick={() => handleNavClick('Notes')}/>
            </HStack>
        </Container>
    )
}

export default NavBar