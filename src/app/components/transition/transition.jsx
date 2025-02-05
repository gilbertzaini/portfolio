import React, { useEffect } from "react";
import "./transition.css";

const Transition = ({ text, inverse, first }) => {
  // useEffect(() => {
  //   // Function to update the data-scroll-offset based on screen size
  //   const updateScrollOffset = () => {
  //     const h1Element = document.querySelector("[data-scroll]");

  //     if (window.innerWidth >= 1024) {
  //       // For large screens (e.g., desktops), set a larger offset (e.g., 0.3)
  //       h1Element.setAttribute("data-scroll-speed", "0");
  //       h1Element.setAttribute("data-scroll-offset", "0");
  //     } else {
  //       // For small screens (e.g., mobile/tablets), set a smaller offset (e.g., 0.5)
  //       h1Element.setAttribute("data-scroll-speed", "-1");
  //       h1Element.setAttribute("data-scroll-offset", "0.5");
  //     }
  //   };

  //   // Initial call to set the scroll offset
  //   updateScrollOffset();

  //   // Add an event listener to update on window resize
  //   window.addEventListener("resize", updateScrollOffset);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", updateScrollOffset);
  //   };
  // }, []);

  return (
    <section
      className={`transition-container ${inverse ? "inverse" : ""} relative`}
      data-scroll-section
    >
      <h1
        className={`font-montserrat text-5xl lg:text-9xl w-full h-full flex justify-center items-center relative 
        ${first ? "cond-margin" : ""}`}
        data-scroll
        data-scroll-speed="-.5"
        data-scroll-delay="1"
        data-scroll-direction="vertical"
        data-scroll-repeat
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
