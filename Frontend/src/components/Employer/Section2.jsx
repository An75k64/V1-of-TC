import { Box, Heading, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcBusinesswoman, FcComboChart, FcCurrencyExchange, FcCollaboration } from "react-icons/fc";

// Feature component for displaying each challenge
const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      align="center"
      p={6}
      borderRadius="lg"
      bg="white"
      shadow="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.07)",
        boxShadow: "2xl",
        bgGradient: "linear(to-r, blue.100, teal.50)",
      }}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={"blue.500"}
        mb={4}
        transition="all 0.3s ease"
        _hover={{
          bg: "blue.300",
          transform: "scale(1.2) rotate(10deg)",
          boxShadow: "0 0 20px rgba(0, 128, 255, 0.6)",
        }}
      >
        {icon}
      </Flex>
      <Text fontWeight={700} fontSize="lg" textAlign="center">
        {title}
      </Text>
      <Text color={"gray.600"} textAlign="center">
        {text}
      </Text>
    </Stack>
  );
};

export default function CollegeChallenges() {
  return (
    <Box p={{ base: 8, md: 20 }} bgGradient="linear(to-br, gray.100, gray.300)">
      <Flex justifyContent="center" alignItems="center" mb={10}>
        <Heading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          <Text as="span" color="gray.800">
            Challenges Companies Face in
          </Text><br/>
          <Text as="span" color="blue.400">
            Finding Skilled Employees
          </Text>
        </Heading>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <Feature
          icon={<Icon as={FcBusinesswoman} w={10} h={10} />}
          title={"Talent Discovery"}
          text={"Difficulty in identifying qualified candidates."}
        />
        <Feature
          icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
          title={"Inefficient Processes"}
          text={"Time-consuming and costly recruitment procedures."}
        />
        <Feature
          icon={<Icon as={FcComboChart} w={10} h={10} />}
          title={"Skills Readiness"}
          text={"New hires often require extensive training."}
        />
        <Feature
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          title={"Retention Rates"}
          text={"Challenges in retaining fresh talent."}
        />
      </SimpleGrid>
    </Box>
  );
}
