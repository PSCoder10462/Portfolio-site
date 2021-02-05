import React from "react";
import Card from "../card/Card";
import react_logo from "./react_logo.png";
import firebase_logo from "./firebase_logo.png";
import redux_logo from "./redux_logo.png";
import express_logo from "./express_logo.png";
import nodejs_logo from "./nodejs_logo.png";
import mongo_logo from "./mongo_logo.png";

const tech = [
  {
    pic: react_logo,
    head: "react js",
    disc:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
  },
  {
    pic: firebase_logo,
    head: "google firebase",
    disc:
      "Firebase is a toolset to “build, improve, and grow your app”. This includes things like analytics, authentication, databases, configuration, file storage, push messaging, hosting etc.",
  },
  {
    pic: redux_logo,
    head: "redux",
    disc:
      "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React.",
  },
  {
    pic: nodejs_logo,
    head: "node js",
    disc:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.",
  },
  {
    pic: mongo_logo,
    head: "mongo db",
    disc:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
  },
  {
    pic: express_logo,
    head: "express js",
    disc:
      "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
  },
];

function Technologies() {
  return (
    <div className="technologies">
      <div className="container">
        {tech.map((t) => (
          <Card pic={t.pic} head={t.head} disc={t.disc} key={t.pic} />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
