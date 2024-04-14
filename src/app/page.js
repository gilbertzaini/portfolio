"use client";

import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
// import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";

export default function Home() {
  useEffect(() => {
    // const locomotiveScroll = new LocomotiveScroll({
    // el: document.querySelector("[data-scroll-container]"),
    // smooth: true,
    // Add any other options you need
    // });

    // locomotiveScroll.init();

    AOS.init({
      duration: 1300,
      once: false,
    });

    // Clean up function
    // return () => {
    //   locomotiveScroll.destroy();
    // };
  }, []);

  return (
    <div>
      {/* <section className="secondary-bg" data-scroll-container>
        <h1 data-scroll data-scroll-direction="vertical">
          test heading
        </h1>
        <h3>Test subheading</h3>
        <p className="text-heading">test text heading</p>
        <p className="text-subheading" data-scroll data-scroll-speed="0.6">
          test text subheading
        </p>
        <p>test text</p>
        <button>test button</button>
        <div className="secondary-bg" data-scroll data-scroll-speed="1">
          test
        </div>
      </section>
      <section data-scroll-container>
        <div>
          <div
            className="transition-text mt-5"
            data-scroll
            data-scroll-speed="1"
            data-aos="fade-zoom-in"
          >
            EXPERIENCES
          </div>
          <div
            className="transition-text mt-5"
            data-scroll
            data-scroll-speed="0.6"
            data-scroll-direction="horizontal"
          >
            EXPERIENCES
          </div>
          <div
            className="transition-text mt-5"
            data-scroll
            data-scroll-speed="0.4"
            data-scroll-direction="horizontal"
          >
            EXPERIENCES
          </div>
          <div
            className="transition-text mt-5"
            data-scroll
            data-scroll-speed="4"
          >
            EXPERIENCES
          </div>
        </div>
      </section> */}
      <Hero />
      <Projects/>
      <Skills/>
    </div>
  );
}
