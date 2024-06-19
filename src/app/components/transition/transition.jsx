import React, { useRef } from "react";
import "./transition.css";

export const Transition = ({ text, inverse }) => {
  const container = useRef(null);

  return (
    <section
      ref={container}
      className={`transition-container ${inverse ? "inverse" : ""}`}
    >
      <h1 className="transition-bg">{text}</h1>
      <div>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="bar"
            data-scroll
            data-scroll-speed="1.3"
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
