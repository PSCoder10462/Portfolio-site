import React from "react";
import webdev from "./webdev.jpg";
import "./Services.css";
import Card from "../card/Card";

const service = {
  pic: webdev,
  head: "freelancer -: web developer and designer",
  disc: "I build, code and design websites as a FREELANCER",
};

function Services() {
  return (
    <div className="services">
      <Card pic={service.pic} head={service.head} disc={service.disc} />
    </div>
  );
}

export default Services;
