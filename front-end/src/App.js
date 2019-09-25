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
      {/* <Nav bg="red.300" />  */}
        <Header />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/userDashboard" component={Dashboard} />
        <Route path="/get-experience" component={MomSignupForm} />
        <Route path="/give-experience" component={HostSignupForm} />
    
    </ThemeProvider>
  );
}

export default App;
