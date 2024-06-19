"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Transition } from "./components/transition/transition";

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
      <Projects />
      <Transition text={"SKILLS"} inverse={true} />
      <Skills />
    </div>
  );
}
