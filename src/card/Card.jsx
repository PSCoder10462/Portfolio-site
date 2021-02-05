import React from "react";
import "./Card.css";

function Card({ pic, head, disc }) {
  return (
    <div className="card" data-aos="flip-up">
      <img src={pic} alt={head} />
      <h3>{head}</h3>
      <p>{disc && disc}</p>
    </div>
  );
}

export default Card;
