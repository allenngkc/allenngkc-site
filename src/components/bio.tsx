import React from "react";
import { Container, Box, Text, Image, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const Bio: React.FC = () => {
  return (
    <Container mb={8} pt={{base: "60px", md: "0"}}>
        <Box
          borderRadius="lg"
          w="100%"
          padding="3"
          textAlign="center"
          marginRight="6rem"
          marginBottom="1.5rem"
          marginTop="4rem"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{backdropFilter: "blur(10px)"}}
        >
          <Text>
              Hello, I'm a software engineer based in Canada!
          </Text>
        </Box>

        <Box display={{base: 'block', md: 'flex'}} alignItems="center" mb="1.5rem">
          <Box flexGrow={1} textAlign={{base: "center", md: "left"}}>
            <Text fontSize={35} fontWeight={"semibold"}>
              Allen Ng
            </Text>
            <Text mb="1.5rem">
              Software Engineer / Student @ UWaterloo
            </Text>
          </Box>  
          <Image
            borderRadius={"full"}
            boxSize={"120px"}
            src={"../public/pfp.png"}
            alt={"pfp"}
            border={"2px solid"}
            borderColor={"gray.500"}
            mx={"auto"}
          />
        </Box>

        <Box textAlign={"left"} mb={8}>
          <Heading as="h3" fontSize={22} mb={3}>
            About Me
          </Heading>
          <Text 
            textIndent={"1em"}
            fontSize={17}
            maxWidth={"35rem"} 
            wordBreak={"break-word"}
            hyphens={"auto"}
          >
            I'm currently pursuing a degree in Systems Design Engineering at the University of Waterloo.
            I have a passion in poker, finance, music production and CADing fashion accessories.
            As a self-taught developer, I am dedicated to enhancing my workflows through software!
            {/* I Started my software journey learning Unity for game development, 
            in the following years I pivoted to writing scripts for automating tasks with Python, Selenium.
            Until now I have been working/learning to solve real world problems during my co-op terms.
            In the future, I hope to explore more on MLOps, RAG, LLMOps and more! */}
          </Text>
        </Box>

        <Box textAlign="left" mb={8}>
          <Heading as="h3" fontSize={22} mb={3}>

          </Heading>

        </Box>

        <Box textAlign={"left"}>
        <Heading as="h3" fontSize={22} mb={3}>
          Bio
        </Heading>
        <Box>
          <Box display={{ base: "block", md: "flex" }} mb={1}>
            <Text
              fontWeight="bold"
              fontSize={16}
              width={{ base: "100%", md: "60px" }}
              mb={{ base: 2, md: 0 }}
            >
              2005
            </Text>
            <Text fontSize={16} ml={{ base: 0, md: 3 }}>
              Born in Hong Kong (香港)
            </Text>
          </Box>
          <Box display={{ base: "block", md: "flex" }} mb={1}>
            <Text
              fontWeight="bold"
              fontSize={16}
              width={{ base: "100%", md: "60px" }}
              mb={{ base: 2, md: 0 }}
            >
              2024
            </Text>
            <Text fontSize={16} ml={{ base: 0, md: 3 }} maxWidth={"350rem"}>
              Graduated at Albert College, Belleville
            </Text>
          </Box>
          <Box display={{ base: "block", md: "flex" }} mb={1}>
            <Text
              fontWeight="bold"
              fontSize={16}
              width={{ base: "100%", md: "60px" }}
              mb={{ base: 2, md: 0 }}
            >
              2024
            </Text>
            <Text fontSize={16} ml={{ base: 0, md: 3 }} maxWidth={"30rem"}>
              Started my studies at the University of Waterloo
            </Text>
          </Box>
          <Box display={{ base: "block", md: "flex" }} mb={1}>
            <Text
              fontWeight="bold"
              fontSize={16}
              width={{ base: "100%", md: "auto" }}
              mb={{ base: 2, md: 0 }}
            >
              2025 Jan-Apr
            </Text>
            <Text fontSize={16} ml={{ base: 0, md: 3 }} maxWidth={"30rem"}>
              Software Engineering Intern at PointClickCare
            </Text>
          </Box>
          <Box mb={1} ml={{ base: 0, md: 125 }}>
            <Text fontSize={15} color="gray.400">
              Developers API Team (Java, Spring Boot, Azure SQL, Docker)
            </Text>
          </Box>
          <Box display={{ base: "block", md: "flex" }} mb={1}>
            <Text
              fontWeight="bold"
              fontSize={16}
              width={{ base: "100%", md: "auto" }}
              mb={{ base: 2, md: 0 }}
            >
              2025 Sept-Dec
            </Text>
            <Text fontSize={16} ml={{ base: 0, md: 3 }} maxWidth={"30rem"}>
              Incoming Software Engineering Intern at PointClickCare
            </Text>
            
          </Box>
          <Box mb={1} ml={{ base: 0, md: 125 }}>
            <Text fontSize={15} color="gray.400">
              Incoming SWE Intern for fall 2025 term
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Bio;