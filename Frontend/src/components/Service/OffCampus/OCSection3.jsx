import React from "react";
import { Container, Stack, Flex, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const OCSection3 = () => {
  const cardData = [
    {
      title: "Recruitment Fairs",
      imageUrl:
        "https://www.wbmdfc.org/public/images/Gallery/MEGA%20JOB%20FAIR/DSC_2127_1582189496.jpg",
      description:
        "We organize targeted job fairs in major cities, bringing together top employers and qualified candidates for face-to-face networking and interviews.",
    },
    {
      title: "Online Job Boards",
      imageUrl:
        "https://resumegenius.com/wp-content/uploads/best-job-boards.png",
      description:
        "Talentconnect’s comprehensive job portal connects employers with a vast pool of skilled candidates, enabling efficient off-campus hiring and matching.",
    },
    {
      title: "Virtual Interviews",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1666625102659-12565c311855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fFZJUlRVQUwlMjBJTlRFUlZJRVdTfGVufDB8fDB8fHww",
      description:
        "Talentconnect offers seamless virtual interview capabilities, allowing job seekers to connect with employers from the comfort of their own homes.",
    },
  ];

  return (
    <Container maxW="full" bg="#B7CFF9" minH="80vh" py={10} px={{ base: 4, md: 8 }}>
      <Flex justifyContent="center" alignItems="center" mb={10}>
        <Heading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bolder"
          textAlign="center"
        >
          <Text as="span" color="black">
            Explore Our Proven
          </Text>
          <Text as="span" color="blue.400">
            {" "}OffCampus Solution
          </Text>
        </Heading>
      </Flex>

      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        spacing={{ base: 8, md: 10 }}
        justify="space-around"
        align="center"
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            w={{ base: "100%", md: "30%" }}
            h={{ base: "60vh", md: "50vh" }}
            overflow="hidden"
            position="relative"
            borderRadius="xl"
            boxShadow="lg"
            bgImage={`url(${card.imageUrl})`}
            bgSize="cover"
            bgPosition="center"
            _hover={{
              _before: {
                content: `""`,
                position: "absolute",
                left: 0,
                bottom: 0,
                w: "100%",
                h: "100%",
                bg: "rgba(0,0,0,0.5)",
                zIndex: 1,
                transition: "all 0.5s ease",
              },
              "> .content": {
                transform: "translateY(0)",
                opacity: 1,
                transition: "all 0.5s ease",
              },
              "> .titleBox": {
                opacity: 0,
              },
            }}
          >
            <Box
              position="absolute"
              left={0}
              bottom={0}
              w="100%"
              h="100%"
              p={4}
              bg="rgba(0,0,0,0.7)"
              zIndex={2}
              color="white"
              className="content"
              transform="translateY(100%)"
              opacity={0}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Heading fontFamily="ClashDisplay" textTransform="uppercase" color="blue.400" as="h3" size="md" mb={2}>
                {card.title}
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} textAlign="justify">
                {card.description}
              </Text>
            </Box>
            <Box
              position="relative"
              left={0}
              bottom={0}
              w="100%"
              p={4}
              bg="rgba(0,0,0,0.5)"
              zIndex={3}
              color="white"
              className="titleBox"
              textAlign="center"
            >
              <Heading fontFamily="ClashDisplay" as="h3" size="md">
                {card.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default OCSection3;
