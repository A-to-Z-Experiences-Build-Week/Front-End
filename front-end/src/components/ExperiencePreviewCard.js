import React from "react";
import { Box, Button, Link, Image, Flex, Text } from "@chakra-ui/core";

function ExperiencePreviewCard(props) {
  return (
    <Box>
      <Flex bg="gray.300">
        <Box>
          <Button>View more</Button>
          <Text>Pet Walk</Text>
          <Text>We take our pets on walks together</Text>
        </Box>
        <Image bg="gray.200" />
      </Flex>
      <Box>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </Box>
    </Box>
  );
}

export default ExperiencePreviewCard;
