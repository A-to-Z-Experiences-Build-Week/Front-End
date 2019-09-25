import React from "react";
import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Button,
  Image,
  Box
} from "@chakra-ui/core";

function HostSignupForm4(props) {
  return (
    <Box>
      <Flex justify="space-between">
        <Stack spacing="16px" width="100%" marginX="40px" marginTop="40px">
          <FormControl>
            <FormLabel htmlFor="fname">First name</FormLabel>
            <Input
              type="text"
              id="fname"
              placeholder="Enter your first name here..."
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lname">Last name</FormLabel>
            <Input
              type="text"
              id="lname"
              placeholder="Enter your last name here..."
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="phone">Phone number</FormLabel>
            <Input
              type="phone"
              id="phone"
              placeholder="Enter your phone number here..."
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email address here..."
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password here..."
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
            <Input
              type="password"
              id="cpassword"
              placeholder="Confirm your password..."
            />
          </FormControl>
          <Button variantColor="teal" size="lg" width="100px">
            Submit
          </Button>
        </Stack>
        <Image
          src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80"
          width="100%"
          height="700px"
          maxWidth="600px"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}

export default HostSignupForm4;