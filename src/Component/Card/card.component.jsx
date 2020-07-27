import React from "react";

import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    {/* <h1>ID: {props.monster.id}</h1> */}
    <img
      alt="monsters"
      src={`https://robohash.org/${props.monster.id}?set=set2size=180*180`}
    />
    <h2>{props.monster.name}</h2>
  </div>
);
