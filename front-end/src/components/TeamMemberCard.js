import React from "react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/core";

function TeamMemberCard(props) {
  const { imageUrl, name, title, location } = props;
  return (
    <Flex marginX="100px" align="center">
      <Box>
        <Image src={imageUrl} borderRadius="full" size="240px" />
      </Box>
      <Box marginLeft="40px">
        <Heading as="h1" size="lg" color="teal.500">
          {name}
        </Heading>
        <Text>{title}</Text>
        <Text>{location}</Text>
      </Box>
    </Flex>
  );
}

export default TeamMemberCard;
