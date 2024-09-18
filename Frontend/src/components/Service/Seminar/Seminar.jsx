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
  Image,
} from "@chakra-ui/react";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { motion } from "framer-motion";
import './globals.css'
import seminarImage from "../../../assets/images/Seminar/s.jpg";

// Create motion components for animation
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);


export default function OnCampus() {

  return (
  
    <>
    <Flex
      direction="column"
      bgColor="#FEE28F"  // Set background color here
    >
    
  <Flex
  w="full"
  mt={{ base: "10" }}
  h={{ base: "70vh", md: "100vh" }}
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="center"
  p={{ base: 0, md: 10 }}
  bgColor="#FEE28F"
  position="relative"
  overflow="hidden"
  borderRadius="lg"
>
  {/* Animated Shapes 
  <div className="shape clip-path"></div> */}

  {/* Main Content */}
  <Flex
    direction={{ base: "column", md: "row" }}
    w="full"
    h="full"
    align="center"
    justify="center"
    gap={{ base: 4, md: 8 }}
    zIndex={1}
  >
    {/* Text Side */}
    <Flex
      flex={1}
      direction="column"
      align={{ base: "center", md: "flex-start" }}
      justify="center"
      color="black"
      maxW={{ base: "100%", md: "50%" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <VStack align="center" spacing={{ base: 4, md: 6 }}>
        <MotionHeading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#2A4365"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Join Our
        </MotionHeading>
        <MotionHeading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#FC8E53"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transformative Seminars
        </MotionHeading>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW="xl" align="center">
          Expand your expertise with our expert-led seminars, designed to provide practical insights and networking opportunities. Enhance your personal and professional growth in an engaging and interactive environment.
        </Text>
      </VStack>
    </Flex>

    {/* Image Side */}
    <Flex
      flex={1}
      justify="center"
      align="center"
      w="full"
      h={{ base: "100%", md: "100%" }}
      overflow="hidden"
    >
      <Image
        className="animated-image"
        src={seminarImage}
        alt="OnCampus"
        objectFit="cover"
        boxSize={{ base: "100%", md: "100%" }}
        filter="brightness(1)"
      />
    </Flex>
  </Flex>
</Flex>



      {/* Section 1 
     <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
      zIndex={1}
      position="relative"
     
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={"4xl"} // Ensure the stack is wide enough for a horizontal rectangle
          spacing={6}
          align="center" // Center the text box horizontally
          textAlign="center" // Center text inside the box
        >
          <MotionBox
            bg="#FFFFFF"
            p={10}
            borderRadius="md"
            
            color="#E2E8F0"
           
            maxW="3xl" // Optional: ensure a maximum width
            minH="auto" // Ensure a minimum height for rectangular shape
            initial={{ opacity: 0, x: -50 }} // Start from invisible and off-screen
            animate={{ opacity: 1, x: 0 }} // Fade in and slide in
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Stack spacing={4} align="center" textAlign="center">
              <MotionHeading
                fontFamily={"ClashDisplay"}
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="bold"
                color="#2A4365"
                initial={{ opacity: 0 }} // Start from invisible
                animate={{ opacity: 1 }} // Fade in
                transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
              >
                Join Our
              </MotionHeading>
              <MotionHeading
                fontFamily={"ClashDisplay"}
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="bold"
                color="#F6E05E"
                initial={{ opacity: 0 }} // Start from invisible
                animate={{ opacity: 1 }} // Fade in
                transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
              >
                 Transformative Seminars
              </MotionHeading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="black">
                Expand your expertise with our expert-led seminars, designed to provide practical insights and networking opportunities. Enhance your personal and professional growth in an engaging and interactive environment.
              </Text>
            </Stack>
          </MotionBox>
        </Stack>
      </VStack>
    </Flex> */}

      {/* Section 2 */}
  <Flex
      mt={{base:10}}
      w="full"
      h={{ base: "40vh", md: "50vh", lg: "60vh" }} // Responsive height
      backgroundImage={
        'url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'

      }
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundAttachment="fixed" // This makes the background image stay in place
      zIndex={1}
      position="relative"
    >
      <VStack
        w="full"
        h="full" // Matches the height of the image
        justify="center"
        alignItems="flex-start" // Aligns content to the left
        px={{ base: 4, md: 6, lg: 0 }}
        bgGradient="linear(to-r, blackAlpha.600, transparent)" // Gradient from left to transparent
      >
       
          <Box
            bg="#DED0C6"
            p={4}
            borderRadius="md"
            textAlign="left"
            color="black"
            w={{ base: "full", md: "50%", lg: "40%" }} // Width for the text box
            h="100%" // Ensures the height matches the image
          >
            <Flex justifyContent="center" alignItems="center">
                <Heading
                  fontFamily="ClashDisplay"
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} // Responsive font size
                  fontWeight="bold"
                  p="2"
                >
                  <Text as="span" color="black">
                     Why Should
                  </Text>
                  <Text as="span" color="blue.400">
                    {' '}You Join?
                  </Text>
                </Heading>
              </Flex>

            <Text
              mt={4}
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              fontWeight="400"
              color="black"
            >
              Our seminars offer a unique opportunity to gain expert knowledge from industry leaders and subject matter experts. By attending, you'll have the chance to network with like-minded professionals, expanding your professional connections. You'll acquire practical skills that can be immediately applied to your work, ensuring you stay updated with the latest trends and developments in your field. Our interactive sessions, including discussions, Q&A segments, and hands-on workshops, provide a dynamic and engaging learning experience.

            </Text>
          </Box>
      
      </VStack>
    </Flex>

      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <Section4 />
      </Flex>
    </>
  );
}