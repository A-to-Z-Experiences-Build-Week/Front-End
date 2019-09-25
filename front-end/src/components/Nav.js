import React from "react";
import { Box, Stack } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/core";

function Nav(props) {
  return (
    <Stack isInline spacing="40px" padding="10px" justify="flex-end" {...props}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/login">
        Login
      </Link>
      <Box as={RouterLink} to="/give-experience">
        Give Experience
      </Box>
      <Box as={RouterLink} to="/get-experience">
        Get Experience
      </Box>
      <Box as={RouterLink} to="/contact-us">
        Contact us
      </Box>
      <Box as={RouterLink} to="/dashboard">
        Dashboard
      </Box>
    </Stack>
  );
}

export default Nav;
