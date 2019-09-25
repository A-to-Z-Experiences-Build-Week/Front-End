import React from 'react';
import { ThemeProvider, CSSReset, Text } from "@chakra-ui/core";

// Components 
import Nav from "./components/Nav";
import Login from "./components/Login";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceView from "./components/ExperienceView";
import MomSignupForm from "./components/MomSignupForm";
import HostSignupForm from "./components/HostSignupForm";
import HostSignupForm2 from "./components/HostSignupForm2";
import HostSignupForm3 from "./components/HostSignupForm3";
import HostSignupForm4 from "./components/HostSignupForm4";

// import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />

      <Text fontSize="3xl" color="teal.100" fontWeight="bold">
        This is text
      </Text>
      <Nav bg="red.300" /> 
      <Login />
      {/* <ExperienceCard />
      <ExperienceView /> 
      <MomSignupForm /> 
      <HostSignupForm />
      <HostSignupForm2 />
      <HostSignupForm3 />
      <HostSignupForm4 /> */}
    </ThemeProvider>
  );
}

export default App;
