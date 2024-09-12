import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Heading,
  Container,
} from "@chakra-ui/react";
import OCSection3 from "./OCSection3";
import OCSection4 from "./OCSection4";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function OffCampus() {
   
  return (
    <>
      {/* Section 1 */}
         <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        'url(https://images.pexels.com/photos/3182766/pexels-photo-3182766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
      zIndex={1}
      position="relative"
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={"4xl"} // Adjust the width of the stack to make it more rectangular
          spacing={6}
          position="absolute"
          align="center" // Center the text box horizontally
          textAlign="center" // Align text inside the box to the center
        >
          <MotionBox
            bg="rgba(245, 245, 245, 0.8)"
            p={10}
            borderRadius="md"
            color="black"
            w="full"
            maxW="3xl" // Ensure it's wider
            minH="auto" // Adjust the height to make it rectangular
            initial={{ opacity: 0, y: 50 }} // Starting state for animation (hidden and lower on the y-axis)
            animate={{ opacity: 1, y: 0 }} // Ending state for animation (fully visible and in place)
            transition={{ duration: 0.8, ease: "easeOut" }} // Control the speed and style of animation
          >
            <Heading
              fontFamily={"ClashDisplay"}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#1A365D"
            >
              OffCampus Gateway:
            </Heading>
            <Heading
              fontFamily={"ClashDisplay"}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#FFFFFF"
            >
              Your Path to Success
            </Heading>
            <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="black">
              TalentConnect's OffCampus service offers a platform for recent graduates and job seekers to explore diverse career opportunities. We organize job fairs, networking events, and provide access to exclusive job postings to help you find the perfect fit for your skills and ambitions.
            </Text>
          </MotionBox>
        </Stack>
      </VStack>
    </Flex>

      {/* Section 2 */}
      <Flex
        mt={135}
        w={"full"}
        h={"60vh"}
        backgroundImage={
          'url(https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg)'
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundAttachment={"fixed"} // This makes the background image stay in place
        zIndex={1}
        position="relative"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, transparent, blackAlpha.600)"}
        >
          <Stack maxW={"2xl"} spacing={6} position="absolute" left="8" >
            <Box
              bg="#F0F4F8"
              p={10}
              borderRadius="md"
              textAlign="left"
              color="black"
              maxW="lg"
              minH="500px" // Increase the height of the box
            >
              <Heading fontFamily={"ClashDisplay"} fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" color="blue.400">
               TalentConnect: Your Partner in OffCampus Success
              </Heading>
              <Text mt={4} fontSize={{ base: "1x1", md: "2x1" }} color="gray.800">
                Unlock a world of career opportunities with TalentConnect's OffCampus service. 
                Designed for recent graduates and job seekers, we facilitate job fairs, networking events, and exclusive job listings to connect you with top employers. 
                Our dedicated team ensures you have access to the best opportunities that match your skills and ambitions. 
                Trust TalentConnect to guide you through a successful career transition and help you achieve your professional dreams.
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    

      {/* Section 3 */}
        <OCSection3 />

      {/* Section 4 */}
        <OCSection4 />
    </>
  );
}