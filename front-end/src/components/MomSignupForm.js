import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Heading,
  Box,
  Flex,
  Button,
  Image,
  FormErrorMessage
} from "@chakra-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";

const validation = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  location: Yup.string().required(),
  phone: Yup.string().required(),
  interest: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

const initialValues = {
  first_name: "",
  last_name: "",
  location: "",
  phone: "",
  interest: "Photography",
  email: "",
  password: ""
};

function MomSignupForm(props) {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
      render={props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <Stack spacing="16px" marginX="40px">
              <FormControl
                isInvalid={props.errors.first_name && props.touched.first_name}
              >
                <FormLabel htmlFor="fname">First name</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.first_name}
                  name="first_name"
                  type="text"
                  id="fname"
                />
                <FormErrorMessage>{props.errors.first_name}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={props.errors.last_name && props.touched.last_name}
              >
                <FormLabel htmlFor="lname">Last name</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.last_name}
                  name="last_name"
                  type="text"
                  id="lname"
                />
                <FormErrorMessage>{props.errors.last_name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={props.errors.location && props.touched.location}
              >
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.location}
                  name="location"
                  type="text"
                  id="location"
                />
                <FormErrorMessage>{props.errors.location}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={props.errors.phone && props.touched.phone}
              >
                <FormLabel htmlFor="phone">Phone number</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.phone}
                  name="phone"
                  type="phone"
                  id="phone"
                />
                <FormErrorMessage>{props.errors.phone}</FormErrorMessage>
              </FormControl>
              <FormControl
                as="fieldset"
                isInvalid={props.errors.interest && props.touched.interest}
              >
                <FormLabel as="legend">Select your interests</FormLabel>
                <RadioGroup
                  name="interest"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.interest}
                  isInline
                  spacing="30px"
                >
                  <Radio value="Cooking">Cooking</Radio>
                  <Radio value="Yoga">Yoga</Radio>
                  <Radio value="Photography">Photography</Radio>
                  <Radio value="Pet walk">Pet Walk</Radio>
                </RadioGroup>
                <FormErrorMessage>{props.errors.interest}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={props.errors.email && props.touched.email}
              >
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  type="email"
                  id="email"
                />
                <FormErrorMessage>{props.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={props.errors.password && props.touched.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                  type="password"
                  id="password"
                />
                <FormErrorMessage>{props.errors.password}</FormErrorMessage>
              </FormControl>
              <Button type="submit" variantColor="teal" size="lg" width="100px">
                Submit
              </Button>
            </Stack>
          </form>
        );
      }}
    />
  );
}

export default MomSignupForm;
