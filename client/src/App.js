import React from "react";
import "./App.css";
import Header from "./components/HomepageComponents/Header";
import Navbar from "./components/HomepageComponents/Navbar";
import About from "./components/HomepageComponents/About";
import Education from "./components/HomepageComponents/Education";
import Projects from "./components/HomepageComponents/Projects";
import Contact from "./components/HomepageComponents/Contact";
import Footer from "./components/HomepageComponents/Footer";
import Login from "./components/HomepageComponents/Login";
//admin components
import Admin from "./components/AdminComponents/Admin";
//edit components
import EditAbout from "./components/EditComponents/EditAbout";
import EditEducation from "./components/EditComponents/EditEducation";
import EditProjects from "./components/EditComponents/EditProjects";
import EditExperience from "./components/EditComponents/EditExperience";

import { Route } from "react-router-dom";
import Experience from "./components/HomepageComponents/Experience";
import { Element } from "react-scroll";

function App() {
  return (
      <div className="App">
        {/* navbar */}

        <Navbar />

        <Element className="Home">
          <Route exact path="/" component={Header} />
        </Element>

        <Element className="About">
          <Route exact path="/" component={About} />
        </Element>

        <Element className="Education">
          <Route exact path="/" component={Education} />
        </Element>

        <Element className="Projects">
          <Route exact path="/" component={Projects} />
        </Element>

        <Element className="Experience">
          <Route exact path="/" component={Experience} />
        </Element>

        <Element className="Contact">
          <Route exact path="/" component={Contact} />
        </Element>

        <Route exact path="/login" render={() => <Login />} />

        <Route exact path="/admin" render={() => <Admin />} />

        <Route exact path="/edit/:id" component={EditAbout} />

        <Route exact path="/editEducation/:id" component={EditEducation} />
        <Route exact path="/editProject/:id" component={EditProjects} />
        <Route exact path="/editExperience/:id" component={EditExperience} />

        <Route component={Footer} />
      </div>
  );
}

export default App;
