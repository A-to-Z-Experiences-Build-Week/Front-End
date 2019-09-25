import React from "react";
import { Text, Flex, Image, Box, Icon, Stack, Grid } from "@chakra-ui/core";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegClock,
  FaUserFriends
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Text fontSize="xs">Have plenty of fun</Text>
        <Text marginY="10px" fontSize="36px" fontWeight="bold">
          Food Tour
        </Text>
        <Grid gap="24px" templateColumns="80px 80px">
          <IconText icon={FaMapMarkerAlt}>Tokyo</IconText>
          <IconText icon={FaCalendarAlt}>Availabile </IconText>
          <IconText icon={FaRegClock}>10:00am</IconText>
          <IconText icon={FaUserFriends}>4 Moms</IconText>
        </Grid>
        <Box>
          <Text marginY="20px" fontSize="24px" fontWeight="bold">
            What we'll do
          </Text>
          <Text>
            When you begin to imagine a trip to Tokyo the desire is not only to
            see the eternal city, its monuments and art, but also to enjoy
            excellent food, discover new flavors and satisfy the palate. My aim
            is to give life to your dream accompanying you on a journey that
            will satisfy all your senses. We catch up in front of Tokyo station.
            Tokyo is a big City. However, I will message you with instruction
            and photos, so no worries! After everyone arrives at the meeting
            spot, I will explain about why I choose this town and where we go
            today.
          </Text>
        </Box>
        <Box>
          <Text marginY="20px" fontSize="24px" fontWeight="bold">
            About the Host
          </Text>
          <Text>
            I'm an Internationally recognied chef residing in Tokyo. I have been
            to almost all Michelin Ramen stores in Tokyo. I am a tour guide in a
            very special catacumba since it is the only one in Rome which
            entrance is inside a church, for this reason it's a very special
            place not busy. I have an affinity for stay at home moms and willing
            to let them experience food in a most relaxing atmosphere.
          </Text>
          <Box paddingY="20px">
            <Link marginLeft="30px">Edit</Link>
            <Link marginLeft="40px">Delete</Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ExperienceView;
