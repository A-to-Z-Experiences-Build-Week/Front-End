import React from "react";
import { Heading, Box, Flex, Image } from "@chakra-ui/core";

import HostSignupForm4 from "./HostSignupForm4";

function HostSignupPage(props) {
  return (
    <>
      <Box>
        <Heading as="h1" size="lg" marginX="40px">
          Sign up Form
        </Heading>
        <Flex justify="space-between" align="center">
          <HostSignupForm4 onSubmit={values => alert(JSON.stringify(values))} />
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
    </>
  );
}

export default HostSignupPage;
