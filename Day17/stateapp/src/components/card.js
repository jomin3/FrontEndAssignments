import React from "react";
import "./card.css";
import coin from "../coin.png";
const Card = (props) => {
  return (
    <div className="container">
      <div className="one">
        <div className="heading">{props.title}</div>
        <div className="value">
          {props.value}
          <span className="green">{props.percent}</span>
        </div>
      </div>
      <div className="two">
        <div className="logo">
          <img src={coin} />
        </div>
      </div>
    </div>
  );
};

export default Card;
