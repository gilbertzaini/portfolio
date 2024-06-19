import React, { useRef } from "react";
import "./transition.css";

export const Transition = ({ text, inverse }) => {
  const container = useRef(null);
  const rotations = [0, 20, 40, 60, 80, 90, 110, 130, 150, 170, 190, 210, 230, 250, 180];

  return (
    <section
      ref={container}
      className={`transition-container ${inverse ? "inverse" : ""}`}
    >
      <h1 className="transition-bg">{text}</h1>
      <div>
        {rotations.map((val, index) => (
          <div
            key={index}
            className="bar"
            data-scroll
            data-scroll-speed="1.3"
            data-scroll-direction="horizontal"
            // style={{ transform: `rotate(${val}deg)` }}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
