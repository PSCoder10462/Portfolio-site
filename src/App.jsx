import { useEffect } from "react";
import About from "./about/About";
import "aos/dist/aos.css";
import "./App.css";
import GetInTouch from "./getInTouch/GetInTouch";
import Languages from "./languages/Languages";
import Nav from "./nav/Nav";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Technologies from "./technologies/Technologies";
import Welcome from "./welcome/Welcome";
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
      <h2 data-aos="fade-down">services i provide</h2>
      <Services />
      <hr />
      <h2 data-aos="fade-down">technologies</h2>
      <Technologies />
      <hr />
      <h2 data-aos="fade-down">projects</h2>
      <Projects />
      <hr />
      <h2 data-aos="fade-down">languages</h2>
      <Languages />
      <hr />
      <h2 data-aos="fade-down">about me</h2>
      <About />
      <hr />
      <h2 data-aos="fade-down">get in touch</h2>
      <p data-aos="fade-right">
        ~ I prefer mail since we might be in different timezones...
      </p>
      <GetInTouch />
    </div>
  );
}

export default App;
