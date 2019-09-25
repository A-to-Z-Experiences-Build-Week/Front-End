import React from "react";
import { Text, Button, Box, Image, Flex, Stack } from "@chakra-ui/core";
import { Link } from "react-router-dom";

function HostSignupForm(props) {
  return (
    <>
      <Box marginLeft="40px">
        <Flex justify="space-between">
          <Stack spacing="16px" marginRight="40px">
            <Text marginTop="200px" fontWeight="bold" fontSize="5xl">
              Hi there!
            </Text>
            <Text>
              We’re excited to learn about the experience you’d like to host on
              A to Z Experiences.
            </Text>
            <Text marginTop="20px">
              In just a few minutes, you’ll start to create your experience
              page, then you’ll submit it to be reviewed by A to Z Experiences.
            </Text>

            {/* {Need to make the next button active so it continues to the next section the form} */}
            <Button
              as={Link}
              to="/host-signup"
              variantColor="teal"
              variant="solid"
              size="lg"
              marginTop="30px"
              width="200px"
            >
              Next
            </Button>
          </Stack>

          <Image
            src="https://images.unsplash.com/photo-1526277015674-026cb84653ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            width="100%"
            height="700px"
            maxWidth="600px"
            objectFit="cover"
          />
        </Flex>
      </Box>
    </>
  );
}

export default HostSignupForm;
