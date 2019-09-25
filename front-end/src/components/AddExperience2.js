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

function AddExperience2(props) {
  return (
    <>
      <Box marginLeft="40px">
        <Text fontSize="48px" fontWeight="bold" paddingY="20px">
          Add an Experience
        </Text>
        <Text>Step 2</Text>
        <Flex justify="space=between">
          <Stack spacing="16px" width="100%" marginRight="40px">
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
            <Button variantColor="teal" size="lg" width="100px">
              Submit
            </Button>
          </Stack>

          <Image
            src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
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

export default AddExperience2;
