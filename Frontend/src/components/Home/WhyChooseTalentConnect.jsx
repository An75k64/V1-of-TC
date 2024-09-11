import { ReactElement, useState } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex, keyframes } from "@chakra-ui/react";
import { FcReadingEbook, FcIdea, FcGraduationCap } from "react-icons/fc";
import { Link } from "react-router-dom";

// Keyframes for rotating and changing color
const rotate = keyframes`
  0% { transform: rotate(0deg); border-color: #63b3ed; }
  25% { border-color: #f56565; }
  50% { border-color: #48bb78; }
  75% { border-color: #d69e2e; }
  100% { transform: rotate(360deg); border-color: #63b3ed; }
`;

const Feature = ({ title, text, icon, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Stack
        align="center"
        bg="white"
        boxShadow="md"
        borderRadius="md"
        p={6}
        w="100%"
        h="100%"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating circle around the icon */}
        <Flex
          w={20} h={20}
          align="center" justify="center"
          mb={4}
          borderRadius="full"
          borderWidth="4px"
          borderColor={isHovered ? "blue.400" : "transparent"}
          animation={isHovered ? `${rotate} 4s infinite linear` : "none"} // Rotating effect
        >
          <Flex
            w={16} h={16}
            align="center" justify="center"
            color={"white"}
            rounded={"full"}
            bg={"blue.400"}
          >
            {icon}
          </Flex>
        </Flex>
        <Text fontWeight={600} textAlign="center" fontSize={{ base: "lg", md: "xl" }}>
          {title}
        </Text>
        <Text color={"gray.600"} textAlign="center" fontSize={{ base: "sm", md: "md" }}>
          {text}
        </Text>
      </Stack>
    </Link>
  );
};

export default function WhyChooseTalentConnect() {
  return (
    <Box p={4} bg="blue.100">
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={700}
        mb={6}
        color="blue.400"
        textAlign="center"
      >
        Why Choose TalentConnect?
      </Text>
      <Text
        fontSize={{ base: "md", lg: "lg" }}
        color={"black"}
        mb={10}
        textAlign="center"
      >
        We offer seamless campus-to-cubicle programs, innovative recruitment solutions and personalized career services 
        to meet your unique needs.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Feature
          icon={<Icon as={FcReadingEbook} w={10} h={10} />}
          title={"Seamless Campus-to-Cubicle Programs"}
          text={"Transition smoothly from academia to the professional world."}
          link="/campus-to-cubicle"
        />
        <Feature
          icon={<Icon as={FcIdea} w={10} h={10} />}
          title={"Innovative Recruitment Solutions"}
          text={"Revolutionizing the way talent meets opportunity."}
          link="/employer"
        />
        <Feature
          icon={<Icon as={FcGraduationCap} w={10} h={10} />}
          title={"Personalized Career Services"}
          text={"Tailored to your individual goals and aspirations."}
          link="/careercraft"
        />
      </SimpleGrid>
    </Box>
  );
}
