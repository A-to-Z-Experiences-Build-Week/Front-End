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
import { Link } from "react-router-dom";

function HostSignupForm4(props) {
  return (
    <Box marginLeft="40px">
      <Flex justify="space-between" align="center">
        <Stack spacing="16px" width="100%" marginX="40px" marginTop="40px">
          <FormControl>
            <FormLabel htmlFor="fname">First name</FormLabel>
            <Input type="text" id="fname" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lname">Last name</FormLabel>
            <Input type="text" id="lname" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="phone">Phone number</FormLabel>
            <Input type="phone" id="phone" />
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
          <Button
            as={Link}
            to="/dashboard"
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
          src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80"
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

export default HostSignupForm4;
