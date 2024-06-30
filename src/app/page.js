"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Transition from "./components/transition/transition";
import Experiences from "./components/experiences/Experiences";
import Organization from "./components/organization/Organization";

export default function Home() {

  useEffect(() => {
    async function getLocomotive() {
      console.log("importing...");
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        }
      });
      console.log("get");
    }

    getLocomotive();

    AOS.init({
      duration: 1300,
      once: false,
    });
  }), [];

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
