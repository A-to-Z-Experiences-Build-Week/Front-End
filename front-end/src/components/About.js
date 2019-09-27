import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { Grid, Heading, Box } from "@chakra-ui/core";

function About(props) {
  return (
    <Box maxWidth="1000px" marginX="auto" marginBottom="30px">
      <Heading as="h1" textAlign="center" marginY="20px">
        Meet the Team
      </Heading>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap="80px"
      >
        <TeamMemberCard
          name="Brock Falfas"
          imageUrl="https://avatars0.githubusercontent.com/u/44629842?s=460&v=4"
          address="Sarasota, FL"
          title="Product Manager"
        />
        <TeamMemberCard
          name="Bishop Lake"
          imageUrl="https://atozlandingpage.netlify.com/img/mem4.png"
          address="Louisiana"
          title="Assistant Product Manager & Back-End Developer"
        />
        <TeamMemberCard
          name="Mimi Hoang"
          imageUrl="https://atozlandingpage.netlify.com/img/mem3.png"
          address="Orlando, FL"
          title="Back-End Developer"
        />
        <TeamMemberCard
          name="Nick Gonzalez"
          imageUrl="https://atozlandingpage.netlify.com/img/mem5.jpeg"
          address="Fort. Lauderdale, FL"
          title="Front-End Developer"
        />
        <TeamMemberCard
          name="Folasade Agbaje"
          imageUrl="https://avatars1.githubusercontent.com/u/53586167?s=460&v=4"
          address="Lagos, Nigeria"
          title="Front-End Developer"
        />
        <TeamMemberCard
          name="James Aaron"
          imageUrl="https://atozlandingpage.netlify.com/img/mem6.png"
          address="Sunnyvale, CA"
          title="User Interface Developer"
        />
      </Grid>
    </Box>
  );
}

export default About;
