import { Box, Button, Flex, Heading, Text, VStack, Stack } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Vec from './Vec';  // Ensure Vec component is correctly imported

const rotatingSquare = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const floatingTriangle = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function HeroSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      w="full"
      h={useBreakpointValue({ base: "150vh", md: "100vh" })}  // Increased mobile height for better fit
      bgGradient="linear(to-br, blue.300, purple.200)"
      overflow="hidden"
      position="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection={useBreakpointValue({ base: 'column', md: 'row' })}
      px={useBreakpointValue({ base: 4, md: 8 })}  // Reduced padding on mobile
      zIndex={1}
      gap={useBreakpointValue({ base: 4, md: 30 })}  // Reduced gap for mobile
    >
      {/* Background Elements */}
      <Box
        position="absolute"
        top="15%"
        left="10%"
        w="60px"
        h="60px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        opacity={0.1}
        as={motion.div}
        {...rotatingSquare}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="15%"
        w="0"
        h="0"
        borderLeft="30px solid transparent"
        borderRight="30px solid transparent"
        borderBottom="60px solid white"
        opacity={0.15}
        as={motion.div}
        {...floatingTriangle}
      />
      <Box
        position="absolute"
        top="5%"
        right="30%"
        w="100px"
        h="3px"
        bg="white"
        opacity={0.2}
        as={motion.div}
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Left Section */}
      <VStack
        w="full"
        maxW={useBreakpointValue({ base: "90%", md: "50%" })}  // Adjusted width for better mobile visibility
        justify="center"
        alignItems={useBreakpointValue({ base: "center", md: "flex-start" })}
        spacing={useBreakpointValue({ base: 4, md: 10 })}  // Adjusted spacing for mobile
        zIndex={1}
        mt={useBreakpointValue({ base: '500px', md: 10 })}  // Adjusted margin for mobile
        textAlign={useBreakpointValue({ base: "center", md: "left" })}  // Centered text for mobile
        px={useBreakpointValue({ base: 4, md: 0 })}
      >
        <Stack
          spacing={4}
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            color="white"
            fontWeight="bold"
            lineHeight="1.2"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Explore Endless Possibilities
          </Heading>
          <Text
            fontSize={useBreakpointValue({ base: "sm", md: "xl" })}
            color="white"
            maxW="lg"
            opacity={0.8}
          >
            Unleash your potential with personalized career guidance tailored to your future. Start your journey towards success now.
          </Text>
          <Link to="/contact">
            <Button
              mt={4}
              px={4}
              py={4}
              bg="white"
              color="blue.500"
              borderRadius="lg"
              width={useBreakpointValue({ base: "full", md: 60 })}
              cursor={'pointer'}
              fontSize={useBreakpointValue({ base: "md", md: "lg" })}
              _hover={{ bg: 'blue.600', color: 'white' }}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              boxShadow="xl"
              transition="0.4s"
            >
              Get Started Today
            </Button>
          </Link>
        </Stack>
      </VStack>

      {/* Right Section */}
      <Box
        w="full"
        maxW={useBreakpointValue({ base: "80%", md: "40%" })}  // Adjusted for better visibility on mobile
        textAlign={useBreakpointValue({ base: "center", md: "right" })}
        mt={useBreakpointValue({ base: -60, md: 0 })}
        display="flex"
        justifyContent="center"
        alignItems={isMobile ? "flex-end" : "center"}
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        flex={1}
        mb={useBreakpointValue({ base: 6, md: 0 })}
        px={useBreakpointValue({ base: 4, md: 0 })}
      >
        <Vec width={useBreakpointValue({ base: "60%", md: "100%",lg:'100%' })} />
      </Box>
    </Flex>
  );
}

export default HeroSection;
