import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Heading,
  Box,
  Flex,
  Button,
  Image
} from "@chakra-ui/core";

function MomSignupForm(props) {
  return (
    <>
      <Box>
        <Heading as="h1" size="lg" marginX="40px">
          Sign up Form
        </Heading>
        <Flex justify="space-between">
          <Stack spacing="16px" width="50%" marginX="40px">
            <FormControl>
              <FormLabel htmlFor="fname">First name</FormLabel>
              <Input type="text" id="fname" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lname">Last name</FormLabel>
              <Input type="text" id="lname" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input type="text" id="location" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phone">Phone number</FormLabel>
              <Input type="phone" id="phone" />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend">Select your interests</FormLabel>
              <RadioGroup defaultValue="Photography" isInline spacing="30px">
                <Radio value="Cooking">Cooking</Radio>
                <Radio value="Yoga">Yoga</Radio>
                <Radio value="Photography">Photography</Radio>
                <Radio value="Pet walk">Pet Walk</Radio>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input type="email" id="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password" id="password" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
              <Input type="password" id="cpassword" />
            </FormControl>
            <Button variantColor="teal" size="lg" width="100px">
              Submit
            </Button>
          </Stack>
          <Image
            src="https://images.unsplash.com/photo-1554731340-80eb1d6cec50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
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

export default MomSignupForm;
