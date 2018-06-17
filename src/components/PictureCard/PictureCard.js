import React from "react";
import "./PictureCard.css";

const MatchCard = props => (
  <div className="card" onClick={() => props.changeClicked(props.id)}>
    <div className="img-container">
          <img alt={props.name} src={props.image} />
      </div>
  </div>
);

export default PictureCard;