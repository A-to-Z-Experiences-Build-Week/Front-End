import React from "react";
import {
  Box,
  Flex,
  Stack,
  FormControl,
  Textarea,
  FormLabel,
  Image,
  Button
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

function HostSignupForm3(props) {
  return (
    <Box marginLeft="40px">
      <Flex justify="space=between" align="center">
        <Stack spacing="16px" width="100%" marginRight="40px">
          <FormControl>
            <FormLabel htmlFor="self-description">
              Describe yourself to guests
            </FormLabel>
            <Textarea
              id="self-description"
              placeholder="This is your time to tell us about yourself and how you're a great host"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="experience-description" marginTop="20px">
              Describe the experiences you'll provide
            </FormLabel>
            <Textarea
              id="experience-description"
              placeholder="Write about each activity in a fun and exciting way"
            />
          </FormControl>
          <Button
            as={Link}
            to="/host-signup3"
            variantColor="teal"
            variant="solid"
            size="lg"
            marginTop="30px"
            width="200px"
          >
            Continue
          </Button>
        </Stack>

        <Image
          src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          width="100%"
          height="700px"
          maxWidth="600px"
          objectFit="cover"
          display={{ sm: "none", md: "block" }}
        />
      </Flex>
    </Box>
  );
}

export default HostSignupForm3;
