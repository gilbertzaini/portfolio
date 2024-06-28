import Image from "next/image";
import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <Image className="card-img" src={props.src} fill="true" alt={props.heading} />
      </div>
      <div className="card-text pt-1 pb-2 px-4">
        <div className="card-heading">
          <p>{props.heading}</p>
        </div>
        <div className="card-position">
          <p>{props.position}</p>
        </div>
        <hr/>
        <div className="card-text">{props.text}</div>
      </div>
    </div>
  );
};
