import React from "react";
import me from "./me.png";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div data-aos="fade-right">
        <img src={me} alt="my_pic" className="about__mypic" />
      </div>
      <p className="about__content" data-aos="fade-left">
        Hello, my name is Parv Sharma and I am a freelance website developer and
        designer. I have over 4 years of experience in building websites. I love
        building websites. <br />
        Feel free to contact me if you -
        <ol>
          <li>Want an awesome website built for you</li>
          <li>Need help with your personal projects</li>
          <li>
            Want me to mentor you regarding HTML, CSS, JS, C++ or PYTHON 3.x
          </li>
        </ol>
      </p>
    </div>
  );
}
export default About;
