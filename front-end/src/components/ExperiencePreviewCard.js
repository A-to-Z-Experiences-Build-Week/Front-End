import React from "react";
import { Box, Button, Link, Image, Flex, Text } from "@chakra-ui/core";

function ExperiencePreviewCard(props) {
  return (
    <Box marginTop="60px">
      <Flex
        bg="gray.100"
        align="center"
        justify="space-between"
        paddingY="20px"
      >
        <Box marginLeft="20px" paddingBottom="20px">
          <Text fontSize="24px" fontWeight="bold" marginTop="40px">
            Pet Walk
          </Text>
          <Text fontSize="18px">We take our pets on walks together</Text>
        </Box>
        <Image
          bg="gray.200"
          marginRight="100px"
          borderRadius="full"
          size="140px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1530700131180-d43d9b8cc41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1438&q=80"
        />
      </Flex>
    </Box>
  );
}

export default ExperiencePreviewCard;
