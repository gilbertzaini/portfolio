"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Transition } from "./components/transition/Transition";
import Experiences from "./components/experiences/Experiences";

export default function Home() {
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
    <div>
      <Hero />
      <Transition text={"EXPERIENCES"} />
      <Experiences />
      <Transition text={"PROJECTS"} inverse={true}/>
      <Projects />
      <Transition text={"ORGANIZATIONS"} />
      <Projects />
      <Transition text={"SKILLS"} inverse={true} />
      <Skills />
    </div>
  );
}
