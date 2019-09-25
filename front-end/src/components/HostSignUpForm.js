import React from "react";
import { Text, Button, Box, Image, Flex } from "@chakra-ui/core";

function HostSignupForm(props) {
  return (
    <>
      <Flex justify="space-between">
        <Box marginX="20px">
          <Text marginTop="200px" fontWeight="bold" fontSize="5xl">
            Hi there!
          </Text>
          <Text>
            We’re excited to learn about the experience you’d like to host on A
            to Z Experiences.
          </Text>
          <Text marginTop="20px">
            In just a few minutes, you’ll start to create your experience page,
            then you’ll submit it to be reviewed by A to Z Experiences.
          </Text>

        {/* {Need to make the next button active so it continues to the next section the form} */}
          <Button marginTop="30px" variantColor="teal" size="lg">
            Next
          </Button>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1554731340-80eb1d6cec50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          width="100%"
          height="700px"
          maxWidth="600px"
          objectFit="cover"
        />
      </Flex>
    </>
  );
}

export default HostSignupForm;
