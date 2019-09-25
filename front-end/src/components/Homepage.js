import React from "react";
import Header from "./Header";
import ExperienceCard from "./ExperienceCard";
import {
  Text,
  Box,
  Heading,
  Stack,
  Button,
  ButtonGroup
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <>
      <Box>
        <Box marginX="20px" textAlign="center">
          <Text
            marginTop="100px"
            color=""
            fontWeight="bold"
            textTransform="uppercase"
          >
            A - Z Experiences
          </Text>

          <Heading as="h1" size="2xl" lineHeight="1.7" marginTop="40px">
            One of a Kind Experience for Moms!
          </Heading>
          <Stack>
            <ButtonGroup spacing={2} marginTop="80px">
              <Button
                as={Link}
                to="/give-experience"
                variantColor="teal"
                variant="solid"
                size="lg"
              >
                Give Experience
              </Button>
              <Button
                variantColor="teal"
                variant="outline"
                size="lg"
                as={Link}
                to="/get-experience"
              >
                Get Experience
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
      <Box marginTop="300px" marginX="40px">
        <Heading as="h1" size="lg">
          A - Z Experiences around Lagos
        </Heading>
        <Text>
          Multi-day activities led by local experts—activities, meals, and stays
          included
        </Text>
      </Box>
      <Stack isInline spacing="40px" marginX="40px" marginTop="30px">
        <ExperienceCard
          title="Wakarusa"
          desc="Farm stay in Indiana Amish country"
          currency="$"
          rating="5.0"
          price="240"
          ratingCount="(1)"
          image="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
        />
        <ExperienceCard
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-319972-media_library/original/1a77acac-6fdd-4628-ac5d-ed694e72f32a.jpeg?aki_policy=poster"
          title="Pluto"
          currency="$"
          rating="4.7"
          price="150"
          desc="Handmade Day with Ju Sike"
          ratingCount="(1)"
        />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </Stack>
    </>
  );
}

export default Homepage;
