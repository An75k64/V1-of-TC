import React from "react";
import { Container, Stack, Flex,  Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const OCSection3 = () => {
  const cardData = [
    {
      title: "Recruitment fairs",
      imageUrl:
        "https://www.cubsucc.com/contentFiles/components/GDEventBooking/29/large/careersfairUCCedot.jpg",
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
    <Container maxW={"2x1"} bg="#B7CFF9"  minH={"80vh"}>
     <Flex justifyContent="center" alignItems="center">
  <Heading
    fontFamily="ClashDisplay"
    fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} // Responsive font size
    fontWeight="bolder"
    p="2"
   mt={{ base: 10, md: 20 }}
   mb={{ base: 10, md: 20 }}
  >
    <Text as="span" color="black">
      Explore Our Proven
    </Text>
    <Text as="span" color="blue.400">
      {' '}OffCampus Solution
    </Text>
  </Heading>
</Flex>

      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        justify="space-around"
        spacing={10}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            //maxW={{ base: "100%", md: "md" }}
            w={"full"}
            h={"50vh"}
            overflow="hidden"
            position="relative"
            borderRadius="xl"
            boxShadow="lg"
            bgSize="cover"
            bgImage={`url(${card.imageUrl})`}
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
              <Heading fontFamily={"ClashDisplay"} textTransform={"uppercase"} color="blue.400" as="h3" size="md" mb={2}>
                {card.title} <br /> <br />
              </Heading>
              <Text text-align= {"justify"}>{card.description}</Text>
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
              <Heading fontFamily={"ClashDisplay"}  as="h3" size="md">
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
