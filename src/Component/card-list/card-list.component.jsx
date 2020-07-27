import React from "react";

import { Card } from "../Card/card.component.jsx";

import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.mon.map((monsters) => (
        <Card key={monsters.id} monster={monsters} />
      ))}
    </div>
  );
};
