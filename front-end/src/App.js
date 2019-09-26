import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset, Text } from "@chakra-ui/core";

// Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./components/Homepage";
import AddExperience from "./components/AddExperience";
import AddExperience2 from "./components/AddExperience2";

//Remove forms
// import ExperienceCard from "./components/ExperienceCard";
import ExperienceView from "./components/ExperienceView";
import MomSignupForm from "./components/MomSignupForm";
import HostSignupForm from "./components/HostSignupForm";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import HostSignupForm2 from "./components/HostSignupForm2";
import HostSignupForm3 from "./components/HostSignupForm3";
import HostSignupForm4 from "./components/HostSignupForm4";
// import HostSignupForm4 from "./components/HostSignupForm4";
import MomSignupPage from "./components/MomSignupPage";
import About from "./components/About";

// import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      {/* <Nav bg="red.300" />  */}
      <Header />

      <Route path="/login" component={Login} />
      <Route exact path="/" component={Homepage} />
      <Route path="/get-experience" component={MomSignupPage} />
      <Route path="/give-experience" component={HostSignupForm} />
      <Route path="/about-us" component={About} />
      {/* <Route path="/about-us" render={props => <About />} /> */}
      <Route path="/host-signup" component={HostSignupForm2} />
      <Route path="/host-signup2" component={HostSignupForm3} />
      <Route path="/host-signup3" component={HostSignupForm4} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add-experience" component={AddExperience} />
      <Route path="/add-experience2" component={AddExperience2} />
      <Route path="/experience-view" component={ExperienceView} />
    </ThemeProvider>
  );
}

export default App;
