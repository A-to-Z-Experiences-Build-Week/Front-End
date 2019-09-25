import React from "react";
import ExperiencePreviewCard from "./ExperiencePreviewCard";
import { Text, Heading, Button, Flex } from "@chakra-ui/core";

function Dashboard(props) {
  return (
    <>
      <Flex>
        <Heading>Your Experiences</Heading>
        <Button>Create Experience</Button>
      </Flex>
      <ExperiencePreviewCard />
    </>
  );
}

export default Dashboard;
