import React from "react";
import "./Card.css";

function Card({ pic, head, disc, link }) {
  return (
    <div className="card" data-aos="flip-up">
      <img src={pic} alt={head} />
      <h3>{head}</h3>
      <p>{disc && disc}</p>
      <a href={link && link} target="_blank" id="card__link" rel="noreferrer">
        {link}
      </a>
    </div>
  );
}

export default Card;
