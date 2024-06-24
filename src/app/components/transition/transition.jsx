import React, { useRef } from "react";
import "./Transition.css";

const Transition = ({ text, inverse }) => {
  return (
    <section
      data-scroll-container
      data-scroll
      className={`transition-container ${inverse ? "inverse" : ""}`}
    >
      <h1
        className="w-full h-full flex justify-center items-center text-5xl lg:text-9xl"
        data-scroll
        data-scroll-speed="-1"
      >
        {text}
      </h1>
      <div>
        {/* top left */}
        <div className="box rotate-45 absolute top-0 left-6" />
        <div className="box rotate-45 absolute -top-44 left-40" />

        {/* mid right */}
        <div className="box rotate-45 absolute top-36 -right-56" />

        {/* bot left */}
        <div className="box rotate-45 absolute -bottom-44 left-64" />
        <div className="box rotate-45 absolute bottom-5 left-10" />
        <div className="box rotate-45 absolute bottom-56 -left-5" />

        {/* top right */}
        <div className="box rotate-45 absolute top-7 right-10"/>

        {/* bot right */}
        <div className="box rotate-45 absolute bottom-2 right-64"/>
        <div className="box rotate-45 absolute bottom-10 right-36"/>
        <div className="box rotate-45 absolute bottom-2 right-24"/>
      </div>
    </section>
  );
};

export default Transition;
