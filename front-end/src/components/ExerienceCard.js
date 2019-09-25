import React from "react";
import { Box, Image, Text, Icon, Flex } from "@chakra-ui/core";

function ExperienceCard(props) {
  return (
    <Box width="210px" {...props}>
      <Image
        src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
        height="280px"
        width="100%"
        maxWidth="400px"
        objectFit="cover"
        bg="gray.100"
        marginBottom="12px"
      />
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        color="gray.500"
        fontSize="sm"
      >
        Wakarusa
      </Text>
      <Text fontWeight="bold" color="gray.700">
        Farm stay in Indiana Amish country
      </Text>
      <Text fontSize="sm" marginTop="5px">
        From $240/person
      </Text>
      <Flex align="center" fontSize="xs" color="teal.500" marginTop="5px">
        <Box as="span" fontWeight="bold">
          5.0
        </Box>
        <Icon marginLeft="5px" name="star" size="10px" />
        <Box as="span" color="gray.500" marginLeft="5px">
          (1)
        </Box>
      </Flex>
    </Box>
  );
}

export default ExperienceCard;