import React from "react";
import { Flex, Input, Text } from "@chakra-ui/core";

function AddExperience(props) {
  return (
    <>
      <Text fontSize="48px" fontWeight="bold" paddingY="20px">
        Add an Experience
      </Text>
      <Text>Step 1</Text>
      <Flex justify="space=between">
        <Stack spacing="16px" width="100%" marginRight="40px">
          <FormControl>
            <FormLabel htmlFor="experience-name" marginTop="200px">
              What is your experience?
            </FormLabel>
            <Input type="text" id="experience-name" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="experience-location" marginTop="200px">
              Where is it located?
            </FormLabel>
            <Input type="text" id="experience-location" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="experience-description" marginTop="200px">
              Describe the Experience
            </FormLabel>
            <Input type="text" id="experience-description" />
          </FormControl>
          <Button variantColor="teal" size="lg" width="100px">
            Continue
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
    </>
  );
}

export default AddExperience;
