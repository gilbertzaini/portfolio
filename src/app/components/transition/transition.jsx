import React, { useRef } from "react";
import "./transition.css";

const Transition = ({ text, inverse }) => {
  return (
    <section
      data-scroll-container
      data-scroll
      className={`transition-container ${inverse ? "inverse" : ""}`}
    >
      <h1
        className="font-montserrat w-full h-full flex justify-center items-center text-5xl lg:text-9xl"
        data-scroll
        data-scroll-speed="-1"
      >
        {text}
      </h1>
      <div>
        {/* top left */}
        <div className="box rotate-45 absolute top-0 left-6" />
        <div className="box rotate-45 absolute -top-20 left-16" />

        {/* mid right */}
        <div className="hidden lg:block box rotate-45 absolute top-36 -right-56" />

        {/* bot left */}
        <div className="box rotate-45 absolute -bottom-44 left-64" />
        <div className="box rotate-45 absolute bottom-5 left-10" />
        <div className="box rotate-45 absolute bottom-56 -left-5" />

        {/* top right */}
        <div className="hidden lg:block box rotate-45 absolute -top-10 right-5" />

        {/* bot right */}
        <div className="hidden lg:block box rotate-45 absolute -bottom-10 right-14" />
        <div className="hidden lg:block box rotate-45 absolute bottom-10 right-36" />
        {/* <div className="hidden lg:block box rotate-45 absolute -bottom-10 right-56" /> */}
      </div>
    </section>
  );
};

export default Transition;
