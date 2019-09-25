import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset, Text } from "@chakra-ui/core";

// Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./components/Homepage";

//Remove forms
// import ExperienceCard from "./components/ExperienceCard";
// import ExperienceView from "./components/ExperienceView";
import MomSignupForm from "./components/MomSignupForm";
import HostSignupForm from "./components/HostSignupForm";
import Search from "./components/Search";
// import HostSignupForm2 from "./components/HostSignupForm2";
// import HostSignupForm3 from "./components/HostSignupForm3";
// import HostSignupForm4 from "./components/HostSignupForm4";

// import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      {/* <Nav bg="red.300" />  */}
      <Header />

      <Route path="/login" component={Login} />
      <Route exact path="/" component={Homepage} />
      <Route path="/get-experience" component={MomSignupForm} />
      <Route path="/give-experience" component={HostSignupForm} />
    </ThemeProvider>
  );
}

export default App;
