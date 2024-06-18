import React, { useRef } from "react";
import "./transition.css";

export const Transition = ({ text, inverse }) => {
  const container = useRef(null);
  // const rotations = [130, 220, 80, 45, 100, 115, 125, 145, 170, 200];
  const bars = Array.from({ length: 10 }, (_, index) => (
    <div
      className="bar"
      data-scroll
      data-scroll-speed="0.8"
      data-scroll-direction="horizontal"
      key={index}
      // style={{ transform: `rotate(${rotations[index]}deg)` }}
    >
      <p>{text}</p>
    </div>
  ));

  return (
    <section
      ref={container}
      className={`transition-container ${inverse ? "inverse" : ""}`}
    >
      <h1 className="transition-bg">{text}</h1>
      <div>{bars}</div>
    </section>
  );
};
