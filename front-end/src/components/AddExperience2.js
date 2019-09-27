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
import ExperienceView from "./ExperienceView";

function AddExperience2(props) {
  return (
    <>
      <Box marginLeft="40px">
        <Flex justify="space=between" align="center">
          <Stack spacing="16px" width="100%" marginRight="40px">
            <Text fontSize="48px" fontWeight="bold" paddingY="20px">
              Add an Experience
            </Text>
            <Text>Step 2</Text>
            <FormControl>
              <FormLabel htmlFor="guest-desc" marginTop="20px">
                How many moms can you take?
              </FormLabel>
              <Input type="text" id="guest-desc" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="experience-price" marginTop="20px">
                How much would this cost?
              </FormLabel>
              <Input type="text" id="eexperience-price" />
            </FormControl>
            <Button
              as={Link}
              to="/experience-view"
              variantColor="teal"
              variant="solid"
              size="lg"
              marginTop="30px"
              width="200px"
            >
              Submit
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

export default AddExperience2;
