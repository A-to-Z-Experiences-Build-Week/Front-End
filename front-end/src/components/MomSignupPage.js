import React from "react";
import { Heading, Box, Flex, Image } from "@chakra-ui/core";
import MomSignupForm from "./MomSignupForm";

function MomSignupPage(props) {
  return (
    <>
      <Box>
        <Heading as="h1" size="lg" marginX="40px">
          Sign up Form
        </Heading>
        <Flex justify="space-between" align="center">
          <MomSignupForm onSubmit={values => alert(JSON.stringify(values))} />
          <Image
            src="https://images.unsplash.com/photo-1554731340-80eb1d6cec50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
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

export default MomSignupPage;
