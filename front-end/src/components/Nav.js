import React from "react";
import { Flex, Box, Stack } from "@chakra-ui/core";


// Need to add in NavLinks does it work with chakra?


function Nav(props) {
  return (
    <Stack
      bg="gray.200"
      isInline
      spacing="40px"
      padding="10px"
      justify="flex-end"
      {...props}
    >
      <Box>Your Booking</Box>
      <Box>Favorite</Box>
      <Box>Host</Box>
      <Box>Help</Box>
    </Stack>
  );
}

export default Nav;
