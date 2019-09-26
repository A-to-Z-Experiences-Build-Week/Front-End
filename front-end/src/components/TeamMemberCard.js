import React from "react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/core";

function TeamMemberCard(props) {
  const { imageUrl, name, title, address, ...rest } = props;
  return (
    <Flex align="center">
      <Image src={imageUrl} borderRadius="full" size="240px" flexShrink="0" />
      <Box marginLeft="40px">
        <Heading as="h1" size="lg" color="teal.500">
          {name}
        </Heading>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </Box>
    </Flex>
  );
}

export default TeamMemberCard;
