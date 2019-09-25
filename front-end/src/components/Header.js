import React from "react";
import Nav from "../Nav";
import Search from "../Search";
import { Flex, Stack } from "@chakra-ui/core";
import Logo from "./Logo";

function Header(props) {
  return (
    <>
      <Flex
        paddingY="10px"
        justify="space-between"
        paddingX="20px"
        align="center"
      >
        <Stack isInline spacing="40px">
          <Logo height="32px" />
          <Search />
        </Stack>
        <Nav color="teal.600" />
      </Flex>
    </>
  );
}

export default Header;