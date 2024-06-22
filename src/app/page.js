"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Transition } from "./components/transition/Transition";
import Experiences from "./components/experiences/Experiences";
import Organization from "./components/organization/Organization";
// import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  // const locomotiveScroll = new LocomotiveScroll();

  // AOS.init({
  //   duration: 1300,
  //   once: false,
  // });
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();

    AOS.init({
      duration: 1300,
      once: false,
    });
  }, []);

  return (
    <>
      <Hero />
      <Transition text={"EXPERIENCES"} />
      <Experiences />
      <Transition text={"PROJECTS"} inverse={true} />
      <Projects />
      <Transition text={"ORGANIZATIONS"} />
      <Organization />
      <Transition text={"SKILLS"} inverse={true} />
      <Skills />
    </>
  );
}
