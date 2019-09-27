import React from "react";
import {
  Flex,
  Input,
  Text,
  Button,
  Image,
  Stack,
  FormControl,
  FormLabel,
  Box
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

function AddExperience(props) {
  return (
    <>
      <Box marginLeft="40px">
        <Flex justify="space=between" align="center">
          <Stack spacing="16px" width="100%" marginRight="40px">
            <Text fontSize="48px" fontWeight="bold" paddingY="20px">
              Add an Experience
            </Text>
            <Text>Step 1</Text>
            <FormControl>
              <FormLabel htmlFor="experience-name" marginTop="20px">
                What is your experience?
              </FormLabel>
              <Input type="text" id="experience-name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="experience-location" marginTop="20px">
                Where is it located?
              </FormLabel>
              <Input type="text" id="experience-location" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="experience-description" marginTop="20px">
                Describe the Experience
              </FormLabel>
              <Input type="text" id="experience-description" />
            </FormControl>
            <Button
              as={Link}
              to="/add-experience2"
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
    </>
  );
}

export default AddExperience;
