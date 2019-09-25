import React from "react";
import { Text, Flex, Image, Box, Icon, Stack, Grid } from "@chakra-ui/core";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegClock,
  FaUserFriends
} from "react-icons/fa";

function IconText(props) {
  const { icon, children, ...rest } = props;
  return (
    <Stack isInline align="center" fontSize="sm" {...rest}>
      <Box flexShrink="0" as={icon} />
      <Box as="span">{children}</Box>
    </Stack>
  );
}

function ExperienceView(props) {
  return (
    <Flex>
      <Image
        src="https://a0.muscache.com/im/pictures/107818567/9f33f9e9_original.jpg?aki_policy=xx_large"
        width="100%"
        height="700px"
        maxWidth="600px"
        objectFit="cover"
      />
      <Box marginLeft="40px" marginTop="10px">
        <Text fontSize="xs">Hike</Text>
        <Text marginY="10px" fontSize="36px" fontWeight="bold">
          Waterfall Hike
        </Text>
        <Grid gap="24px" templateColumns="80px 80px">
          <IconText icon={FaMapMarkerAlt}>Location</IconText>
          <IconText icon={FaCalendarAlt}>Availability</IconText>
          <IconText icon={FaRegClock}>Time</IconText>
          <IconText icon={FaUserFriends}>Guests</IconText>
        </Grid>
        <Box>
          <Text marginY="20px" fontSize="24px" fontWeight="bold">
            What we'll do
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
        <Box>
          <Text marginY="20px" fontSize="24px" fontWeight="bold">
            About the Host
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default ExperienceView;
