import React from "react";
import mail from "./mail.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import "./GetInTouch.css";

function GetInTouch() {
  return (
    <div className="getInTouch">
      <a
        href="mailto:pscoder10462@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={mail} alt="e-mail" className="gmail" data-aos="fade-right" />
      </a>
      <a
        href="https://www.linkedin.com/in/parv-sharma10462/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          data-aos="fade-up"
          className="linkedin"
          src={linkedin}
          alt="linked-in"
        />
      </a>
      <a
        href="https://github.com/PSCoder10462/"
        rel="noreferrer"
        target="_blank"
        data-aos="fade-left"
      >
        <img src={github} alt="github" className="github" />
      </a>
    </div>
  );
}

export default GetInTouch;
