import React from "react";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/core";

function Search(props) {
  return (
    <>
      <InputGroup {...props}>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input type="search" placeholder="Search" />
      </InputGroup>
    </>
  );
}

export default Search;
