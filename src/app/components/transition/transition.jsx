import React, { useRef } from "react";
import "./transition.css";

export const Transition = (props) => {
  const container = useRef(null);

  return (
    <section
      ref={container}
      className={`transition-container ${props.inverse ? "inverse" : ""}`}
    >
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
      <div className="bar" data-scroll data-scroll-speed="0.7">
        <p>{props.text}</p>
      </div>
    </section>
  );
};
