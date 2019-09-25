import React from "react";
import { Box, Button, Link } from "@chakra-ui/core";

function ExperiencePreviewCard(props) {
  return (
    <Box>
      <Box>
        <Button>View more</Button>
        <Text>Pet Walk</Text>
        <Text>We take our pets on walks together</Text>
      </Box>
      <Box>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </Box>
    </Box>
  );
}

export default ExperiencePreviewCard;
