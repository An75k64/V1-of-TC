import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

function ProgramDetails() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg="white"
      fontFamily="Arial, sans-serif"
      px={6} // Add padding for mobile
      marginY={[40,20,-8]}
    >
      <Flex
        direction={['column', 'column', 'row']} // Stack on mobile, row on larger screens
        width="100%"
        maxW="1200px"
        justifyContent="space-between"
        alignItems="center"
        gap={[-20, 10, 40]} // Adjust gap for mobile
      >
        {/* Left Section */}
        <Box 
          mt={[10, 10, 48]} // Adjust margin for mobile
          width={['100%', '100%', '50%']} // Full width on mobile, half on larger screens
        >
          <Heading as="h2" size="lg" color="blue.400" fontSize={["28px", "32px", "40px"]}>
            Why Join Our Counseling?
          </Heading>
          <Heading as="h3" size="md" mt={5} color="blue.200">
            We at TalentConnect
          </Heading>
          <Text fontSize={["16px", "16px", "18px"]} lineHeight="1.5" mt={5}>
            Embark on a journey of self-discovery and career advancement with our personalized counseling services. Our expert counselors provide tailored guidance to help you navigate your career path with confidence and clarity. By joining our counseling sessions, you gain access to professional advice that is specifically designed to address your unique needs and aspirations.
          </Text>
          <Button
            as="a"
            href="#"
            mt={10}
            px={6}
            py={3}
            bg="blue.300"
            color="white"
            borderRadius="full"
            fontSize="16px"
            textDecoration="none"
            _hover={{ bg: 'blue.500' }}
            width={["100%", "auto"]} // Full-width button on mobile
            textAlign="center"
          >
            LEARN MORE
          </Button>
        </Box>

        {/* Right Section */}
        <Box 
          width={['100%', '100%', '50%']} // Full width on mobile, half on larger screens
          textAlign={['center', 'center', 'right']} // Center on mobile
          mt={["-100px", "20px", "0"]} // Adjust margin for mobile
        >
          <Image
            src="https://img.freepik.com/free-vector/study-abroad-concept-illustration_114360-7493.jpg?t=st=1725531667~exp=1725535267~hmac=7877dbe9f5b934d55f97ff13fddba4e65e1da9ae27979dd15c0f15dee1c9a874&w=740"
            alt="Illustration of a person walking towards flags representing goals"
            maxW={['100%', '80%']}
            mt={40}
          />
          <Box mt={5} 
            display="flex"
            flexDirection={['column', 'row']} // Stack stats on mobile, row on larger screens
            gap={10} // Adjust gap for stats
            justifyContent={['center', 'space-around']} // Center on mobile, spaced on larger screens
          >
            {/* Stats */}
            <Box mb={5}>
              <Heading as="h1" size="2xl" color="blue.300" m={0}>
                200+
              </Heading>
              <Heading as="h3" size="md" mt={1}>
                Students Placed
              </Heading>
              <Text fontSize="14px" color="gray.600">
                And Counting.
              </Text>
            </Box>
            <Box>
              <Heading as="h1" size="2xl" color="blue.300" m={0}>
                300+
              </Heading>
              <Heading as="h3" size="md" mt={1}>
                Students Mentored
              </Heading>
              <Text fontSize="14px" color="gray.600">
                And Counting
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ProgramDetails;
