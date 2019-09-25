import React from "react";
import { Box } from "@chakra-ui/core";

function Logo(props) {
  return (
    <Box
      as="svg"
      viewBox="0 0 78 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.48 40.082H16.32L10.203 52H.852L28.484.812h7.805L46.203 52h-8.719L35.48 40.082zM19.977 32.91H34.32l-3.48-21.164L19.977 32.91z"
        fill="#F56565"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78 46.5H45.78L72 12.175V25h6V1H42l1.503 5.534h24.363L37 46.956V52h41v-5.5z"
        fill="#319795"
      />
    </Box>
  );
}

export default Logo;
