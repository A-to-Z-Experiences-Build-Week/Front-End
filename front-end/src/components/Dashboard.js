import React from "react";
import ExperiencePreviewCard from "./ExperiencePreviewCard";
import { Text, Heading, Button, Flex, Box } from "@chakra-ui/core";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <>
      <Box marginX="40px" marginTop="40px">
        <Flex justify="space-between">
          <Heading>Your Experiences</Heading>
          {/* <Button rightIcon={FaPlus} variantColor="teal" variant="outline">
            Create Experience
          </Button> */}
          <Button
            as={Link}
            rightIcon={FaPlus}
            to="/add-experience"
            variantColor="teal"
            variant="outline"
          >
            Create Experience
          </Button>
        </Flex>
        <ExperiencePreviewCard />
      </Box>
    </>
  );
}

export default Dashboard;
