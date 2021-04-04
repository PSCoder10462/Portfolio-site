import React from "react";
import imessage from "./imessage.png";
import twitter from "./twitter.png";
import portfolio from "./portfolio.png";
import wssap from "./wssap.png";
import Card from "../card/Card";

const proj = [
  {
    pic: wssap,
    head: "whatsapp clone",
    link: "https://ps-whatsapp.netlify.app/",
  },
  {
    pic: twitter,
    head: "twitter clone",
    link: "https://ps-twitter.web.app/",
  },
  {
    pic: imessage,
    head: "iMessage clone",
    link: "https://ps-imessage.web.app/",
  },
  {
    pic: portfolio,
    head: "portfolio",
    link: "https://parvsharma.netlify.app/",
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        {proj.map((p) => (
          <Card pic={p.pic} head={p.head} link={p.link} key={p.pic} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
