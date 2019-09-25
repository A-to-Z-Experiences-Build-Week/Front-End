import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text
} from "@chakra-ui/core";

function MomSignupForm(props) {
  return (
    <>
      <Text>Sign up Form</Text>
      <Stack spacing="16px">
        <FormControl>
          <FormLabel htmlFor="fname">First name</FormLabel>
          <Input
            type="text"
            id="fname"
            placeholder="Enter your first name here..."
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lname">Last name</FormLabel>
          <Input
            type="text"
            id="lname"
            placeholder="Enter your last name here..."
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input
            type="text"
            id="location"
            placeholder="Enter your location here..."
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Phone number</FormLabel>
          <Input
            type="phone"
            id="phone"
            placeholder="Enter your phone number here..."
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Select your interests</FormLabel>
          <RadioGroup defaultValue="Photography" isInline spacing="30px">
            <Radio value="Cooking">Cooking</Radio>
            <Radio value="Yoga">Yoga</Radio>
            <Radio value="Photography">Photography</Radio>
            <Radio value="Pet walk">Pet Walk</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email address here..."
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password here..."
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
          <Input
            type="password"
            id="cpassword"
            placeholder="Confirm your password..."
          />
        </FormControl>
        <button>Submit</button>
      </Stack>
    </>
  );
}

export default MomSignupForm;