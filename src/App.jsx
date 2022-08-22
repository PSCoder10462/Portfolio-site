import { useEffect } from "react";
import About from "./about/About";
import "aos/dist/aos.css";
import "./App.css";
import GetInTouch from "./getInTouch/GetInTouch";
import Languages from "./languages/Languages";
import Nav from "./nav/Nav";
import Projects from "./projects/Projects";
import Technologies from "./technologies/Technologies.js";
import Welcome from "./welcome/Welcome";
import CpProfiles from './cpProfiles/CpProfiles.js';

import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="app">
      <Nav />
      <Welcome />
      <hr />
	  <div className='about-scroll' />
      <h2 data-aos="fade-down">about me</h2>
      <About />
      <hr />
	  <div className='projects-scroll' />
      <h2 data-aos="fade-down">projects</h2>
      <Projects />
      <hr />
	  <div className='cp-scroll' />
      <h2 data-aos="fade-down">Competitive Programming Profiles</h2>
	  <CpProfiles />
      <hr />
	  <div className='tech-scroll' />
      <h2 data-aos="fade-down">technologies</h2>
      <Technologies />
      <hr />
	  <div className='lang-scroll' />
      <h2 data-aos="fade-down">languages</h2>
      <Languages />
      <hr />
	  <div className='git-scroll' />
      <h2 data-aos="fade-down">get in touch</h2>
      <p data-aos="fade-right">
        ~ I prefer mail since we might be in different timezones...
      </p>
      <GetInTouch />
    </div>
  );
}

export default App;
