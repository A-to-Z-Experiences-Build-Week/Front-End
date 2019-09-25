import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Radio,
  RadioGroup,
  Image,
  Button,
  Box
} from "@chakra-ui/core";

function HostSignupForm2(props) {
  return (
    <Box marginLeft="40px">
      <Flex justify="space-between">
        <Stack spacing="16px">
          <FormControl>
            <FormLabel htmlFor="citylocation" marginTop="200px">
              Which City will you host your experience in?
            </FormLabel>
            <Input type="text" id="citylocation" placeholder="Enter city" />
          </FormControl>
          <FormControl as="fieldset" marginTop="20px">
            <FormLabel as="legend">
              Which of the following best describes what you are offering?
            </FormLabel>
            <RadioGroup defaultValue="group-activity">
              <Radio value="unique-activity">
                A unique activity that moms can’t do on their own
              </Radio>
              <Radio value="group-activity">
                An activity that moms can do on their own but fun done together
              </Radio>
              <Radio value="service">A service(e.g massage, babysitting)</Radio>
            </RadioGroup>
          </FormControl>
          <Button variantColor="teal" size="lg" width="100px">
            Continue
          </Button>
        </Stack>

        <Image
          src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
          width="100%"
          height="700px"
          maxWidth="600px"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}

export default HostSignupForm2;