import React from "react";
import "./Welcome.css";
import Typing from "react-typing-animation";

function Welcome() {
  return (
    <Typing>
      <div className="welcome">
        <h1>
          Hello, <br /> I am
          <span> Parv Sharma </span>
        </h1>
      </div>
    </Typing>
  );
}

export default Welcome;
